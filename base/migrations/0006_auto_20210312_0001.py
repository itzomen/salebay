# Generated by Django 3.1.6 on 2021-03-12 00:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_remove_shippingaddress_shippingprice'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, default='/default.png', null=True, upload_to=''),
        ),
    ]
