# Generated by Django 4.1.2 on 2022-10-17 03:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('chats', '0003_chat_author'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chat',
            name='room_name',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='chats.room'),
        ),
    ]