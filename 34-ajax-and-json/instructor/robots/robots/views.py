from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from robots.models import Robot

def robots_index(request):
  context = { 'robots' : Robot.objects.all() }
  response = render(request, 'robots.html', context)
  return HttpResponse(response)

def robots_show(request, id):
  if request.is_ajax():
    robot = Robot.objects.get(pk=id)
    data = {
      'name' : robot.name,
      'address' : robot.address,
      'model_number' : robot.model_number,
      'lasers' : robot.lasers,
      'japanese' : robot.japanese
    }
    return JsonResponse(data)
  else:
    context = { 'robot': Robot.objects.get(pk=id) }
    response = render(request, 'robot.html', context)
    return HttpResponse(response)
