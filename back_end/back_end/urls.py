"""
URL configuration for back_end project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
import api.views as v
import api.api_funcs as f
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', v.LoginView.as_view()),
    path('registrar/', v.CreateUserView.as_view()),
    path('usuario/', v.ManageUserView.as_view()),
    path('destinos/', v.DestinosGeneral.as_view()),
    path('destinos/<int:pk>/', v.DestinoDetalle.as_view()),
    path('etiquetas/', v.EtiquetasGeneral.as_view()),
    path('etiquetas/<int:pk>/', v.EtiquetasDetalle.as_view()),
    path('viajes/', v.ViajesGeneral.as_view()),
    path('viajes/<int:pk>/', v.ViajesDetalle.as_view()),
    path('itemItinerario/', v.ItemItinerariosGeneral.as_view()),
    path('itemItinerario/<int:pk>/', v.ItemItinerariosDetalle.as_view()),
    path('reservas/', v.ReservasGeneral.as_view()),
    path('reservas/<int:pk>/', v.ReservasDetalle.as_view()),
    path('hotel/', v.HotelsGeneral.as_view()),
    path('hotel/<int:pk>/', v.HotelsDetalle.as_view()),
    path('hoteles_viaje/<int:id>', f.hotelesPorViajeId),
    path('viajes_destino/<int:id>', f.viajesPorDestinoId),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
