from __future__ import print_function
from PIL import Image
from django.contrib import auth
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_http_methods
from django.http import HttpResponseRedirect,HttpResponse,JsonResponse
import requests as request
from django.views.generic import TemplateView, CreateView
from django.urls import reverse
from django.shortcuts import render,redirect
from django.contrib import messages
from django.contrib.auth import update_session_auth_hash
from django.contrib.auth.forms import PasswordChangeForm
from photo.models import *
from photo.forms import *




@login_required

def home( request):
    if (request.user.has_perm('can_views_vip_tools')or request.user.groups.filter(name='VIP_Member').exists()):
        return render(request,'home-vip.html')
    else :
        return render(request,'home.html')


def profileUser(request):
    context ={
        'user':request.user
    }
    return render(request, 'profile.html', context) 

def updateProfile(request):
    if request.method == 'POST':
        u_form = UserUpdateForm(request.POST, instance=request.user)
       
        if u_form.is_valid() :
            u_form.save()
           
            messages.success(request, f'Your account has been updated!')
            return redirect('updateprofile')

    else:
        u_form = UserUpdateForm(instance=request.user)
       

    context = {
        'u_form': u_form,
        
    }

    return render(request, 'updateprofile.html', context)

def change_password(request):
    if request.method == 'POST':
        form = PasswordChangeForm(request.user, request.POST)
        if form.is_valid():
            user = form.save()
            update_session_auth_hash(request, user)  # Important!
            messages.success(request, 'Your password was successfully updated!')
            return redirect('/profile')
        else:
            messages.error(request, 'Please correct the error below.')
    else:
        form = PasswordChangeForm(request.user)
    return render(request, 'change_password.html', {'form': form })

def logout(request):
    auth.logout(request)
    return redirect('/')