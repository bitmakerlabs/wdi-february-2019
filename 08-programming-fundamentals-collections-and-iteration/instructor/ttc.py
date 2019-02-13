from data import stations_with_rich_information


first_house = {'red': ['room', 'kitchen', 'bathroom'], 'blue': ['garage', 'bedroom']}
second_house = {'red': ['living room', 'bathroom'], 'blue': ['garage', 'bedroom', 'kitchen']}

houses = [first_house, second_house]

number = 1
for house in houses:
  print("House #{}".format(number))
  for colour, rooms in house.items():
    print("Colour", colour)
    print("Rooms", rooms[0])

  number += 1




# stations = stations_with_rich_information

# # breakpoint()
# lines = []

# for line_number in range(1, 5):
#   print('-------------')
#   print('Line #{}'.format(line_number))
#   print('-------------')
#   for station, values in stations.items():
#     if values['Line'] == line_number:
#       print(station)

# # print(set(lines))

# # print(station)


# # breakpoint()




















# # def stations_on_line(desired_line_number):
# #   stations_array = []

# #   for station_name, line_number in stations.items():
# #     if line_number == desired_line_number:
# #       stations_array.append(station_name)

# #   return stations_array




# # print(stations_on_line('Line 3')) # ['McCowan']
# # # print(stations_on_line('Line 4')) # ['Bayview'...]

























# # # passengers = []
# # # passengers.append('adult')
# # # passengers.append('senior')
# # # passengers.append('child')
# # # passengers.append('senior')
# # # passengers.append('senior')
# # # passengers.append('senior')
# # # passengers.append('adult')

# # # print(passengers)







# # # # child   = 0.00
# # # # adult   = 3.25
# # # # student = 2.10
# # # # senior  = 2.10



# # # # print(passengers[6])
# # # # passengers.insert(2, 'new_child')
# # # # print(passengers[6])

# # # # def calculate_total_fare(passengers):
# # # #   total = 0
# # # #   for passenger in passengers:
# # # #     if passenger == 'child':
# # # #       total += child
# # # #     elif passenger == 'senior':
# # # #       total += senior
# # # #     elif passenger == 'student':
# # # #       total += student
# # # #     elif passenger == 'adult':
# # # #       total += adult

# # # #   return total

# # # # result = calculate_total_fare(passengers)

# # # # print('{:.2f}'.format(result))


# # # # stations = ['kipling', 'islington', 'yonge']

# # # # for station in stations:
# # # #   print(station)


