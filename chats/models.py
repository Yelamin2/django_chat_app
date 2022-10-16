from django.db import models
from django.conf import settings
from django.contrib.auth.models import User

# Create your models here.
class Chat(models.Model):
    message =models.CharField(max_length= 500)
    author = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    time = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return "%s %s" % (self.author, self.message)


    

