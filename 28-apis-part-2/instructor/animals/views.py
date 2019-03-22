import json

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.forms.models import model_to_dict

from .models import Animal

def index(request):
    animals = Animal.objects.all()
    data = list(animals.values())
    # return JsonResponse(data, safe=False)

    return JsonResponse({
        'number_of_animals': animals.count(),
        'animals': data,
        # 'animals': [ # hardcoded approach
        #     {
        #         'species': 'Llama',
        #         'region': 'Andes (South America)',
        #     },
        #     {
        #         'species': 'Condor',
        #         'region': 'South America',
        #     },
        # ],
    })


def show_animal(request, id):
    animal = Animal.objects.get(pk=id)
    data = model_to_dict(animal)
    return JsonResponse(data)
    # return JsonResponse({
    #     'id': id,
    #     'species': 'Condor',
    #     'region': 'South America',
    # })


# def create_animal(request):



    # return HttpResponse(animals.values()) # old attempt
