# Generated by Django 4.1.2 on 2022-10-29 00:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('chats', '0008_rename_roomn_room_room'),
    ]

    operations = [
        migrations.RenameField(
            model_name='chat',
            old_name='author',
            new_name='user',
        ),
    ]
