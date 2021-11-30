from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)   
    def __str__(self):
        return f'{self.user.username} Profile'


class ImageEditModel(models.Model):
    imagename = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/')

class Getviptools(models.Model):
    class Meta:
        permissions = [('can_views_vip_tools', 'Can View Vip Tools')]
