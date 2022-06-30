from rest_framework import viewsets
from api.serializers import MusicaSerializer
from api.models import Musica

class MusicaViewSet(viewsets.ModelViewSet):
    queryset = Musica.objects.all()
    serializer_class = MusicaSerializer
