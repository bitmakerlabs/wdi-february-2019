class House:
  house = []

  @classmethod
  def total_square_feet(cls):
    total = 0
    for room in cls.house:
      total += room.square_feet()
    return total

  @classmethod
  def print_rooms_nicely(cls):
    for room in reversed(sorted(cls.house)):
      print("{} is {}'".format(room.name, room.square_feet()))

# name, width, length
class Room:
  pass

  def __repr__

  def __init__(self, name, width, length):
    self.name   = name
    self.width  = width
    self.length = length

  def square_feet(self):
    return self.width * self.length

  def __lt__(self, other):
    return self.square_feet() < other.square_feet()

  def __gt__(self, other):
    return self.square_feet() > other.square_feet()

  def __eq__(self, other):
    return self.square_feet() == other.square_feet()

kitchen     = Room('kitchen', 10, 15)
living_room = Room('living_room', 15, 10)
bathroom    = Room('bathroom', 3, 3)
closet      = Room('closet', 6, 4)

House.house.append(kitchen)
House.house.append(bathroom)
House.house.append(closet)

print(House.total_square_feet())

House.print_rooms_nicely()

print(kitchen == living_room)
# print(kitchen.square_feet())
# print(bathroom.square_feet())
# print(closet.square_feet())

print(min(House.house).name)
