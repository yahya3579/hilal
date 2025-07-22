from rest_framework import serializers
from .models import Comments

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ['id', 'comment', 'user', 'article', 'created_at']
        read_only_fields = ['id', 'created_at']
