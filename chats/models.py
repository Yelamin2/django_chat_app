from email.policy import default
from django.db import models
from django.conf import settings
from django.contrib.auth.models import User

# Create your models here.
class Room(models.Model):
    roomname= models.CharField(max_length=40)

    def __str__(self):
        return self.roomname

class Chat(models.Model):
    message =models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    time = models.DateTimeField(auto_now_add=True, null=True)
    roomname = models.ForeignKey(Room, on_delete=models.CASCADE, blank=True)

    def __str__(self):
        return "%s %s" % (self.roomname, self.message)




    

