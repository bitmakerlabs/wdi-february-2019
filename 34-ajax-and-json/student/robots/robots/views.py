from django.http import HttpResponse
from django.shortcuts import render
from robots.models import Robot

def robots_index(request):
  context = { 'robots' : Robot.objects.all() }
  response = render(request, 'robots.html', context)
  return HttpResponse(response)

def robots_show(request, id):
  context = { 'robot': Robot.objects.get(pk=id) }
  response = render(request, 'robot.html', context)
  return HttpResponse(response)
