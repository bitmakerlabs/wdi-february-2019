from django.db import models

class CogHtmlApi(models.Model):
  name    = models.CharField(max_length=255)
  on_sale = models.BooleanField()

  def __str__(self):
    return f"Cog(name='{self.name}', on_sale={self.on_sale})"

  class Meta:
    db_table = "cogs_cog"
