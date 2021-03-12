from django.urls import path
from base.views import api_views as views




urlpatterns = [

    path('', views.getRoutes, name="routes"),

]