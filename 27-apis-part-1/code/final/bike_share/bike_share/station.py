from .bike_share_api import BikeShareAPI
from .location       import Location

class Station:

  all_stations = []

  def __init__(self, bike_share_station):
    self.station_id = bike_share_station['station_id']

    self.location = Location(bike_share_station['address'],
                             bike_share_station['lat'],
                             bike_share_station['lon'])

  def __repr__(self):
    return f'Station(station_id={self.station_id}, location={self.location})'

  @classmethod
  def create_stations(cls):
    for bike_share_station in BikeShareAPI.stations():
      cls.all_stations.append(Station(bike_share_station))

  @classmethod
  def find(cls, station_id):
    for station in cls.all_stations:
      if station_id == station.station_id:
        return station
