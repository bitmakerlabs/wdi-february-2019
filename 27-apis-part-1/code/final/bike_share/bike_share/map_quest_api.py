import json
import requests
import os

class MapQuestAPI:
  mapquest_consumer_key = os.environ.get('MAP_QUEST')

  @classmethod
  def get_location(cls, address):
    params = {
      'key':      cls.mapquest_consumer_key,
      'location': address
    }

    url              = 'http://mapquestapi.com/geocoding/v1/address'
    map_quest_result = requests.get(url, params=params).json()
    map_quest_result = requests.get(url, params=params).json()

    return map_quest_result['results'][0]['locations'][0]['latLng']

  @classmethod
  def get_directions(cls, current_location, destination):
    params = {
      'locations': [
        { 'latLng': { 'lat': current_location.lat, 'lng': current_location.lng } },
        { 'latLng': { 'lat': destination.lat,      'lng': destination.lng      } }
      ]
    }

    data             = json.dumps(params)
    url              = f'https://www.mapquestapi.com/directions/v2/route?key={cls.mapquest_consumer_key}'
    map_quest_result = requests.post(url, data=data).json()
    if map_quest_result['route'].get('legs'):
      return map_quest_result['route']['legs'][0]['maneuvers']
