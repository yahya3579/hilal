
from django.db import models
from api.models import CustomUser
from django.core.validators import MinValueValidator, MaxValueValidator
class Articles(models.Model):
    user = models.ForeignKey(CustomUser, models.DO_NOTHING)
    cover_image = models.CharField(max_length=255, blank=True, null=True)
    title = models.CharField(max_length=255)
    publish_date = models.DateTimeField(blank=True, null=True)
    visits = models.IntegerField(blank=True, null=True)
    issue_new = models.CharField(max_length=3, blank=True, null=True)
    status = models.CharField(max_length=8, blank=True, null=True)
    writer = models.CharField(max_length=100, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    category = models.CharField(max_length=100, blank=True, null=True)
    
    class Meta:
        managed = False
        db_table = 'articles'


class Comments(models.Model):
    comment = models.TextField()
    user = models.ForeignKey(CustomUser, models.DO_NOTHING)
    article = models.ForeignKey(Articles, models.DO_NOTHING)
    created_at = models.DateTimeField(blank=True, null=True)
    rating = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)],
        default=1
    )

    class Meta:
        managed = False
        db_table = 'comments'


class Roles(models.Model):
    name = models.CharField(unique=True, max_length=50)
    user = models.ForeignKey(CustomUser, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'roles'


class Billboards(models.Model):
    user = models.ForeignKey(CustomUser, models.DO_NOTHING)
    image = models.CharField(max_length=255, blank=True, null=True)
    title = models.CharField(max_length=255)
    created = models.DateTimeField(auto_now_add=True)
    location = models.CharField(max_length=255, blank=True, null=True)
    issue_news = models.CharField(
        max_length=3,  # "Yes" or "No"
        choices=[('Yes', 'Yes'), ('No', 'No')],
        blank=True,
        null=True
    )
    status = models.CharField(
        max_length=8,  # "Active" or "Disabled"
        choices=[('Active', 'Active'), ('Disabled', 'Disabled')],
        default='Active'
    )

    class Meta:
        managed = False
        db_table = 'billboards'
