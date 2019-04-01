import json
from django.core                  import serializers
from django.forms.models          import model_to_dict
from django.http                  import HttpResponse
from django.http                  import JsonResponse
from django.template              import loader
from django.views.decorators.csrf import csrf_exempt
from cogs_json_api.models         import CogJsonApi

def cogs_json_api_home(request):
    template = loader.get_template('cogs_json_api_home.html')
    return HttpResponse(template.render({}, request))

def cogs_list(request):
  data = serializers.serialize('json', CogJsonApi.objects.all())
  return JsonResponse(data, safe=False)

def cog_detail(request, pk):
  cog      = CogJsonApi.objects.get(pk=pk)
  cog_dict = model_to_dict(cog)
  return JsonResponse(cog_dict)

@csrf_exempt
def cog_edit(request, pk):
  cog = CogJsonApi.objects.get(pk=pk)

  if request.body:
    data        = json.loads(request.body.decode('utf-8'))
    cog.name    = data.get('name')
    cog.on_sale = data.get('on_sale')
    cog.save()

  cog_dict = model_to_dict(cog)
  return JsonResponse(cog_dict)
