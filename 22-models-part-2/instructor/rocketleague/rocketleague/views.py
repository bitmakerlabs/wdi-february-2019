from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect

from rocketleague.models import Game, GameForm


def index(request):
    games = Game.objects.all()
    context = {
        'games': games,
    }
    response = render(request, 'index.html', context)
    return HttpResponse(response)


def new(request):
    context = {
        'form': GameForm(),
    }
    response = render(request, 'new.html', context)
    return HttpResponse(response)

def create(request):
    # grab info from form
    # submit into database
    # new_game = Game.objects.create(request.POST)
    form = GameForm(request.POST)
    # check if submitted data is valid
    if form.is_valid():
        # if so, save and redirect to index page
        new_game = form.save()
        return HttpResponseRedirect('/')
    # if not, redirect to new page
    else:
        print(form.errors)
        # we should be re-rendering the form, but now with the errors
        # return HttpResponseRedirect('/new', { errors: form.errors })




    # new_game = Game.objects.create(
    #     description=request.POST['description'],
    #     blue_score=request.POST['blue_score'],
    #     orange_score=request.POST['orange_score'],
    # )
    # # redirect somewhere
    # return HttpResponseRedirect('/')
