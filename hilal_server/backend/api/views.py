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
        password = request.data.get("password")
        first_name = request.data.get("first_name", "")
        last_name = request.data.get("last_name", "")

        try:
            user = CustomUser.objects.get(email=email)
            if user.has_usable_password():
                return Response({"error": "This email is already registered with a password."}, status=400)
            else:
                # User created with social login earlier, now wants to set password
                user.set_password(password)
                user.first_name = first_name or user.first_name
                user.last_name = last_name or user.last_name
                user.save()

                refresh = RefreshToken.for_user(user)
                return Response({
                    "refresh": str(refresh),
                    "access": str(refresh.access_token),
                    "user": {
                        "email": user.email,
                        "first_name": user.first_name,
                        "last_name": user.last_name,
                    }
                }, status=200)

        except CustomUser.DoesNotExist:
            # Create new user
            user = CustomUser(email=email, first_name=first_name, last_name=last_name)
            user.set_password(password)
            user.save()

            refresh = RefreshToken.for_user(user)
            return Response({
                "refresh": str(refresh),
                "access": str(refresh.access_token),
                "user": {
                    "email": user.email,
                    "first_name": user.first_name,
                    "last_name": user.last_name,
                }
            }, status=201)



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
                user.first_name = first_name
                user.last_name = last_name
               # user.set_unusable_password()
                user.save()

            # Generate JWT
            refresh = RefreshToken.for_user(user)
            return Response({
                "refresh": str(refresh),
                "access": str(refresh.access_token),
                "user": {
                    "email": user.email,
                    "first_name": user.first_name,
                    "last_name": user.last_name,
                }
            })
        except Exception as e:
            return Response({"error": "Invalid token", "details": str(e)}, status=400)



class FacebookLoginAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
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
            user.first_name = data.get("first_name", "")
            user.last_name = data.get("last_name", "")
            #user.set_unusable_password()
            user.save()

        refresh = RefreshToken.for_user(user)
        return Response({
            "refresh": str(refresh),
            "access": str(refresh.access_token),
            "user": {
                "email": user.email,
                "first_name": user.first_name,
                "last_name": user.last_name,
            }
        })

