import ipdb
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from film_library.models import Film

def home(request):
    films = Film.objects.all()
    context = {'films': films}
    html_response = render(request, 'index.html', context)
    return HttpResponse(html_response)

def film_create(request):
    pass