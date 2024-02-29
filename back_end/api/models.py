from django.db import models
from django.contrib.auth.models import AbstractUser, PermissionsMixin
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from .managers import ManagerUsuario
# Create your models here.

class Usuario(AbstractUser, PermissionsMixin):
    email = models.EmailField(_("email address"), unique=True)
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    username = models.CharField(max_length=100, unique=False, null=True, default=None)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = ManagerUsuario()

    def __str__(self) -> str:
        return self.email

class Etiqueta(models.Model):
    nombre = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.nombre
    
def guardar_viajes(instance, filename):
    return 'images/viajes/{filename}'.format(filename=filename)

class Viaje(models.Model):
    nombre = models.CharField(max_length=50)
    descripcion = models.TextField()
    fecha_inicio = models.DateField(auto_now=False, auto_now_add=False, null=True, blank=True)
    imagen =  models.ImageField(upload_to=guardar_viajes, null=False, blank=True)
    precio = models.IntegerField(null=True, blank=True)
    incluye = models.TextField()
    no_incluye = models.TextField(null=True, blank=True)
    cupos = models.IntegerField(null=True, blank=True)

    def __str__(self) -> str:
        return f"{self.nombre} {self.fecha_inicio}"

def guardar_hoteles(instance, filename):
    return 'images/hoteles/{filename}'.format(filename=filename)

class Hotel(models.Model):
    nombre = models.CharField(max_length=50)
    imagen =  models.ImageField(upload_to=guardar_hoteles, null=False, blank=True)
    imagen_habitacion =  models.ImageField(upload_to=guardar_hoteles, null=False, blank=True)
    tour = models.ForeignKey(Viaje, on_delete=models.CASCADE)
    def __str__(self) -> str:
        return f"{self.nombre}"
    
def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

class Destino(models.Model):
    nombre = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=255)
    imagen =  models.ImageField(upload_to=upload_to, null=False, blank=True)
    etiquetas = models.ManyToManyField(Etiqueta)
    viajes = models.ManyToManyField(Viaje, verbose_name=_("tour(s)"))
    # PENDIENTE: Añadir ubicacion

    def __str__(self) -> str:
        return self.nombre
    

    
class ItemItinerario(models.Model):
    dia = models.IntegerField()
    descripcion = models.TextField()
    sumario = models.CharField(max_length=80)
    viaje = models.ForeignKey(Viaje, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f"Día {self.dia} - {self.viaje}"
    
class Reserva(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    tour = models.ForeignKey(Viaje, on_delete=models.CASCADE)
    fecha_pago = models.DateField(auto_now=True)
    recibo = models.URLField(max_length=300)




