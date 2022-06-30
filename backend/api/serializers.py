from rest_framework import serializers
from api.models import Musica

class MusicaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Musica
        fields = '__all__'
