class Library:
  books = []

  @classmethod
  def how_many_books(cls):
    return "There are {} books in the library".format(len(cls.books))

class Book:
  pass

  def __init__(self, pages, name):
    self.pages  = pages
    self.name   = name
    self.current_page = 1
    Library.books.append(self)

  def turn_page_forward(self):
    self.current_page += 1

  def turn_page_backwards(self):
    if self.current_page <=  1:
      return "back at first page"
    else:
      self.current_page -= 1

to_kill_a_mocking_bird = Book(281, 'To Kill A Mocking Bird')
it = Book(1038, 'It')

print(to_kill_a_mocking_bird)
print(it)

it.turn_page_forward()
it.turn_page_forward()
it.turn_page_backwards()
it.turn_page_backwards()
it.turn_page_backwards()
it.turn_page_backwards()
print(it.current_page)
