# myapp/urls.py
from django.urls import path
from .views import CreateCommentView, CreateArticleView, GetAllArticlesView
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('create-comment/', CreateCommentView.as_view(), name='create-comment'),
    path('create-article/', CreateArticleView.as_view(), name='create-article'),
    path('get-articles/', GetAllArticlesView.as_view(), name='get-articles'),
]
