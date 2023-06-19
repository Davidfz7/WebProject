from django.db import models
#Import abstract base user
from django.contrib.auth.models import AbstractBaseUser 
#Import base user manager
from django.contrib.auth.models import BaseUserManager
# Create your models here.


class ProfileManager(BaseUserManager):
    def create_user(self, username, password=None):
        if username is None:
            raise TypeError('Users must have a username.')
        user = self.model(username=username)
        user.is_staff = False
        user.is_superuser = False
        user.is_active = True
        user.set_password(password)
        user.save(using = self._db)
        return user

    def create_superuser(self, username, password):
        if password is None:
            raise TypeError('Superusers must have a password. XD')

        user = self.create_user(username, password)
        user.is_superuser = True
        user.is_staff = True
        user.save()
        return user
       
class ProfileModel(AbstractBaseUser):
    username = models.CharField(max_length=255, unique=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []
    objects = ProfileManager()
    class meta: 
        db_table = 'profiles_db'
    def __str__(self):
        return self.username
    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True
    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True
