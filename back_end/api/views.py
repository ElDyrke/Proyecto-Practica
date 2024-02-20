# django imports
from django.contrib.auth import login

# rest_framework imports
from rest_framework import generics, mixins, authentication, permissions
from rest_framework.settings import api_settings
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.parsers import MultiPartParser, FormParser

# knox imports
from knox.views import LoginView as KnoxLoginView
from knox.auth import TokenAuthentication

# imports locales
from .serializers import *
from .models import *


# USUARIO
class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer

class LoginView(KnoxLoginView):
    # login view extending KnoxLoginView
    serializer_class = AuthSerializer
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginView, self).post(request, format=None)    

class ManageUserView(generics.RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_object(self):
        return self.request.user
    
# DESTINO
class DestinosGeneral(mixins.ListModelMixin,
                  mixins.CreateModelMixin,
                  generics.GenericAPIView):
    queryset = Destino.objects.all()
    serializer_class = DestinoSerializer
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
    
class DestinoDetalle(mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin,
                    generics.GenericAPIView):
    queryset = Destino.objects.all()
    serializer_class = DestinoSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

# ETIQUETAS     
class EtiquetasGeneral(mixins.ListModelMixin,
                  mixins.CreateModelMixin,
                  generics.GenericAPIView):
    queryset = Etiqueta.objects.all()
    serializer_class = EtiquetaSerializer
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
    
class EtiquetasDetalle(mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin,
                    generics.GenericAPIView):
    queryset = Etiqueta.objects.all()
    serializer_class = EtiquetaSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
    
# Viaje
class ViajesGeneral(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    queryset = Viaje.objects.all()
    serializer_class = ViajeSerializer
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class ViajesDetalle(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    queryset = Viaje.objects.all()
    serializer_class = ViajeSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

# ItemItinerario
class ItemItinerariosGeneral(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    queryset = ItemItinerario.objects.all()
    serializer_class = ItemItinerarioSerializer
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class ItemItinerariosDetalle(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    queryset = ItemItinerario.objects.all()
    serializer_class = ItemItinerarioSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

# Reserva
class ReservasGeneral(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    queryset = Reserva.objects.all()
    serializer_class = ReservaSerializer
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class ReservasDetalle(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    queryset = Reserva.objects.all()
    serializer_class = ReservaSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

# Hotel
class HotelsGeneral(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class HotelsDetalle(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

