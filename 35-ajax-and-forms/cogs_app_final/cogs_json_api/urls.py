from django.urls         import path
from cogs_json_api.views import cogs_json_api_home, cogs_list, cog_detail, cog_edit

urlpatterns = [
  path('', cogs_json_api_home),
  path('cogs/', cogs_list),
  path('<slug:pk>/', cog_detail),
  path('<slug:pk>/edit', cog_edit),
]
