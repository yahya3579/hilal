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
    section = models.CharField(max_length=100, blank=True, null=True)  # New field for section
    
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
    created = models.CharField(max_length=255, blank=True, null=True)
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


class Magazines(models.Model):
    title = models.CharField(max_length=255)
    publish_date = models.CharField(max_length=255, blank=True, null=True)
    language = models.CharField(max_length=50)
    direction = models.CharField(max_length=3, choices=[('LTR', 'Left-to-Right'), ('RTL', 'Right-to-Left')])
    status = models.CharField(max_length=8, choices=[('Active', 'Active'), ('Inactive', 'Inactive')], default='Active')
    cover_image = models.CharField(max_length=255, blank=True, null=True)
    doc_url = models.CharField(max_length=255, blank=True, null=True)

    is_archived = models.BooleanField(default=False)  # New field to indicate if the magazine is archived

    class Meta:
        managed = False
        db_table = 'magazines'


class Ebook(models.Model):
    title = models.CharField(max_length=255)
    publish_date = models.CharField(max_length=255, blank=True, null=True)
    language = models.CharField(max_length=50)
    direction = models.CharField(max_length=3, choices=[('LTR', 'Left-to-Right'), ('RTL', 'Right-to-Left')])
    status = models.CharField(max_length=8, choices=[('Active', 'Active'), ('Inactive', 'Inactive')], default='Active')
    cover_image = models.CharField(max_length=255, blank=True, null=True)
    doc_url = models.CharField(max_length=255, blank=True, null=True)
    is_archived = models.BooleanField(default=False)  # New field to indicate if the ebook is archived

    class Meta:
        managed = False
        db_table = 'ebooks'


class Authors(models.Model):
    user = models.ForeignKey(CustomUser, models.DO_NOTHING)
    author_image = models.CharField(max_length=255, blank=True, null=True)
    author_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    contact_no = models.CharField(max_length=15)
    no_of_articles = models.PositiveIntegerField(default=0)
    status = models.CharField(max_length=50, choices=[("Approved", "Approved"), ("Pending", "Pending"), ("Rejected", "Rejected")], default="Pending")
    category = models.CharField(max_length=100)
    introduction = models.TextField()

    def __str__(self):
        return self.author_name
