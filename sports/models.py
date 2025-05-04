from django.utils import timezone  # Make sure this import is uncommented
from django.db import models
from django.core.validators import MinValueValidator

# Create your models here.
class Team(models.Model):
    name = models.CharField(max_length=100)
    sport = models.CharField(max_length=50)
    coach = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Player(models.Model):
    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=50, default='Not Specified')
    age = models.IntegerField(null=True, blank=True, validators=[MinValueValidator(1)]) 
    sport = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    bio = models.TextField()

    def __str__(self):
        return self.name


class Schedule(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    opponent = models.CharField(max_length=100)
    date = models.DateField()
    time = models.TimeField()
    venue = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.team.name} vs {self.opponent} on {self.date}"


class News(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    date_posted = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    submitted_at = models.DateTimeField(default=timezone.now)  # Add back the 'submitted_at' field

    def __str__(self):
        return self.name
