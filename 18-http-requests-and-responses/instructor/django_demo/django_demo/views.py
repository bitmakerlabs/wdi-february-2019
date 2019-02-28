from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render

def welcome_page(request):
    html = render(request, 'welcome.html')
    return HttpResponse(html)

def about_page(request):
    context = {'name': 'Mister Toast',
               'profile_img_url': 'https://s3.amazonaws.com/bitmakerhq/resources/web-development/bitkittens/20160709_164721.jpeg',
               'hobbies': ['napping', 'cuddles', 'squirrel watching']
              }
    html_string = render(request, 'about.html', context)
    return HttpResponse(html_string)

def about_owner(request):
    context = {'name': 'Natalie',
               'profile_img_url': None,
               'hobbies': ['napping', 'teaching']
              }

    html_string = render(request, 'about.html', context)
    return HttpResponse(html_string)

def home_page(request):
    return HttpResponseRedirect('welcome/')

