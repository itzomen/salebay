from django.urls import path
from . import views

# for simple jwt
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)




urlpatterns = [
    path('users/login', TokenObtainPairView.as_view(), 
                            name='token_obtain_pair'),
    path('', views.getRoutes, name="routes"),
    path('products/', views.getProducts, name="products"),
    path('products/<str:pk>', views.getProduct, name="product"),
]