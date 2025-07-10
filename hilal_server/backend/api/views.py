from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, CustomUserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import CustomUser
# Create your views here.


class CreateUserView(generics.CreateAPIView):
    """
    View to create a new user.
    """
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [AllowAny]  # Allow any user to create an account
