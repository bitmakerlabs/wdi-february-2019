class Game:

  def __init__(number_of_players):
      for n in range(number_of_players):
          self.players.append(Player(range(0, width), range(0, height)))

  def start(self):
      print("It's adventure time!")
      print("How many people are adventuring?")
      number_of_players = int(input())

      game = Game(number_of_players)
      g.turn

  def turn(self):
      moves = [1, -1]

      for player in self.players:
          print("Player {} moved!".format(player.id))
          new_x = random.choice(moves)
          new_y = random.choice(moves)

          if new_x >= 0 and new_x < self.width:
              player.x += new_x

          if new_y >= 0 and new_y < self.height:
              player.y += new_y

Game.start()