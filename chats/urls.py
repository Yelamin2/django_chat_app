
from django.urls import path
from .views import  ChatDetailAPIView, RoomListAPIView, ChatListAPIView


urlpatterns = [
    path('chats<int:pk>/', ChatDetailAPIView.as_view()),
    # path('',ChatListAPIView.as_view()),
    # path('chats/', )
    path('rooms/<int:room>/chats/', ChatListAPIView.as_view()),
    path('rooms/', RoomListAPIView.as_view())
]