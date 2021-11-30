from django import forms
from django.utils.translation import gettext_lazy as _
from photo.models import *




class UploadImageForm(forms.ModelForm):

    class Meta:
        model = ImageEditModel
        fields = ['imagename', 'image']

class UserUpdateForm(forms.ModelForm):
    email = forms.EmailField()

    class Meta:
        model = User
        fields = ['username', 'email']


