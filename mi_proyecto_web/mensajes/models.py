from django.db import models
from django.utils import timezone

class Mensaje(models.Model):
    nombre = models.CharField(
        max_length=100, 
        verbose_name="Nombre completo"
    )
    email = models.EmailField(
        verbose_name="Correo electrónico"
    )
    mensaje = models.TextField(
        verbose_name="Mensaje"
    )
    fecha_creacion = models.DateTimeField(
        auto_now_add=True, 
        verbose_name="Fecha de creación"
    )
    leido = models.BooleanField(
        default=False, 
        verbose_name="¿Leído?"
    )
    
    class Meta:
        db_table = 'mensajes'
        ordering = ['-fecha_creacion']
        verbose_name = 'Mensaje'
        verbose_name_plural = 'Mensajes'
    
    def __str__(self):
        return f"{self.nombre} - {self.email}"
    
    def resumen_mensaje(self):
        """Retorna los primeros 50 caracteres del mensaje"""
        return self.mensaje[:50] + "..." if len(self.mensaje) > 50 else self.mensaje