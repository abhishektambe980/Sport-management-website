from django.db import migrations, models
import django.utils.timezone  # Import timezone

class Migration(migrations.Migration):

    dependencies = [
        ("sports", "0002_contact_remove_player_age_remove_player_position_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="contact",
            name="submitted_at",
            field=models.DateTimeField(default=django.utils.timezone.now),  # Set default to timezone.now
            preserve_default=False,
        ),
    ]
