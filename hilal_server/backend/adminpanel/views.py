# myapp/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Comments, Articles, Billboards, Magazines, Authors, Ebook, Videos
from .serializers import CommentSerializer, ArticleSerializer, BillboardSerializer, MagazineSerializer, AuthorSerializer, EbookSerializer, VideosSerializer
from django.http import HttpResponse
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.utils.timezone import now
from rest_framework.generics import ListAPIView
from django.db.models import Count


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

class DeleteCommentView(APIView):
    permission_classes = [AllowAny]

    def delete(self, request, pk):
        try:
            comment = Comments.objects.get(pk=pk)
            comment.delete()
            return Response({"message": "Comment deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
        except Comments.DoesNotExist:
            return Response({"error": "Comment not found"}, status=status.HTTP_404_NOT_FOUND)



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
        # if articles.exists():
        serializer = ArticleSerializer(articles, many=True)
        return Response({"message": "Articles retrieved successfully", "data": serializer.data}, status=status.HTTP_200_OK)
        # return Response({"message": "No articles found for the given category"}, status=status.HTTP_404_NOT_FOUND)


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
        serializer = ArticleSerializer(articles, many=True)
        return Response(
            {"message": "Articles retrieved successfully", "data": serializer.data},
            status=status.HTTP_200_OK
        )


# Billboards Related Views
class CreateBillboardView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        location = request.data.get("location")
        if Billboards.objects.filter(location=location).exists():
            return Response(
                {"error": f"A billboard already exists at this location."},
                status=status.HTTP_400_BAD_REQUEST,
            )
        serializer = BillboardSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "Billboard created successfully", "data": serializer.data},
                status=status.HTTP_201_CREATED,
            )
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
            location = request.data.get("location")
            if location and Billboards.objects.filter(location=location).exclude(pk=pk).exists():
                return Response(
                    {"error": f"A billboard already exists at this location."},
                    status=status.HTTP_400_BAD_REQUEST,
                )
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


# Magazines Related Views
class GetAllMagazinesView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        magazines = Magazines.objects.all()
        serializer = MagazineSerializer(magazines, many=True)
        return Response({"message": "Magazines retrieved successfully", "data": serializer.data}, status=status.HTTP_200_OK)

class SingleMagazineView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, pk):
        try:
            magazine = Magazines.objects.get(pk=pk)
            serializer = MagazineSerializer(magazine)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Magazines.DoesNotExist:
            return Response({"error": "Magazine not found"}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        try:
            magazine = Magazines.objects.get(pk=pk)
            magazine.delete()
            return Response({"message": "Magazine deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
        except Magazines.DoesNotExist:
            return Response({"error": "Magazine not found"}, status=status.HTTP_404_NOT_FOUND)

class CreateOrUpdateMagazineView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = MagazineSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Magazine created successfully", "data": serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        try:
            magazine = Magazines.objects.get(pk=pk)
            serializer = MagazineSerializer(magazine, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({"message": "Magazine updated successfully", "data": serializer.data}, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Magazines.DoesNotExist:
            return Response({"error": "Magazine not found"}, status=status.HTTP_404_NOT_FOUND)


class GetArchivedMagazinesView(ListAPIView):
    """
    API to retrieve all magazines that are archived.
    """
    permission_classes = [AllowAny]
    serializer_class = MagazineSerializer

    def get_queryset(self):
        return Magazines.objects.filter(is_archived=True)

class GetAllEbooksView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        ebooks = Ebook.objects.all()
        serializer = EbookSerializer(ebooks, many=True)
        return Response({"message": "Ebooks retrieved successfully", "data": serializer.data}, status=status.HTTP_200_OK)

class SingleEbookView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, pk):
        try:
            ebook = Ebook.objects.get(pk=pk)
            serializer = EbookSerializer(ebook)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Ebook.DoesNotExist:
            return Response({"error": "Ebook not found"}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        try:
            ebook = Ebook.objects.get(pk=pk)
            ebook.delete()
            return Response({"message": "Ebook deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
        except Ebook.DoesNotExist:
            return Response({"error": "Ebook not found"}, status=status.HTTP_404_NOT_FOUND)

class CreateOrUpdateEbookView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = EbookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Ebook created successfully", "data": serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        try:
            ebook = Ebook.objects.get(pk=pk)
            serializer = EbookSerializer(ebook, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({"message": "Ebook updated successfully", "data": serializer.data}, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Ebook.DoesNotExist:
            return Response({"error": "Magazine not found"}, status=status.HTTP_404_NOT_FOUND)


class GetArchivedMagazinesView(ListAPIView):
    """
    API to retrieve all magazines that are archived.
    """
    permission_classes = [AllowAny]
    serializer_class = MagazineSerializer

    def get_queryset(self):
        return Magazines.objects.filter(is_archived=True)

class GetArchivedEbooksView(ListAPIView):
    """
    API to retrieve all ebooks that are archived.
    """
    permission_classes = [AllowAny]
    serializer_class = EbookSerializer

    def get_queryset(self):
        return Ebook.objects.filter(is_archived=True)

class GetActiveEbooksView(APIView):
    """
    API to retrieve all ebooks that are not archived.
    """
    permission_classes = [AllowAny]

    def get(self, request):
        ebooks = Ebook.objects.filter(is_archived=False)
        serializer = EbookSerializer(ebooks, many=True)
        return Response({"message": "Active ebooks retrieved successfully", "data": serializer.data}, status=status.HTTP_200_OK)

class ToggleEbookArchiveView(APIView):
    """
    API to toggle the archive status of an ebook.
    """
    permission_classes = [AllowAny]

    def patch(self, request, pk):
        try:
            ebook = Ebook.objects.get(pk=pk)
            ebook.is_archived = not ebook.is_archived
            ebook.save()
            status_text = "archived" if ebook.is_archived else "unarchived"
            return Response(
                {"message": f"Ebook {status_text} successfully", "is_archived": ebook.is_archived},
                status=status.HTTP_200_OK
            )
        except Ebook.DoesNotExist:
            return Response({"error": "Ebook not found"}, status=status.HTTP_404_NOT_FOUND)

class ToggleMagazineArchiveView(APIView):
    """
    API to toggle the archive status of a magazine.
    """
    permission_classes = [AllowAny]

    def patch(self, request, pk):
        try:
            magazine = Magazines.objects.get(pk=pk)
            magazine.is_archived = not magazine.is_archived
            magazine.save()
            status_text = "archived" if magazine.is_archived else "unarchived"
            return Response(
                {"message": f"Magazine {status_text} successfully", "is_archived": magazine.is_archived},
                status=status.HTTP_200_OK
            )
        except Magazines.DoesNotExist:
            return Response({"error": "Magazine not found"}, status=status.HTTP_404_NOT_FOUND)


# Authors Related Views
class CreateAuthorView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = AuthorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Author created successfully", "data": serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GetAllAuthorsView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        authors = Authors.objects.all()
        serializer = AuthorSerializer(authors, many=True)
        return Response({"message": "Authors retrieved successfully", "data": serializer.data}, status=status.HTTP_200_OK)

class SingleAuthorView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, pk):
        try:
            author = Authors.objects.get(pk=pk)
            serializer = AuthorSerializer(author)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Authors.DoesNotExist:
            return Response({"error": "Author not found"}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk):
        try:
            author = Authors.objects.get(pk=pk)
            serializer = AuthorSerializer(author, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({"message": "Author updated successfully", "data": serializer.data}, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Authors.DoesNotExist:
            return Response({"error": "Author not found"}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        try:
            author = Authors.objects.get(pk=pk)
            author.delete()
            return Response({"message": "Author deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
        except Authors.DoesNotExist:
            return Response({"error": "Author not found"}, status=status.HTTP_404_NOT_FOUND)


def hello_view(request):
    return HttpResponse("Hello")

# Videos Related Views
class GetAllVideosView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        videos = Videos.objects.filter(status='Active').order_by('order', 'created_at')
        serializer = VideosSerializer(videos, many=True)
        return Response({"message": "Videos retrieved successfully", "data": serializer.data}, status=status.HTTP_200_OK)


class SingleVideoView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, pk):
        try:
            video = Videos.objects.get(pk=pk)
            serializer = VideosSerializer(video)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Videos.DoesNotExist:
            return Response({"error": "Video not found"}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk):
        try:
            video = Videos.objects.get(pk=pk)
            serializer = VideosSerializer(video, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Videos.DoesNotExist:
            return Response({"error": "Video not found"}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        try:
            video = Videos.objects.get(pk=pk)
            video.delete()
            return Response({"message": "Video deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
        except Videos.DoesNotExist:
            return Response({"error": "Video not found"}, status=status.HTTP_404_NOT_FOUND)


class CreateVideoView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = VideosSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Video created successfully", "data": serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GetAllVideosManagementView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        videos = Videos.objects.all().order_by('order', 'created_at')
        serializer = VideosSerializer(videos, many=True)
        return Response({"message": "Videos retrieved successfully", "data": serializer.data}, status=status.HTTP_200_OK)


class DashboardStatsView(APIView):
    """
    API to get dashboard statistics for admin panel.
    """
    permission_classes = [AllowAny]

    def get(self, request):
        try:
            # Get total counts
            total_articles = Articles.objects.count()
            total_archived_magazines = Magazines.objects.filter(is_archived=True).count()
            total_ebooks = Ebook.objects.count()
            total_authors = Authors.objects.count()
            total_comments = Comments.objects.count()
            total_videos = Videos.objects.count()

            stats = {
                "total_articles": total_articles,
                "total_archived_magazines": total_archived_magazines,
                "total_ebooks": total_ebooks,
                "total_authors": total_authors,
                "total_comments": total_comments,
                "total_videos": total_videos,
            }

            return Response({
                "message": "Dashboard statistics retrieved successfully",
                "data": stats
            }, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({
                "error": "Failed to retrieve dashboard statistics",
                "details": str(e)
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
