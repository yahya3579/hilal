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
from adminpanel.views import GetArticlesByCategoryView, GetAllCommentsView, GetTopArticlesView
from api.views import UserRoleAPIView
from adminpanel.views import GetArticlesByUserView

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
]
