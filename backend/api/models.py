from django.db import models

class Musica(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False)
    singer = models.CharField(max_length=100, null=False, blank=False)
    cover = models.ImageField(upload_to='fotos/', null=False, blank=False)
    musicSrc = models.FileField(upload_to='musicas/', null=False, blank=False)
    year = models.IntegerField(null=False, blank=False)
    album = models.CharField(max_length=100, null=False, blank=False)

