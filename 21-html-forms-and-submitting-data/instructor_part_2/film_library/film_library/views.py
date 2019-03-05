import ipdb
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from film_library.models import Film

def temp(request):
    ipdb.set_trace()
    return HttpResponse('receive request to temp path')

def home(request):
    films = Film.objects.all()
    context = {'films': films}
    html_response = render(request, 'index.html', context)
    return HttpResponse(html_response)

def film_create(request):
    film = Film.objects.create(title=request.POST['title'],
                               description=request.POST['description'],
                               country=request.POST['country'],
                               rating=request.POST['rating']
                               )
    return HttpResponseRedirect('/')



