from django.contrib import admin
from restaurants.models import Restaurant, Reservation, Category, Profile

# Register your models here.
admin.site.register(Restaurant)
admin.site.register(Reservation)
admin.site.register(Category)
admin.site.register(Profile)
