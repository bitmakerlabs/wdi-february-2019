from todo import ToDo
from arrow import Arrow

todo = ToDo('laundry', Arrow(2019,2,25))
due_today = ToDo('shovel snow', Arrow(2019,2,19))
overdue = ToDo('dishes', Arrow(2019,2,18))
print(todo)
print(due_today)
print(overdue)
