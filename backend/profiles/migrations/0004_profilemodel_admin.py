# Generated by Django 4.2 on 2023-04-24 19:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0003_profilemodel_is_superuser'),
    ]

    operations = [
        migrations.AddField(
            model_name='profilemodel',
            name='admin',
            field=models.BooleanField(default=False),
        ),
    ]
