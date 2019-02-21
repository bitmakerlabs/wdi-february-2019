from product import Product

class ShoppingCart:

  def __init__(self):
    self.products = []

  def add_item(self, product):
    self.products.append(product)

  def remove_item(self, product):
    pass

  def subtotal(self):
    result = 0
    for product in self.products:
      result += product.base_price
    return result

  def grand_total(self):
    result = 0
    for product in self.products:
      result += product.base_price + product.base_price * product.tax_rate
    return result

shopping_cart = ShoppingCart()
shopping_cart.add_item(Product('bananas', 0.25))
shopping_cart.add_item(Product('hot sauce', 4.99, 0.13))
shopping_cart.add_item(Product('crown royal', 25.00, 0.25))
print(shopping_cart.subtotal())
print(shopping_cart.grand_total())
