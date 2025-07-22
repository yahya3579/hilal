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
        fields = ['id', 'user', 'cover_image', 'title', 'publish_date', 'visits', 'issue_new', 'status']
        read_only_fields = ['id']
