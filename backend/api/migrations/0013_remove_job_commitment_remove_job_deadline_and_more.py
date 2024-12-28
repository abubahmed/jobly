# Generated by Django 4.2.16 on 2024-12-28 09:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_alter_job_commitment_alter_job_company_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='job',
            name='commitment',
        ),
        migrations.RemoveField(
            model_name='job',
            name='deadline',
        ),
        migrations.RemoveField(
            model_name='job',
            name='stage',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='bio',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='birthday',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='gender',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='interests',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='location',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='phone_number',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='preferred_during',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='preferred_level',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='preferred_mode',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='preferred_type',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='skills',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='social_links',
        ),
        migrations.RemoveField(
            model_name='season',
            name='end_date',
        ),
        migrations.RemoveField(
            model_name='season',
            name='status',
        ),
        migrations.AddField(
            model_name='job',
            name='hidden',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='job',
            name='number',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='job',
            name='starred',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='profile',
            name='profile_picture',
            field=models.URLField(blank=True, max_length=2000, null=True),
        ),
        migrations.AddField(
            model_name='season',
            name='number_jobs',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='job',
            name='status',
            field=models.CharField(blank=True, choices=[('Research', 'Research'), ('Applied', 'Applied'), ('Assessment', 'Assessment'), ('Interview', 'Interview'), ('Offer', 'Offer'), ('Rejected', 'Rejected'), ('Waitlisted', 'Waitlisted'), ('Other', 'Other'), ('', 'None')], max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='job',
            name='type',
            field=models.CharField(blank=True, choices=[('Full-time', 'Full-time'), ('Part-time', 'Part-time'), ('Contract', 'Contract'), ('Internship', 'Internship'), ('Freelance', 'Freelance'), ('Other', 'Other'), ('', 'None')], max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='job',
            name='url',
            field=models.URLField(blank=True, max_length=2000, null=True),
        ),
    ]