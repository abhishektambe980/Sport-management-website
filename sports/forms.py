from django import forms
from .models import Player, Contact 

class RecruitingForm(forms.ModelForm):
    class Meta:
        model = Player
        fields = ['name','age','gender','sport', 'email', 'phone', 'bio']  # Add these fields in the Player model

    # If you want to keep custom labels and widgets, you can specify them here
    name = forms.CharField(max_length=100, label='Full Name', required=True)
    age = forms.CharField(max_length=10, required=True, label='Age')
    gender = forms.ChoiceField(choices=[
        ('', 'Select your gender'),
        ('male', 'Male'),
        ('female', 'Male')
        ], required=True, label='Gender')
    sport = forms.ChoiceField(choices=[
        ('', 'Select your sport'),
        ('basketball', 'Basketball'),
        ('soccer', 'Soccer'),
        ('volleyball', 'Volleyball'),
        ('rugby', 'Rugby'),
        ('tennis', 'Tennis'),
    ], required=True, label='Sport')
    email = forms.EmailField(required=True, label='Email Address')
    phone = forms.CharField(max_length=15, required=True, label='Phone Number')
    bio = forms.CharField(widget=forms.Textarea, required=True, label='Player Bio', max_length=500)

class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact  # Assume you have a Contact model defined
        fields = ['name', 'email', 'message']

    name = forms.CharField(max_length=100, label='Full Name', required=True)
    email = forms.EmailField(required=True, label='Email Address')
    message = forms.CharField(widget=forms.Textarea, required=True, label='Message')