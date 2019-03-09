from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse

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
    form = GameForm(request.POST)
    if form.is_valid():
        new_game = form.save()
        return HttpResponseRedirect('/')
    else:
        context = { 'form': form }
        response = render(request, 'new.html', context)
        return HttpResponse(response)


def show(request, game_id):
    game = get_object_or_404(Game, id=game_id)
    return render(request, 'show.html', {
        'game': game,
    })


def edit(request, game_id):
    game = get_object_or_404(Game, id=game_id)
    if request.method == 'GET':
        form = GameForm(instance=game)
        context = { 'form': form, 'game': game }
        return render(request, 'edit.html', context)

    elif request.method == 'POST':
        form = GameForm(request.POST, instance=game)
        if form.is_valid():
            updated_game = form.save()
            return HttpResponseRedirect(reverse('show', args=[game.id]))
        else:
            context = { 'form': form, 'game': game }
            response = render(request, 'edit.html', context)
            return HttpResponse(response)
