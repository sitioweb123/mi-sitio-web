from rest_framework import serializers
from .models import Mensaje

class MensajeSerializer(serializers.ModelSerializer):
    """Serializer para el modelo Mensaje"""
    fecha_creacion = serializers.DateTimeField(read_only=True, format="%d/%m/%Y %H:%M")
    resumen = serializers.SerializerMethodField()
    
    class Meta:
        model = Mensaje
        fields = ['id', 'nombre', 'email', 'mensaje', 'fecha_creacion', 'leido', 'resumen']
        read_only_fields = ['id', 'fecha_creacion', 'leido']
    
    def get_resumen(self, obj):
        return obj.resumen_mensaje()
    
    def validate_email(self, value):
        """Validación personalizada del email"""
        if not '@' in value:
            raise serializers.ValidationError("Ingrese un email válido")
        return value.lower()
    
    def validate_nombre(self, value):
        """Validación del nombre"""
        if len(value.strip()) < 3:
            raise serializers.ValidationError("El nombre debe tener al menos 3 caracteres")
        return value.title()