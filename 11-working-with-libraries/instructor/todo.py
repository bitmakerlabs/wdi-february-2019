class ToDo:
    """ Represents an item on a to-do list """

    def __init__(self, description, due_date):
        self.description = description
        self.due_date = due_date
        self.completed = False

    def complete(self):
        self.completed = True

    def __str__(self):
        return "To do: {} due {}".format(self.description, self.due_date.humanize())





