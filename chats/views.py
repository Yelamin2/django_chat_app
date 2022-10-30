from webbrowser import get
from rest_framework import generics
from .permissions import IsAuthorOrAdminOrReadOnly
from .models import Chat, Room
from rest_framework import generics
from django.shortcuts import get_object_or_404
from .serializers import ChatSerializer, RoomSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from . import permissions
from . import serializers
from . import models

# Create your views here.
class RoomListAPIView(generics.ListCreateAPIView):
    queryset = Room.objects.all()
    serializer_class= RoomSerializer

class RoomDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Room.objects.all()
    serializer_class= RoomSerializer
    permission_classes = (IsAuthorOrAdminOrReadOnly,)

    def get_queryset(self):
        Room =self.request.chat
        

class ChatListAPIView(generics.ListCreateAPIView):
    serializer_class = ChatSerializer
    # queryset=Chat.objects.all()
    permission_classes = (IsAuthorOrAdminOrReadOnly,)
    def get_queryset(self):
        room = self.kwargs['room']
        return Chat.objects.filter(room=room)

    

class ChatDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Chat.objects.all()
    serializer_class= ChatSerializer
    permission_classes = (IsAuthorOrAdminOrReadOnly,)
   

   
