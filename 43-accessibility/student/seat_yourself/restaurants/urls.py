from django.urls import path
import restaurants.views as views

urlpatterns = [
    path('restaurants/', views.restaurants_list, name='restaurants_list'),
    path('restaurants/<int:id>/', views.restaurant_show, name='restaurant_show'),
    path('restaurants/<int:id>/edit', views.restaurant_edit, name='restaurant_edit'),
    path('restaurants/<int:restaurant_id>/reservations/create/', views.reservation_create, name='reservation_create'),
    path('categories/', views.categories_list, name='categories_list'),
    path('category/<int:id>/', views.category_show, name='category_show'),
    path('login/', views.login_view, name="login"),
    path('logout/', views.logout_view, name="logout"),
    path('profile/', views.profile, name="user_profile"),
    path('profiles/create', views.profile_create, name="profile_create"),
    path('signup/', views.signup, name='signup'),
    path('search/', views.search, name='restaurants_search'),
]
