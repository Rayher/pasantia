# Generated by Django 2.2.13 on 2021-04-12 17:32

from django.db import migrations

def crearRoles(apps, schema_editor):
    try:
        Rol = apps.get_model("api", 'Rol')

        Rol.objects.create(rol_name="administrador")
        Rol.objects.create(rol_name="profesor")
        Rol.objects.create(rol_name="student")
    except Exception as e:
        print("Error al crear roles: ", (str(e)))

class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20210412_1451'),
    ]

    operations = [
        migrations.RunPython(crearRoles)
    ]
