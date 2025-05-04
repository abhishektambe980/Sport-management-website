# Indra Dhanush Sports Management System

A Django-based sports management system for managing teams, players, schedules, and recruiting.

## Features

- Team and player management
- Contact form functionality
- Recruitment system
- News and updates section
- Event scheduling
- Responsive design

## Tech Stack

- Python 3.11
- Django 4.2
- SQLite3
- HTML/CSS/JavaScript
- Django Rest Framework
- Django CORS Headers

## Setup

1. Clone the repository:

    git clone https://github.com/abhishektambe980/Sport-management-website.git
   
    cd "Indra Dhanush Sports"

3. Create and activate virtual environment:

    python -m venv venv
    ### Windows:
    venv\Scripts\activate
    ### Unix/MacOS:
    source venv/bin/activate

4. Install dependencies:

    pip install django djangorestframework django-cors-headers

5. Apply database migrations:

    python manage.py migrate

6. Create superuser:

    python manage.py createsuperuser

7. Run development server:

    python manage.py runserver
