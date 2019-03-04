from django.http import HttpResponse
from django.shortcuts import render
from crm.models import Contact

def contact_list(request):
    context = {'contacts': Contact.objects.all() }
    html = render(request, 'index.html', context)
    return HttpResponse(html)