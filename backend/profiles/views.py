from django.shortcuts import render, redirect
from django.http import HttpResponse
from .forms import ProfileForm
from .models import ProfileModel
from django.contrib.auth import authenticate, login
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout

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

    user = request.user
    

    if not user.is_authenticated:
        print("Redirect user because user not log in")
        return redirect('profiles')
    else:
        current_user = request.user
        username = current_user.username
        users = []
        ids = []
        is_staff = []
        datos = ProfileModel.objects.all()
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
        context = {'currentUser': username, 'users': users, 'ids': ids, 'is_staff': is_staff, 'data': datos}
        return render(request, 'content_templates\\content.html', context)

def personalProfile(request):
    current_user = request.user
    if current_user.is_authenticated:
        cru = {
            'current_user' : current_user
        }
        
        if request.method == 'POST':
            img = request.FILES.get('file')
            print("El nombre de la imagen es: ", img.name)
            current_user.profile_pic.save(img.name, img)
            print("printinig", current_user.profile_pic.path)
            print('La url de la imagen es: ', current_user.profile_pic.url)
        return render(request, 'profiles\\myinfo.html', cru)

       
    else:
        cru = {
            'current_user' : 'Usuario no autenticado'
        }

        return render(request, 'profiles\\myinfo.html', cru)
    
    
    


def logout_view(request):
    logout(request)
    messages.success(request, ("You were logged out"))
    return redirect('home')

