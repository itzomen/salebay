from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import permissions, serializers

from base.models import Product
from base.products import products
from base.serializers import ProductSerializer, UserSerializer, UserSerializerWithToken

from django.contrib.auth.models import User

# for django-rest framework
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response

# for simple jwt
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

# for register views
from django.contrib.auth.hashers import make_password
from rest_framework import status