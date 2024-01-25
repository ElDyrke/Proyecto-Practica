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

    
def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

class Destino(models.Model):
    nombre = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=255)
    imagen =  models.ImageField(upload_to=upload_to, null=False, blank=True)
    etiquetas = models.ManyToManyField(Etiqueta, null=False, blank=True)
    # PENDIENTE: Añadir ubicacion

    def __str__(self) -> str:
        return self.nombre
    
class Viaje(models.Model):
    nombre = models.CharField("nombre Tour", max_length=50)
    fecha_inicio = models.DateField("fecha de inicio", auto_now=False, auto_now_add=False)
    precio = models.IntegerField()
    destinos = models.ManyToManyField(Destino, verbose_name="destino(s)")

    def __str__(self) -> str:
        return f"{self.nombre} - {self.fecha_inicio}"

    
class ItemItinerario(models.Model):
    dia = models.CharField("dia(s)", max_length=20)
    descripcion = models.CharField(max_length=250)
    sumario = models.CharField("descripcion corta", max_length=50)
    viaje = models.ForeignKey(Viaje, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f"Día {self.dia} - {self.viaje}"
    




