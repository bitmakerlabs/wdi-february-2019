def print_bill(*items):
  subtotal = calculate_subtotal(items)
  tax = 0.13 * subtotal
  total = subtotal + tax

  print_header()

  for item in items:
    print_item(item)

  print_footer(subtotal, tax, total)

def calculate_subtotal(items):
  return len(items) * 2

def print_header():
  print()
  print('B IS FOR BACON')
  print()
  print('-----------------')

def print_item(item):
                            # 20 -  12(length of 'veggie bacon') = 15
  price_formatted = '2.00'.rjust(20 - len(item))
  line = '{} {}'.format(item, price_formatted)
  print(line)
  # line = '{}'
  # print('2.00 {}'.format(item))

def print_footer(subtotal, tax, total):
  print('-----------------')
  print('{:.2f} SUBTOTAL'.format(subtotal))
  print('{:.2f} TAX'.format(tax))
  print('-----------------')
  print('{:.2f} TOTAL'.format(total))
  print()
  print('Please Come Again!')
  print()

print_bill('Bacon', 'Veggie Bacon')
