from django.urls import include, path
from . import views

urlpatterns = [
  path('', views.home, name='home'),
  path('cogs/', include('cogs.urls')),
  path('cogs_html_api/', include('cogs_html_api.urls')),
  path('cogs_json_api/', include('cogs_json_api.urls')),
]
