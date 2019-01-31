class Player:
    next_id = 0

    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.points = 0
        self.health = 100
        self.id = Player.next_id
        Player.next_id += 1

