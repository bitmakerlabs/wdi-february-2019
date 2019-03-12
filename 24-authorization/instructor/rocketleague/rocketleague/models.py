from django.db import models
from django import forms
from django.core.validators import MinValueValidator
from django.core.exceptions import ValidationError
from django.contrib.auth.models import User

min_zero = MinValueValidator(limit_value=0)


class Game(models.Model):
    description = models.CharField(max_length=300)
    blue_score = models.IntegerField(validators=[min_zero])
    orange_score = models.IntegerField(validators=[min_zero])
    overtime = models.BooleanField(default=False)
    overtime_length = models.IntegerField(default=0)
    player = models.ForeignKey(User, on_delete=models.CASCADE)

    def clean(self):
        if self.blue_score == self.orange_score:
            raise ValidationError('One team must win! Scores cannot be the same.')


class Goal(models.Model):
    time_of_goal = models.IntegerField()
    game = models.ForeignKey(
        'Game',
        on_delete='CASCADE',
    )


class GameForm(forms.ModelForm):
    class Meta:
        model = Game
        fields = ['description', 'blue_score', 'orange_score', 'overtime', 'overtime_length']
