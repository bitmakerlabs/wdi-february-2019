from django.db import models

class Animal(models.Model):
    species = models.CharField(max_length=100)
    population = models.PositiveIntegerField()
    # @TODO Region should be a relationship to a Regions model
    region = models.CharField(max_length=100)

    diet_classes = (
        ('herbivore', 'Herbivore'),
        ('omnivore', 'Omnivore'),
        ('carnivore', 'Carnivore'),
    )
    diet_classification = models.CharField(max_length=100, choices=diet_classes)
