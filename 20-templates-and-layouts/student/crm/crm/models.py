from django.db import models

class Contact(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email_address = models.CharField(max_length=200)
    note = models.TextField()

    def __str__(self):
        return "{} - {}".format(self.pk, self.full_name())

    def full_name(self):
        return "{} {}".format(self.first_name, self.last_name)