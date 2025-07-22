# myapp/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Comments, Articles
from .serializers import CommentSerializer, ArticleSerializer
from django.http import HttpResponse
from rest_framework.permissions import AllowAny


def home(request):
    return HttpResponse("Welcome to MyApp!")


class CreateCommentView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Comment created successfully", "data": serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CreateArticleView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = ArticleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Article created successfully", "data": serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GetAllArticlesView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        articles = Articles.objects.all()
        serializer = ArticleSerializer(articles, many=True)
        return Response({"message": "Articles retrieved successfully", "data": serializer.data}, status=status.HTTP_200_OK)


class SingleArticleView(APIView):
    permission_classes = [AllowAny]
    

    def get(self, request, pk):
        try:
            article = Articles.objects.get(pk=pk)
            serializer = ArticleSerializer(article)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Articles.DoesNotExist:
            return Response({"error": "Article not found"}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk):
        try:
            article = Articles.objects.get(pk=pk)
            serializer = ArticleSerializer(article, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Articles.DoesNotExist:
            return Response({"error": "Article not found"}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        try:
            article = Articles.objects.get(pk=pk)
            article.delete()
            return Response({"message": "Article deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
        except Articles.DoesNotExist:
            return Response({"error": "Article not found"}, status=status.HTTP_404_NOT_FOUND)
