from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth import login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse
from django.contrib import messages

from rocketleague.models import Game, GameForm


def index(request):
    games = Game.objects.all()
    context = {
        'games': games,
    }
    response = render(request, 'index.html', context)
    return HttpResponse(response)


@login_required
def new(request):
    context = {
        'form': GameForm(),
    }
    response = render(request, 'new.html', context)
    return HttpResponse(response)

def show(request, game_id):
    # request.session['last_visited'] = 'show'
    if request.user.has_perm('rocketleague.view_game'):
        game = get_object_or_404(Game, id=game_id)
        return render(request, 'show.html', {
            'game': game,
        })
    else:
        messages.add_message(request, messages.WARNING, 'You do not have permission to access that page!')
        return HttpResponseRedirect(reverse('games_index'))


def edit(request, game_id):
    print(game_id, request)
    print(request.method)
    game = get_object_or_404(Game, id=game_id)
    form = GameForm(instance=game)
    context = { 'form': form, 'game': game }
    if request.method == 'GET':
        return render(request, 'edit.html', context)
    elif request.method == 'POST':
        form = GameForm(request.POST, instance=game)
        if form.is_valid():
            updated_game = form.save()
            return HttpResponseRedirect(reverse('show', args=[game.id]))
        else:
            print(form)
            print(form.errors)
            context = { 'form': form, 'game': game }
            return render(request, 'edit.html', context)


@login_required
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


def user_signup(request):
    if request.method == 'GET':
        context = { 'form': UserCreationForm() }
        return render(request, 'registration/signup.html', context)
    elif request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return HttpResponseRedirect(reverse('games_index'))
        else:
            context = { 'form': form }
            return render(request, 'registration/signup.html', context)
