from rest_framework import serializers
from .models import Comments, Articles

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ['id', 'comment', 'user', 'article', 'created_at']
        read_only_fields = ['id', 'created_at']

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Articles
        fields = ['id', 'user', 'cover_image', 'title', 'publish_date', 'visits', 'issue_new', 'status', 'writer', 'description', 'category']
        read_only_fields = ['id']
        extra_kwargs = {
            'user': {'required': False},
            'cover_image': {'required': False},
            'title': {'required': False},
            'publish_date': {'required': False},
            'visits': {'required': False},
            'issue_new': {'required': False},
            'status': {'required': False},
            'writer': {'required': False},
            'description': {'required': False},
            'category': {'required': False},
        }
