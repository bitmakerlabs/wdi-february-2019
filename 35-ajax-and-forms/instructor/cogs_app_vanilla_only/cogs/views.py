from django.views.generic.detail import DetailView
from django.views.generic        import ListView
from django.views.generic.edit   import CreateView, UpdateView, DeleteView
from cogs.models                 import Cog

class CogList(ListView):
  model = Cog

class CogDetail(DetailView):
  model = Cog

class CogCreate(CreateView):
  model  = Cog
  fields = ['name', 'on_sale']

  def get_success_url(self):
    return '/cogs'

class CogUpdate(UpdateView):
  model  = Cog
  fields = ['name', 'on_sale']

  def get_success_url(self):
    return '/cogs'

class CogDelete(DeleteView):
    model       = Cog
    success_url = '/cogs'
