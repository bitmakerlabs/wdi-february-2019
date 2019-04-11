from django.urls import path
import pages.views as views

urlpatterns = [
    path('', views.home, name='home'),
]
