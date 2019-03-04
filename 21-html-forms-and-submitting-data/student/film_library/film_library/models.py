from django.db import models

class Film(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    country = models.CharField(max_length=255)
    rating = models.IntegerField()

    def __str__(self):
        return self.title
