import datetime as dt
from datetime import datetime, timedelta
from django.core.exceptions import ValidationError
from django.forms import (CharField, DateField, DateInput,
     EmailField, Form, IntegerField, ModelChoiceField, ModelForm,
     PasswordInput, Textarea, TimeField, TimeInput, URLField)
from restaurants.models import Category, Profile, Reservation, Restaurant

class ReservationForm(ModelForm):
    party_size = IntegerField()
    notes = CharField(required=False, widget=Textarea())
    time = TimeField(widget=TimeInput(attrs={'type': 'time' }))
    date = DateField(widget=DateInput(attrs={'type': 'date', 'min': dt.date.today() }))

    class Meta:
        model = Reservation
        fields = ['party_size', 'date', 'time', 'notes']

    def clean_time(self):
        cleaned_time =  self.cleaned_data['time']
        restaurant = self.instance.restaurant
        closing = restaurant.closing_time
        opening = restaurant.opening_time

        if restaurant.open_past_midnight():
            if closing < cleaned_time and cleaned_time < opening:
                self.add_error('time', 'Restaurant not open at that time')
        else:
            if cleaned_time < opening or closing < cleaned_time:
                self.add_error('time', 'Restaurant not open at that time')

        return cleaned_time

    def clean_date(self):
        cleaned_date = self.cleaned_data['date']

        if cleaned_date < dt.date.today():
            self.add_error('date', 'Cannot make reservation for past date')

        return cleaned_date

    def clean_party_size(self):
        cleaned_party_size = self.cleaned_data['party_size']
        restaurant = self.instance.restaurant

        if cleaned_party_size > restaurant.capacity:
            self.add_error('party_size', 'Party size too large')

        return cleaned_party_size

    def clean(self):
        cleaned_data = super().clean()
        cleaned_time = cleaned_data['time']
        cleaned_date = cleaned_data['date']
        cleaned_party_size = cleaned_data['party_size']
        restaurant = self.instance.restaurant
        reservation_datetime = datetime(cleaned_date.year, cleaned_date.month, cleaned_date.day, cleaned_time.hour, cleaned_time.minute)
        if reservation_datetime < (datetime.now() + timedelta(minutes=30)):
            self.add_error('time', 'Reservation must be at least 30 minutes in future')

        if not restaurant.room_for(cleaned_date, cleaned_time, cleaned_party_size):
            self.add_error('time', 'Restaurant is booked at that time')

        return cleaned_data

class RestaurantForm(ModelForm):
    opening_time = TimeField(widget=TimeInput(attrs={'type': 'time' }))
    closing_time = TimeField(widget=TimeInput(attrs={'type': 'time' }))
    name = CharField()
    address = CharField()
    phone = CharField()
    capacity = IntegerField()
    image = URLField()
    description = Textarea()
    category = ModelChoiceField(queryset=Category.objects.all())

    class Meta:
        model = Restaurant
        fields = ['name', 'description', 'address', 'phone', 'capacity', 'opening_time', 'closing_time', 'image', 'category']

class ProfileForm(ModelForm):
    first_name = CharField()
    last_name = CharField()
    email = EmailField()
    phone = CharField()

    class Meta:
        model = Profile
        fields = ['first_name', 'last_name', 'email', 'phone']

class LoginForm(Form):
    username = CharField(label="User Name", max_length=64)
    password = CharField(widget=PasswordInput())
