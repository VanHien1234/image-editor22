from django.contrib.auth import views
from django.contrib.auth import views as auth_views
from django.urls import path
from django.contrib.auth.views import LogoutView

from . import views


urlpatterns = [

        path('', views.home, name='home'),

        path('profile', views.profileUser, name= "userProfile"),
        path('updateprofile', views.updateProfile, name='updateprofile'),
        path('change_password', views.change_password, name='change_password'),
        path('logout', views.logout, name="logout"),

]


