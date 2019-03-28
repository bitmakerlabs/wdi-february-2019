from django.db import models

class Robot(models.Model):
  name = models.CharField(max_length=255)
  address = models.CharField(max_length=255)
  model_number = models.IntegerField()
  lasers = models.BooleanField(default=False)
  japanese = models.BooleanField(default=False)

  def __str__(self):
    return self.name
