from bike_share import *

print('CREATING STATIONS:')
Station.create_stations()
print(f'{len(Station.all_stations)} stations created')
print()

current_location = Location('220 King Street West')
print("CURRENT LOCATION:")
print(current_location)
print()

nearest_station = NearestStation(current_location).result
print('NEAREST STATION:')
print(nearest_station)
print()

directions = MapQuestAPI.get_directions(current_location, nearest_station.location)
print('DIRECTIONS:')
if directions:
  for direction in directions:
    print(direction['narrative'])
else:
  print('Could not find directions')
