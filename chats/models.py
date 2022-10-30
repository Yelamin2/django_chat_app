from email.policy import default
from django.db import models
from django.conf import settings
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.
class Room(models.Model):
    room= models.CharField(max_length=40)

    def __str__(self):
        return self.room

class Chat(models.Model):
    message =models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    time = models.DateTimeField(auto_now_add=True, null=True)
    room = models.ForeignKey(Room, on_delete=models.CASCADE, blank=True, related_name="chats")

    def __str__(self):
        return "%s %s" % (self.room, self.message)




    

