from email.policy import default
from django.db import models
from django.conf import settings
from django.contrib.auth.models import User

# Create your models here.
class Room(models.Model):
    room_name= models.CharField(max_length=40)

    def __str__(self):
        return self.room_name

class Chat(models.Model):
    message =models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    time = models.DateTimeField(auto_now_add=True, null=True)
    room_name = models.ForeignKey(Room, on_delete=models.CASCADE, blank=True)

    def __str__(self):
        return "%s %s" % (self.room_name, self.message)




    

