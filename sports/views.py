from django.shortcuts import render, redirect
from django.http import JsonResponse
from .forms import RecruitingForm, ContactForm  # Import your forms
from .models import Player  # Import your Player model for saving recruiting info
from rest_framework.decorators import api_view

# Index page view
def index(request):
    return render(request, 'index.html')

# Contact form view
@api_view(['POST'])
def contact_form(request):
    form = ContactForm(data=request.data)  # Initialize the form with POST data
    if form.is_valid():
        form.save()  # Save the form data to the database if valid
        return JsonResponse({'message': 'Contact form submitted successfully!'}, status=200)
    return JsonResponse({'errors': form.errors}, status=400)  # Return errors if form is invalid

# Recruit form view
@api_view(['POST'])
def recruit_form(request):
    form = RecruitingForm(data=request.data)  # Initialize the form with POST data
    if form.is_valid():
        form.save()  # Save the recruit info to the database if valid
        return JsonResponse({'message': 'Recruit form submitted successfully!'}, status=200)
    return JsonResponse({'errors': form.errors}, status=400)  # Return errors if form is invalid
