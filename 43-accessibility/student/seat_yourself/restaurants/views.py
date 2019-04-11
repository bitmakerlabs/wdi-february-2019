from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.db.models import Q
from django.shortcuts import render, reverse, redirect, get_object_or_404
from django.views.decorators.http import require_http_methods
from restaurants.forms import LoginForm, ProfileForm, ReservationForm, RestaurantForm
from restaurants.models import Category, Profile, Restaurant

def restaurants_list(request):
    restaurants = Restaurant.objects.all()
    context = {'restaurants': restaurants, 'title': 'Restaurants'}
    return render(request, 'restaurants_list.html', context)

def search(request):
    query = request.GET.get('query', '')
    results = Restaurant.objects.filter(Q(name__icontains=query) | Q(description__icontains=query) | Q(category__name__icontains=query))
    context = {'title': 'Search', 'restaurants': results, 'query': query}
    return render(request, 'restaurants_list.html', context)

def restaurant_show(request, id):
    restaurant = Restaurant.objects.get(pk=id)
    context = {'restaurant': restaurant, 'title': restaurant.name}
    if request.user.is_authenticated:
        context['reservations'] = restaurant.reservations.filter(user=request.user)
        context['reservation_form'] = ReservationForm()
    return render(request, 'restaurant_details.html', context)

@login_required
def restaurant_edit(request, id):
    restaurant = Restaurant.objects.get(pk=id)
    if request.method == 'POST':
        form = RestaurantForm(request.POST, instance=restaurant)
        if form.is_valid():
            resto = form.save()
            return redirect(reverse('restaurant_show', args=[restaurant.pk]))
    else:
        form = RestaurantForm(instance=restaurant)
        title = "Edit {}".format(restaurant.name)
        context = {'restaurant': restaurant, 'form': form, 'title': title}
        return render(request, 'restaurant_edit.html', context)

def categories_list(request):
    categories = Category.objects.all()
    context = {'categories': categories}
    return render(request, 'categories.html', context)

def category_show(request, id):
    category = Category.objects.get(pk=id)
    context = {'category': category}
    return render(request, 'category.html', context)

@login_required
@require_http_methods(["POST"])
def reservation_create(request, restaurant_id):
    restaurant = Restaurant.objects.get(pk=restaurant_id)
    form = ReservationForm(request.POST)
    reservation = form.instance
    reservation.restaurant = restaurant
    reservation.user = request.user
    if form.is_valid():
        form.save()
        return redirect(reverse('restaurant_show', args=[restaurant.pk]))
    else:
        context = {'restaurant': restaurant, 'reservation_form': form, 'title': restaurant.name}
        return render(request, 'restaurant_details.html', context)

def login_view(request):
    if request.user.is_authenticated:
        return redirect(reverse('user_profile'))
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            pw = form.cleaned_data['password']
            user = authenticate(username=username, password=pw)
            if user is not None:
                if user.is_active:
                    login(request, user)
                    return redirect(reverse('home'))
                else:
                    form.add_error('username', 'This account has been disabled')
            else:
                form.add_error('username', 'Login failed')
    else:
        form = LoginForm()

    context = {'form': form}
    return render(request, 'login.html', context)

def logout_view(request):
    logout(request)
    return redirect(reverse('home'))

@login_required
def profile(request):
    context = {'title': 'Profile'}
    if not Profile.exists_for_user(request.user):
        form = ProfileForm()
        context['form'] = form
    return render(request, 'profile.html', context)

@login_required
@require_http_methods(["POST"])
def profile_create(request):
    form = ProfileForm(request.POST)
    form.instance.user = request.user
    if form.is_valid():
        form.save()
        return redirect(reverse('user_profile'))
    else:
        context = {'title': 'Profile', 'form': form}
        return render(request, 'profile.html', context)

def signup(request):
    if request.user.is_authenticated:
        return redirect(reverse('user_profile'))
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect(reverse('user_profile'))
    else:
        form = UserCreationForm()
    return render(request, 'signup.html', {'form': form})
