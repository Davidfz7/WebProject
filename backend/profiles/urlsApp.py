from django.urls import path
from . import views

urlpatterns = [
    path('', views.register, name='home'),
    path('login/', views.my_login_view, name='profiles'),
    path('content/', views.content, name='content'),
    path('personalProfile/', views.personalProfile, name='personal'),
    path('logout_user/', views.logout_view, name="logout")
]