class Paperboy:

  def __init__(self, name):
    self.name = name
    self.experience = 0
    self.earnings = 0.0

  def calculate_pay(self, houses_delivered):
    pay = 0.25 * houses_delivered

    if houses_delivered > self.quota():
      pay += 0.25 * houses_delivered - self.quota()
    elif houses_delivered < self.quota():
      pay -= 2

    return pay

  def deliver(self, address1, address2):
    houses = address2 - address1 + 1
    pay = self.calculate_pay(houses)
    self.earnings += pay
    self.experience += houses
    return pay

  def quota(self):
    return 50 + self.experience * 0.5

  def report(self):
    return "Hi, my name is {}. I have delivered {} papers so far and earned {}".format(self.name, self.experience, self.earnings)


me = Paperboy('natalie')
me.deliver(101, 160)
print(me.report())
me.deliver(1, 75)
print(me.report())

