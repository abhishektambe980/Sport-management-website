from django.urls import path
from sports import views  # Make sure you're importing from sports, not core

urlpatterns = [
    path('', views.index, name='index'),  # Main view
    path('api/contact/', views.contact_form, name='contact_form'),  # Contact form endpoint
    path('api/recruit/', views.recruit_form, name='recruit_form'),  # Recruit form endpoint
]
