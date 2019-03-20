from .map_quest_api import MapQuestAPI

class Location:

  def __init__(self, address, lat = None, lng = None):
    self.address = f'{address}, Toronto'

    if lat and lng:
      self.lat = lat
      self.lng = lng
    else:
      map_quest_result = MapQuestAPI.get_location(self.address)
      self.lat         = map_quest_result['lat']
      self.lng         = map_quest_result['lng']

  def __repr__(self):
    return f'Location{self.address, self.lat, self.lng}'
