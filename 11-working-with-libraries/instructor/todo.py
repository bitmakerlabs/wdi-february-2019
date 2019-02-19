class ToDo:
    """ Represents an item on a to-do list """

    def __init__(self, description):
        self.description = description
        self.completed = False

    def complete(self):
        self.completed = True

    def __str__(self):
        return "To do: {}".format(self.description)

todo = ToDo('buy groceries')
print(todo)
