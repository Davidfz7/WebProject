from django.forms import ModelForm

from .models import ProfileModel

class ProfileForm(ModelForm):
    class Meta:
        model = ProfileModel
        fields = ('username', 'password')
        