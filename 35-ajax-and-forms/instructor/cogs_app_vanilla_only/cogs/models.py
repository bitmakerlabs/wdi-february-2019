from django.db import models

class Cog(models.Model):
  name    = models.CharField(max_length=255)
  on_sale = models.BooleanField()

  def __str__(self):
    return f"Cog(name='{self.name}', on_sale={self.on_sale})"
