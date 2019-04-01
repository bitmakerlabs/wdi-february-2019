from django.urls import path
from cogs.views  import CogList, CogDetail, CogCreate, CogUpdate, CogDelete

urlpatterns = [
  path('', CogList.as_view()),
  path('new/', CogCreate.as_view()),
  path('<slug:pk>/', CogDetail.as_view()),
  path('<slug:pk>/edit', CogUpdate.as_view()),
  path('<slug:pk>/delete', CogDelete.as_view()),
]
