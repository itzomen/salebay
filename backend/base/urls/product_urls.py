from django.urls import path
from base.views import product_views as views




urlpatterns = [

    path('', views.getProducts, name="products"),

    # place this before get product which requires a parameter
    # as django will confuse it with the get product url
    path('create/', views.createProduct, name="product-create"),
    path('upload/', views.uploadImage, name="image-upload"),

    # dynamic urls
    path('<str:pk>/', views.getProduct, name="product"),

    path('update/<str:pk>/', views.updateProduct, name="product-update"),
    path('delete/<str:pk>/', views.deleteProduct, name="product-delete"),
]