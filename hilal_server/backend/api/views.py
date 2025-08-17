from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, CustomUserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import CustomUser


# views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework import status
import requests as http_requests
from django.conf import settings
from .models import CustomUser
from rest_framework_simplejwt.tokens import RefreshToken
# Create your views here.

GOOGLE_CLIENT_ID = "945791699505-70e0rneu8v07lehbg2aoefohg1oq88mk.apps.googleusercontent.com"  # From Google Cloud

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from google.oauth2 import id_token
from google.auth.transport import requests
from .models import CustomUser
from rest_framework_simplejwt.tokens import RefreshToken
from django.conf import settings

from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework import generics
from .models import CustomUser
from .serializers import CustomUserSerializer

class CreateUserView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        email = request.data.get("email")
        password = request.data.get("password")  # Updated field name
        fname = request.data.get("fname", "")
        lname = request.data.get("lname", "")

        try:
            user = CustomUser.objects.get(email=email)
            if user.has_usable_password():
                return Response({"error": "This email is already registered with a password."}, status=400)
            else:
                # User created with social login earlier, now wants to set password
                user.set_password(password)
                user.fname = fname or user.fname
                user.lname = lname or user.lname
                user.save()

                refresh = RefreshToken.for_user(user)
                response = Response({
                    "access": str(refresh.access_token),
                    "user": {
                        "email": user.email,
                        "first_name": user.fname,
                        "last_name": user.lname,
                    }
                }, status=201)

                # Set refresh token as HttpOnly cookie
                response.set_cookie(
                    key='refresh_token',
                    value=str(refresh),
                    httponly=True,
                    secure=False,  # set to True in production with HTTPS
                    samesite='None',
                    max_age=7 * 24 * 60 * 60  # or as needed
                )
                return response

        except CustomUser.DoesNotExist:
            # Create new user
            user = CustomUser(email=email, fname=fname, lname=lname)

            user.set_password(password)
            user.save()

            refresh = RefreshToken.for_user(user)
            # return Response({
            #     "refresh": str(refresh),
            #     "access": str(refresh.access_token),
            #     "user": {
            #         "email": user.email,
            #         "first_name": user.fname,
            #         "last_name": user.lname,
            #     }
            # }, status=201)                refresh = RefreshToken.for_user(user)
            response = Response({
                    "access": str(refresh.access_token),
                    "user": {
                        "email": user.email,
                        "first_name": user.fname,
                        "last_name": user.lname,
                    }
                }, status=201)

                # Set refresh token as HttpOnly cookie
            response.set_cookie(
                    key='refresh_token',
                    value=str(refresh),
                    httponly=True,
                    secure=False,  # set to True in production with HTTPS
                    samesite='None',
                    max_age=7 * 24 * 60 * 60  # or as needed
                )
            return response



class GoogleLoginAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        token = request.data.get("id_token")
        if not token:
            return Response({"error": "No token provided"}, status=400)

        try:
            id_info = id_token.verify_oauth2_token(token, requests.Request(), GOOGLE_CLIENT_ID)
            email = id_info["email"]
            first_name = id_info.get("given_name", "")
            last_name = id_info.get("family_name", "")

            user, created = CustomUser.objects.get_or_create(email=email)
            if created:
                user.fname = first_name
                user.lname = last_name
                user.set_unusable_password()
                user.save()

            # Generate JWT
            # refresh = RefreshToken.for_user(user)
            # return Response({
            #     "refresh": str(refresh),
            #     "access": str(refresh.access_token),
            #     "user": {
            #         "email": user.email,
            #         "first_name": user.fname,
            #         "last_name": user.lname,
            #     }
            # })
            refresh = RefreshToken.for_user(user)
            response = Response({
                    "access": str(refresh.access_token),
                    "user": {
                        "email": user.email,
                        "first_name": user.fname,
                        "last_name": user.lname,
                    },
                    "user_id": user.id  # Include user ID in the response
                }, status=201)
            print("DEBUG: User created or retrieved:", response)
            print("refresh",refresh)
                # Set refresh token as HttpOnly cookie
            response.set_cookie(
                    key='refresh_token',
                    value=str(refresh),
                    httponly=True,
                    secure=True,  # set to True in production with HTTPS
                    samesite='None',
                    max_age=7 * 24 * 60 * 60  # or as needed
                )
            return response
        except Exception as e:
            return Response({"error": "Invalid token", "details": str(e)}, status=400)



class FacebookLoginAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        print("DEBUG: GoogleLoginAPIView POST method triggered")
        access_token = request.data.get('access_token')
        if not access_token:
            return Response({"error": "Access token required"}, status=400)

        # Get user info from Facebook
        fb_response = http_requests.get(
            f'https://graph.facebook.com/me?fields=id,email,first_name,last_name&access_token={access_token}'
        )
        data = fb_response.json()
        
        if 'error' in data:
            return Response({"error": "Invalid Facebook token", "details": data['error']}, status=400)

        email = data.get("email")
        if not email:
            return Response({"error": "Email not available in Facebook account"}, status=400)

        user, created = CustomUser.objects.get_or_create(email=email)
        if created:
            user.fname = data.get("first_name", "")
            user.lname = data.get("last_name", "")
            user.set_unusable_password()
            user.save()

        refresh = RefreshToken.for_user(user)
        response = Response({
                    "access": str(refresh.access_token),
                    "user": {
                        "email": user.email,
                        "first_name": user.fname,
                        "last_name": user.lname,
                    },
                    "user_id": user.id  # Include user ID in the response   
                }, status=201)

                # Set refresh token as HttpOnly cookie
        response.set_cookie(
                    key='refresh_token',
                    value=str(refresh),
                    httponly=True,
                    secure=True,  # set to True in production with HTTPS
                    samesite='None',
                    max_age=7 * 24 * 60 * 60  # or as needed
                )
        return response



from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from datetime import timedelta
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import CustomTokenObtainPairSerializer

class CustomLoginView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

    
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        refresh = response.data.get("refresh")

        if refresh:
            response.set_cookie(
                key='refresh_token',
                value=str(refresh),
                httponly=True,
                secure=True,  # set True in production
                samesite='None',
                max_age=7 * 24 * 60 * 60
            )

            
            # Remove refresh token from body if you want
            # del response.data['refresh']
        return response

class LoginView(APIView):
    permission_classes = [AllowAny] 
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        user = authenticate(request, email=email, password=password)

        if user is not None:
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)

            response = Response({
                "access": access_token,
                "user_id": user.id  # Include user ID in the response
            })

            # Set refresh token in HTTPOnly cookie
            response.set_cookie(
                key='refresh_token',
                value=str(refresh),
                httponly=True,
                secure=True,  # use True in production with HTTPS
                samesite='None',  # or 'Strict'
                max_age=7 * 24 * 60 * 60  # 7 days
            )
            
            return response
        return Response({"error": "Invalid credentials"}, status=401)
    
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken, TokenError

class RefreshTokenView(APIView):
    permission_classes = [AllowAny] 
    def post(self, request):
        refresh_token = request.COOKIES.get('refresh_token')
      
        print('refresh_token',refresh_token)

        if refresh_token is None:
            return Response({'error': 'Refresh token missing'}, status=401)

        try:
            refresh = RefreshToken(refresh_token)
            new_access = str(refresh.access_token)

            return Response({'access': new_access})
        except TokenError:
            return Response({'error': 'Invalid refresh token'}, status=401)

from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404

@api_view(['GET'])
def get_user_role(request, user_id):
    """
    API to get the role of a user based on their ID.
    """
    user = get_object_or_404(CustomUser, id=user_id)
    return Response({"role": user.role}, status=200)

class UserRoleAPIView(APIView):
    """
    API to get the role of a user based on their ID.
    """
    permission_classes = [AllowAny]

    def get(self, request, user_id):
        user = CustomUser.objects.filter(id=user_id).first()
        if not user:
            return Response({"error": "User not found"}, status=404)
        return Response({"role": user.role}, status=200)

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

class LogoutAPIView(APIView):
    """
    API to log out the user by clearing refresh and access tokens.
    """
    permission_classes = [AllowAny]

    def post(self, request):
        response = Response({"message": "Logged out successfully"}, status=200)
        response.delete_cookie('refresh_token')  # Clear refresh token cookie
        return response

