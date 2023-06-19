from django.shortcuts import render, redirect
from django.http import HttpResponse
from .forms import ProfileForm
from .models import ProfileModel
from django.contrib.auth import authenticate, login
from django.contrib import messages
# Create your views here.

def register(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = ProfileModel.objects.create_user(username=username, password=password)
        user.save()
    return render(request, 'profiles\\register.html')

def my_login_view(request):
    if request.method == 'POST':
       username = request.POST.get('username')
       password = request.POST.get('password')
       user = authenticate(request, username=username, password=password)
       if user is not None:
            login(request, user)
            return redirect('content') ##Lo que hace esto es redirigirlo al metodo el cual quieras display
      
       else: 
            messages.error(request, 'username or password not correct')
            return redirect('profiles')
    else:
        return render(request, 'profiles\\login.html')
    
def content(request):
    current_user = request.user
    username = current_user.username
    users = []
    ids = []
    is_staff = []
    username_values = ProfileModel.objects.values('username')
    id_values = ProfileModel.objects.values('id')
    isstaff_value = ProfileModel.objects.values('is_staff')
    for obj in username_values:
        if obj['username'] in users:
            pass
        else:     
            users.append(obj['username'])
    for obj in id_values:
        ids.append(obj['id']) 
    for obj in isstaff_value:
        is_staff.append(obj['is_staff'])
    context = {'currentUser': username, 'users': users, 'ids': ids, 'is_staff': is_staff }
    return render(request, 'content_templates\\content.html', context)
