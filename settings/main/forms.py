from .models import login
from django import forms


class loginForm(forms.ModelForm):
    
    class Meta: 
        model = login
        fields = "__all__"


