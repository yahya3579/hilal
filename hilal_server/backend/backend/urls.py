"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from api.views import CreateUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from api.views import GoogleLoginAPIView,LoginView,RefreshTokenView
from api.views import FacebookLoginAPIView
from api.views import CustomLoginView
from adminpanel.views import SingleArticleView
from adminpanel.views import CreateCommentView, CreateArticleView, GetAllArticlesView
from adminpanel.views import GetArticlesByCategoryView, GetAllCommentsView, GetTopArticlesView , DeleteCommentView
from api.views import UserRoleAPIView
from adminpanel.views import GetArticlesByUserView,hello_view
from api.views import LogoutAPIView
from adminpanel.views import SingleBillboardView, CreateBillboardView, GetAllBillboardsView
from adminpanel.views import DeleteBillboardView
from adminpanel.views import GetBillboardByPositionView,GetAllEbooksView,SingleEbookView,CreateOrUpdateEbookView,GetArchivedEbooksView
from adminpanel.views import GetAllMagazinesView, SingleMagazineView, CreateOrUpdateMagazineView
from adminpanel.views import CreateAuthorView, GetAllAuthorsView, SingleAuthorView
from adminpanel.views import GetArchivedMagazinesView

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/user/register/", CreateUserView.as_view(), name="register"),
    # path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    # path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
     path("api/token/", CustomLoginView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", RefreshTokenView.as_view(), name="token_refresh"),
    path("api/user/google-login/", GoogleLoginAPIView.as_view(), name="google-login"),
    path("api/user/facebook-login/", FacebookLoginAPIView.as_view(), name="facebook-login"),
    path("api-auth/",include("rest_framework.urls")),
    path('author_management/', include('author_management.urls')),  # Add this line

    # article management URLs
    path('api/article/<int:pk>/', SingleArticleView.as_view(), name='single-article'), #get the single article with post delete up and get methods
    path('api/create-article/', CreateArticleView.as_view(), name='create-article'), # create article with post method
    path('api/get-articles/', GetAllArticlesView.as_view(), name='get-articles'),# get all articles with get method
    path('api/create-comment/', CreateCommentView.as_view(), name='create-comment'), # create comment with post method
    path('api/articles/category/<str:category>/', GetArticlesByCategoryView.as_view(), name='articles-by-category'), # get articles by category
    path('api/get-comments/', GetAllCommentsView.as_view(), name='get-comments'), # get all comments with get method
    path('api/get-recent-articles/', GetTopArticlesView.as_view(), name='get-top-articles'), # get top 10 recent articles
    path("api/user/<int:user_id>/role/", UserRoleAPIView.as_view(), name="user-role"),
    path("api/articles/user/<int:user_id>/", GetArticlesByUserView.as_view(), name="articles-by-user"),
    path("api/logout/", LogoutAPIView.as_view(), name="logout"),
    path("api/hello/", hello_view, name="hello"),

    # billboard management URLs
    path('api/billboard/<int:pk>/', SingleBillboardView.as_view(), name='single-billboard'),  # Get, update, delete single billboard
    path('api/create-billboard/', CreateBillboardView.as_view(), name='create-billboard'),  # Create billboard
    path('api/get-billboards/', GetAllBillboardsView.as_view(), name='get-billboards'),  # Get all billboards
    path('api/delete-billboard/<int:pk>/', DeleteBillboardView.as_view(), name='delete-billboard'),  # Delete billboard
    path('api/billboard/location/<str:location>/', GetBillboardByPositionView.as_view(), name='billboard-by-location'),  # Get billboard by location

    # comment management URLs
    path('api/comment/<int:pk>/', DeleteCommentView.as_view(), name='delete-comment'),  # Delete comment

    # Magazine management URLs
    path('api/magazines/', GetAllMagazinesView.as_view(), name='get-all-magazines'),  # Get all magazines
    path('api/magazine/<int:pk>/', SingleMagazineView.as_view(), name='single-magazine'),  # Get or delete a single magazine
    path('api/magazine/create/', CreateOrUpdateMagazineView.as_view(), name='create-magazine'),  # Create a new magazine
    path('api/magazine/update/<int:pk>/', CreateOrUpdateMagazineView.as_view(), name='update-magazine'),  # Update a magazine
    path('api/magazines/archived/', GetArchivedMagazinesView.as_view(), name='get-archived-magazines'),  # New URL for archived magazines

    # Author management URLs
    path('api/authors/', GetAllAuthorsView.as_view(), name='get-all-authors'),  # Get all authors
    path('api/author/<int:pk>/', SingleAuthorView.as_view(), name='single-author'),  # Get, update, delete a single author
    path('api/author/create/', CreateAuthorView.as_view(), name='create-author'),  # Create a new author




       # Ebook management URLs
    path('api/ebooks/', GetAllEbooksView.as_view(), name='get-all-ebooks'),  # Get all ebooks
    path('api/ebook/<int:pk>/', SingleEbookView.as_view(), name='single-ebook'),  # Get or delete a single ebook
    path('api/ebook/create/', CreateOrUpdateEbookView.as_view(), name='create-ebook'),  # Create a new ebook
    path('api/ebook/update/<int:pk>/', CreateOrUpdateEbookView.as_view(), name='update-ebook'),  # Update a ebook
    path('api/ebooks/archived/', GetArchivedEbooksView.as_view(), name='get-archived-ebooks'),  # New URL for archived ebooks

]
