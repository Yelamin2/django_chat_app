
from django.urls import path
from .views import ChatListAPIView, ChatDetailAPIView, RoomListAPIView


urlpatterns = [
    path('<int:pk>/', ChatDetailAPIView.as_view()),
    path('',ChatListAPIView.as_view()),
    path('rooms/<int:chats>/chats', ChatListAPIView.as_view()),
    # path('chats/', RoomListAPIView.as_view())
]