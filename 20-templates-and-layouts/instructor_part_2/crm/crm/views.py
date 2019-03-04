from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404
from crm.models import Contact

def about_page(request):
    context = {'title': 'About'}
    html = render(request, 'about.html', context)
    return HttpResponse(html)

def contact_list(request):
    context = {'title': 'CRM', 'contacts': Contact.objects.all() }
    html = render(request, 'index.html', context)
    return HttpResponse(html)

def contact_details(request, id):
    # retrieve single contact from db
    contact = get_object_or_404(Contact, pk=id)
    context = {'user': contact, 'title': contact.full_name()}
    html = render(request, 'contact.html', context)
    return HttpResponse(html)