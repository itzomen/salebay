from django.shortcuts import render
from django.http import JsonResponse

from .models import Product
from .products import products
from .serializers import ProductSerializer

# for django-rest framework
from rest_framework.decorators import api_view
from rest_framework.response import Response



@api_view(['GET'])
def getRoutes(request):
    routes = [
        'api/products',
    ]
    return Response(routes)


@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    # many for serializing many objects
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProduct(request, pk):

    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)

    return Response(serializer.data)