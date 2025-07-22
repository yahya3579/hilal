# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models
from api.models import CustomUser

class Articles(models.Model):
    user = models.ForeignKey(CustomUser, models.DO_NOTHING)
    cover_image = models.CharField(max_length=255, blank=True, null=True)
    title = models.CharField(max_length=255)
    publish_date = models.DateTimeField(blank=True, null=True)
    visits = models.IntegerField(blank=True, null=True)
    issue_new = models.CharField(max_length=3, blank=True, null=True)
    status = models.CharField(max_length=8, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'articles'


class Comments(models.Model):
    comment = models.TextField()
    user = models.ForeignKey(CustomUser, models.DO_NOTHING)
    article = models.ForeignKey(Articles, models.DO_NOTHING)
    created_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'comments'


class Roles(models.Model):
    name = models.CharField(unique=True, max_length=50)
    user = models.ForeignKey(CustomUser, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'roles'
