from .bike_share_api import BikeShareAPI
from .station        import Station
import requests

class NearestStation:

  mapquest_consumer_key = 'vhAaLJjtLihoyg0MNY5NxUOdIpDZ76p8'

  def __init__(self, current_location):
    station_distances = {}
    for status in BikeShareAPI.statuses():
      if status['num_bikes_available'] > 0:
        station_id                    = status['station_id']
        station                       = Station.find(station_id)
        station_distances[station_id] = self.calculate_distance(current_location, station)

    nearest_station_id = min(station_distances, key=station_distances.get)
    self.result        = Station.find(nearest_station_id)

  def calculate_distance(self, current_location, station):
    distance_lat = abs(current_location.lat - station.location.lat)
    distance_lng = abs(current_location.lng - station.location.lng)
    return distance_lat + distance_lng
