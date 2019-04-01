from django.urls import path
from cogs_html_api.views  import cog_html_api_home, CogHtmlApiList, CogHtmlApiDetail

urlpatterns = [
  path('', cog_html_api_home),
  path('cogs', CogHtmlApiList.as_view()),
  path('<slug:pk>/', CogHtmlApiDetail.as_view()),
]
