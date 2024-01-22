from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import Usuario


class FormCrearUsuario(UserCreationForm):

    class Meta:
        model = Usuario
        fields = ("email",)


class FormCambiarUsuario(UserChangeForm):

    class Meta:
        model = Usuario
        fields = ("email",)
