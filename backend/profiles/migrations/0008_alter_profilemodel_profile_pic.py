# Generated by Django 4.2 on 2023-09-06 09:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0007_alter_profilemodel_profile_pic'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profilemodel',
            name='profile_pic',
            field=models.ImageField(blank=True, null=True, upload_to='images/'),
        ),
    ]
