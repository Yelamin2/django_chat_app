from rest_framework import serializers
from .models import Chat, Room

class ChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields= '__all__'

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'