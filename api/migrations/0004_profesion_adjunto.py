# Generated by Django 2.2.13 on 2021-04-23 15:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20210412_1732'),
    ]

    operations = [
        migrations.AddField(
            model_name='profesion',
            name='adjunto',
            field=models.ImageField(blank=True, null=True, upload_to='Adjuntos'),
        ),
    ]
