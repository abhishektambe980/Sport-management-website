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

git clone <repository-url>
cd "Indra Dhanush Sports"

2. Create and activate virtual environment:

python -m venv venv
# Windows:
venv\Scripts\activate
# Unix/MacOS:
source venv/bin/activate

3. Install dependencies:

pip install django djangorestframework django-cors-headers

4. Apply database migrations:

python manage.py migrate

5. Create superuser:

python manage.py createsuperuser

6. Run development server:

python manage.py runserver