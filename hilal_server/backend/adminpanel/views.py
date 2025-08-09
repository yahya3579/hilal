# myapp/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Comments, Articles, Billboards
from .serializers import CommentSerializer, ArticleSerializer, BillboardSerializer
from django.http import HttpResponse
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.utils.timezone import now


def home(request):
    return HttpResponse("Welcome to MyApp!")



#  Comments Related Views
class CreateCommentView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Comment created successfully", "data": serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GetAllCommentsView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        comments = Comments.objects.all()
        serializer = CommentSerializer(comments, many=True)
        return Response({"message": "Comments retrieved successfully", "data": serializer.data}, status=status.HTTP_200_OK)



#  Articles Related Views
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


class GetArticlesByCategoryView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, category):
        articles = Articles.objects.filter(category=category)
        if articles.exists():
            serializer = ArticleSerializer(articles, many=True)
            return Response({"message": "Articles retrieved successfully", "data": serializer.data}, status=status.HTTP_200_OK)
        return Response({"message": "No articles found for the given category"}, status=status.HTTP_404_NOT_FOUND)


class GetTopArticlesView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        articles = Articles.objects.filter(publish_date__lte=now()).order_by('-publish_date')[:10]
        serializer = ArticleSerializer(articles, many=True)
        return Response({"message": "Top 10 recent articles retrieved successfully", "data": serializer.data}, status=status.HTTP_200_OK)


class GetArticlesByUserView(APIView):
    """
    API to get all articles created by a specific user based on their user ID.
    """
    permission_classes = [AllowAny]

    def get(self, request, user_id):
        articles = Articles.objects.filter(user_id=user_id)
        if articles.exists():
            serializer = ArticleSerializer(articles, many=True)
            return Response({"message": "Articles retrieved successfully", "data": serializer.data}, status=status.HTTP_200_OK)
        return Response({"message": "No articles found for the given user ID"}, status=status.HTTP_404_NOT_FOUND)



# Billboards Related Views
class CreateBillboardView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = BillboardSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Billboard created successfully", "data": serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GetAllBillboardsView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        billboards = Billboards.objects.all()
        serializer = BillboardSerializer(billboards, many=True)
        return Response({"message": "Billboards retrieved successfully", "data": serializer.data}, status=status.HTTP_200_OK)


class SingleBillboardView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, pk):
        try:
            billboard = Billboards.objects.get(pk=pk)
            serializer = BillboardSerializer(billboard)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Billboards.DoesNotExist:
            return Response({"error": "Billboard not found"}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk):
        try:
            billboard = Billboards.objects.get(pk=pk)
            serializer = BillboardSerializer(billboard, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Billboards.DoesNotExist:
            return Response({"error": "Billboard not found"}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        try:
            billboard = Billboards.objects.get(pk=pk)
            billboard.delete()
            return Response({"message": "Billboard deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
        except Billboards.DoesNotExist:
            return Response({"error": "Billboard not found"}, status=status.HTTP_404_NOT_FOUND)


class DeleteBillboardView(APIView):
    permission_classes = [AllowAny]

    def delete(self, request, pk):
        try:
            billboard = Billboards.objects.get(pk=pk)
            billboard.delete()
            return Response({"message": "Billboard deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
        except Billboards.DoesNotExist:
            return Response({"error": "Billboard not found"}, status=status.HTTP_404_NOT_FOUND)


class GetBillboardByPositionView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, location):
        try:
            billboard = Billboards.objects.get(location=location)
            serializer = BillboardSerializer(billboard)
            return Response({"message": "Billboard retrieved successfully", "data": serializer.data}, status=status.HTTP_200_OK)
        except Billboards.DoesNotExist:
            return Response({"error": f"No billboard found at location {location}"}, status=status.HTTP_404_NOT_FOUND)


def hello_view(request):
    return HttpResponse("Hello")
