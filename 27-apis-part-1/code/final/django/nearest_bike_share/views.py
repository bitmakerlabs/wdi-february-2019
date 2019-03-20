from django.http                 import HttpResponse
from django.template             import loader
from django.template.defaulttags import register
from pprint                      import pprint
from bike_share                  import *

Station.create_stations()

def main(request):

  address = request.POST.get('address')
  context = { 'number_of_stations': len(Station.all_stations) }

  if address:
    current_location            = Location(address)
    nearest_station             = NearestStation(current_location).result
    directions                  = MapQuestAPI.get_directions(current_location, nearest_station.location)
    context['current_location'] = current_location
    context['nearest_station']  = nearest_station
    context['directions']       = directions
    template                    = loader.get_template('directions.html')
  else:
    template = loader.get_template('address.html')

  return HttpResponse(template.render(context, request))

@register.filter(name='narrative')
def narrative(direction):
  return direction['narrative']
