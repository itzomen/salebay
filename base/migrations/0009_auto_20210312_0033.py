# Generated by Django 3.1.6 on 2021-03-12 00:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0008_auto_20210312_0012'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, default='/default.png', null=True, upload_to=''),
        ),
    ]
