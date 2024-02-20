from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import *
from .models import *

@api_view(http_method_names=['GET'])
def viajesPorDestinoId(request, id):
    destino = Destino.objects.filter(id = id).first()
    viajes = Viaje.objects.filter(destino = destino)
    serializer = ViajeSerializer(viajes, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(http_method_names=['GET'])
def hotelesPorViajeId(request, id):
    tour = Viaje.objects.filter(id = id).first()
    hoteles = Hotel.objects.filter(tour = tour)
    print(hoteles)
    serializer = HotelSerializer(hoteles, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
