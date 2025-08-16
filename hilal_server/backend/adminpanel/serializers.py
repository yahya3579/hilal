from rest_framework import serializers
from .models import Comments, Articles, Billboards, Ebook, Magazines, Authors, Videos

class CommentSerializer(serializers.ModelSerializer):
    user_first_name = serializers.CharField(source="user.fname", read_only=True)
    user_last_name = serializers.CharField(source="user.lname", read_only=True)
    article_title = serializers.CharField(source="article.title", read_only=True)

    class Meta:
        model = Comments
        fields = ['id', 'comment', 'user', 'user_first_name', 'user_last_name', 'article', 'article_title', 'created_at', 'rating']
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

class BillboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Billboards
        fields = ['id', 'user', 'image', 'title', 'created', 'location', 'issue_news', 'status']
        read_only_fields = ['id']

class MagazineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Magazines
        fields = ['id', 'title', 'publish_date', 'language', 'direction', 'status', 'cover_image', 'is_archived','doc_url']
        read_only_fields = ['id']
    
class EbookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ebook
        fields = ['id', 'title', 'publish_date', 'language', 'direction', 'status', 'cover_image', 'is_archived','doc_url']
        read_only_fields = ['id']


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Authors
        fields = ['id', 'user', 'author_image', 'author_name', 'email', 'contact_no', 'no_of_articles', 'status', 'category', 'introduction']
        read_only_fields = ['id']


class VideosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Videos
        fields = ['id', 'title', 'youtube_url', 'video_id', 'thumbnail_url', 'description', 'status', 'created_at', 'updated_at', 'order']
        read_only_fields = ['id', 'video_id', 'thumbnail_url', 'created_at', 'updated_at']
