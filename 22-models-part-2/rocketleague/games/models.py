from django.db import models


class Game(models.Model):
    blue_score = models.IntegerField()
    orange_score = models.IntegerField()
    overtime = models.BooleanField(default=False)
    overtime_length = models.IntegerField(default=0)
    description = models.CharField(max_length=300)

    def get_game_result(self):
        return f"{self.blue_score}-{self.orange_score}"


class Goal(models.Model):
    game_time = models.IntegerField(default=0)
    scorer = models.CharField(max_length=100)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)


class Player(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    games = models.ManyToManyField(Game)
    rank = models.CharField(
        max_length=100,
        choices=(
            ('BR', 'Bronze'),
            ('SL', 'Silver'),
            ('GL', 'Gold'),
            ('PL', 'Platinum'),
            ('DI', 'Diamond'),
            ('CH', 'Champion'),
            ('GC', 'Grand Champion'),
        ),
    )
