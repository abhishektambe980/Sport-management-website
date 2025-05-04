from django.contrib import admin

# Register your models here.
from .models import Team, Player, Schedule, News, Contact

admin.site.register(Team)
admin.site.register(Player)
admin.site.register(Schedule)
admin.site.register(News)
admin.site.register(Contact)