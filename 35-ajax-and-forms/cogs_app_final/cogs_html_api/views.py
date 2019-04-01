from django.views.generic.detail import DetailView
from django.views.generic        import ListView
from cogs_html_api.models        import CogHtmlApi
from django.http                 import HttpResponse
from django.template             import loader

def cog_html_api_home(request):
  template = loader.get_template('cogs_html_home.html')
  return HttpResponse(template.render({}, request))

class CogHtmlApiList(ListView):
  model = CogHtmlApi

class CogHtmlApiDetail(DetailView):
  model = CogHtmlApi

