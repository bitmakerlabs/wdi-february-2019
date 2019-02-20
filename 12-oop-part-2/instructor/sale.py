class Whiskey:
  def __init__(self, name, price):
    self.price = price
    self.name = name

  def tax(self):
    return self.price * 0.5

class Cheese:
  def __init__(self, name, price):
    self.price = price
    self.name = name

  def tax(self):
    return 0

class Toothpaste:
  def __init__(self, name, price):
    self.price = price
    self.name = name

  def tax(self):
    return self.price * 0.10

wild_turkey = Whiskey('wild_turkey', 39.99)
gold_label = Whiskey('gold_label', 80.00)
brie = Cheese('brie', 7.00)
crest = Toothpaste('crest', 3.00)

items = [wild_turkey, gold_label, brie, crest]

grand_total = 0
tax = 0
subtotal = 0
for item in items:
  print("{} is {}".format(item.name, item.price))
  subtotal += item.price
  tax += item.tax()

print("Subtotal: {}".format(subtotal))
print("Tax: {}".format(tax))
print("grand_total: {}".format(subtotal + tax))


