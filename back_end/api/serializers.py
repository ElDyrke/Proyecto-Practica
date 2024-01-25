from django.contrib.auth.models import User
from django.contrib.auth import  authenticate
from rest_framework import serializers
from django.contrib.auth import get_user_model
from drf_extra_fields.fields import Base64ImageField
from .models import *

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'password', 'nombre', 'apellido')
        extra_kwargs = {'password': {'write_only': True, 'min_length': 5}}
    
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class AuthSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(
        style={'input_type': 'password'},
        trim_whitespace=False
    )    
    def validate(self, attrs):
        username = attrs.get('username')
        password = attrs.get('password')
        
        user = authenticate(
            request=self.context.get('request'),
            username=username,
            password=password
        )
        
        if not user:
            msg = ('No se puede autenticar con las credenciales entregadas', )
            raise serializers.ValidationError(msg, code='authentication')

        attrs['user'] = user
        return 
    
class DestinoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Destino
        fields = "__all__"

class ViajeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Viaje
        fields = "__all__"

class ItemItinerarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemItinerario
        fields = "__all__"

class EtiquetaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Etiqueta
        fields = "__all__"