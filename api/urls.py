from django.urls import path, include
from . import views

urlpatterns = [
    path('chats/',include('chats.urls')),

]