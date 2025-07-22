# myapp/urls.py
from django.urls import path
from .views import CreateCommentView
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('create-comment/', CreateCommentView.as_view(), name='create-comment'),
]
