# Generated by Django 4.1.2 on 2022-10-28 19:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('chats', '0007_rename_roomname_room_roomn_remove_chat_roomname_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='room',
            old_name='roomn',
            new_name='room',
        ),
    ]
