
from rest_framework import serializers
from .models import Chat, Room
from math import perm

class ChatSerializer(serializers.ModelSerializer):
    # owner = serializers.ReadOnlyField(source= "user.username")
    # is_owner = serializers.SerializerMethodField('get_is_owner')
    class Meta:
        model = Chat
        fields= '__all__'

    # def get_is_owner(self, obj):
    #     if obj.user == self.context['request'].user:
    #         return 'owner'
    #     elif self.request.user.is_staff:
    #         return 'staff'

    #     return 'Read Only'
    #     # return obj.user == self.request.user

class RoomSerializer(serializers.ModelSerializer):
    # chat = serializers.ChatSerializer()
    class Meta(ChatSerializer.Meta):
        model = Room
        fields = ['id','room', 'chats']
        depth=1
      
    
    

    # def create(self, validate_data):
    #     roomname_data = validate_data('roomname')
    #     room = Room.objects.create(**validate_data)
    #     Chat.objects.create(roomname=room, **roomname_data)
    #     return room

