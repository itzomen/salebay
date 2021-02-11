from django.shortcuts import render
from django.http import JsonResponse
from .products import products

# for django-rest framework
from rest_framework.decorators import api_view
from rest_framework.response import Response



@api_view(['GET'])
def getRoutes(request):
    routes = [
        'api/',
    ]
    return Response(routes)


@api_view(['GET'])
def getProducts(request):
    return Response(products)


@api_view(['GET'])
def getProduct(request, pk):

    product = None
    for i in products:
        if i['_id'] == pk:
            product = i
            break

    return Response(product)