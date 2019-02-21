from player import Player
from random import randint, choice
class Game:

  def __init__(self, number_of_players, width, height):
      self.players = []
      self.width = width
      self.height = height
      for n in range(number_of_players):
          x_coord = randint(0, self.width - 1)
          y_coord = randint(0, self.height - 1)
          self.players.append(Player(x_coord, y_coord))

  @classmethod
  def start(cls):
      print("It's adventure time!")
      print("How many people are adventuring?")
      number_of_players = int(input())

      print('How wide should the board be?')
      width = int(input())
      print('How tall should the board be?')
      height = int(input())
      game = Game(number_of_players, width, height)
      game.turn()

  def turn(self):
      moves = [1, -1]

      for player in self.players:
          print("Player {} moved!".format(player.id))
          new_x = choice(moves)
          new_y = choice(moves)

          if new_x >= 0 and new_x < self.width:
              player.x += new_x

          if new_y >= 0 and new_y < self.height:
              player.y += new_y

Game.start()