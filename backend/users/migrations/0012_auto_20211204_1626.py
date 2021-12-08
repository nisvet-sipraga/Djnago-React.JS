# Generated by Django 3.2.8 on 2021-12-04 15:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0011_token'),
    ]

    operations = [
        migrations.CreateModel(
            name='Token_RefreshToken',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('token', models.CharField(max_length=300)),
                ('refreshToken', models.CharField(max_length=300)),
            ],
        ),
        migrations.DeleteModel(
            name='Token',
        ),
    ]