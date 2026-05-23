from django.contrib import admin
from .models import Mensaje

@admin.register(Mensaje)
class MensajeAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'email', 'fecha_creacion', 'leido', 'resumen_mensaje')
    list_filter = ('leido', 'fecha_creacion')
    search_fields = ('nombre', 'email', 'mensaje')
    readonly_fields = ('fecha_creacion',)
    list_editable = ('leido',)
    
    fieldsets = (
        ('Información del Contacto', {
            'fields': ('nombre', 'email')
        }),
        ('Mensaje', {
            'fields': ('mensaje',)
        }),
        ('Estado', {
            'fields': ('leido', 'fecha_creacion'),
            'classes': ('collapse',)
        }),
    )