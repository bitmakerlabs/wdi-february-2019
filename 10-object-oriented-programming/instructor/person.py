# kebab-case
# snake_case
# variables_and_functions
# camelCase
# UpperCamelCase
# ClassName
class Position:
    """ A class representing a latitude and longitude position """

    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return "{}, {}".format(self.x, self.y)

    def move_north(self):
        self.y += 1

    def move_south(self):
        self.y -= 1

    def move_east(self):
        self.x += 1

    def move_west(self):
        self.x -= 1

class Person:
    """ A representing a human being """

    def __init__(self, fname, lname, x=0, y=0):
        self.first_name = fname
        self.last_name = lname
        self.position = Position(x, y)

    def __str__(self):
        return "Person object: {} positioned at {}".format(self.full_name(), self.position)

    def move(self, directions):
        for direction in directions:
            if direction == 'N':
                self.position.move_north()
            elif direction == 'S':
                self.position.move_south()
            elif direction == 'E':
                self.position.move_east()
            elif direction == 'W':
                self.position.move_west()

    def full_name(self):
        return "{} {}".format(self.first_name, self.last_name)

natalie = Person("Natalie", "Black")
print(natalie)
natalie.move(['N', 'S', 'E', 'E', 'E'])
print(natalie)

# print(natalie.first_name)
# print(natalie.last_name)
# print(natalie)

jeremy = Person("Jeremy", "Tupper", 5, -2)
# print(jeremy.first_name)
# print(jeremy.last_name)
# print(jeremy)
print(jeremy)

