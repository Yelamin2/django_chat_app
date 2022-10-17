from rest_framework import generics

from chats.permissions import IsAuthorOrReadOnly
from .models import Chat, Room
from .serializers import ChatSerializer, RoomSerializer
from django.shortcuts import render

# Create your views here.
class RoomListAPIView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class= RoomSerializer

class ChatListAPIView(generics.ListCreateAPIView):
    serializer_class = ChatSerializer

    def get_queryset(self):
        room = self.kwargs['room']
        return Chat.objects.filter(room=room)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class ChatDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Chat.objects.all()
    serializer_class= ChatSerializer
    permission_classes = (IsAuthorOrReadOnly,)
