# Generated by Django 4.2 on 2023-04-24 04:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profilemodel',
            name='is_staff',
            field=models.BooleanField(default=False),
        ),
    ]
