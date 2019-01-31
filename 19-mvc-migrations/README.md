bout the MVC pattern for architecting web apps and focus on how to integrate databases in Django projects.

## Agenda
* MVC
  * how does this relate to what we've done so far
* The "M" in MVC
  * Adding a database to your Django project
  * Building models with Django's ORM
* Django shell
* Django's built-in admin interface


### Django Shell

Run `python manage.py shell` to open an IPython shell with access to your app's database

* What is a database?
* Why do we need databases?

## Components of a Database

* **Tables**: picture an Excel spreadsheet
* **Columns**: attributes, name, data type
* **Row**: Record, represents a set of data for each column
* **Primary key**:
  * `id`/`pk`
  * Unique
  * Can be an integer or [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) (349tu-hbe0984-5hww9e8y5h)
* **Foreign key**:
Allows you to associate to another table. i.e.
`objectname_id`
* [ACID](https://en.wikipedia.org/wiki/ACID)

## Postgres

* How to run `psql`
  * On Linux, simply run `psql` anywhere in the terminal
  * On OS X, first make sure postgres is running (you should see the elephant in your toolbar).  If it isn't open spotlight (`cmd` + `space`) and search for the Postgres application.  If `psql` still doesn't work even though you see the elephant, try clicking on the elephant and telling it to start the Postgres server.
* Postgres commands:
  * `\q` - quits from Postgres
  * `\l` - lists all the databases in the system



### Django's ORM

### Useful Methods to Know

The complete Django db query interface can be found in [the official documentation](https://docs.djangoproject.com/en/2.1/topics/db/queries/#falling-back-to-raw-sql), but here are some highlights:

#### Creating

`MyModel.create(name='someone', email='someone@somewhere.ca')`


#### Reading

##### Retrieving a Single Object

`MyModel.objects.get(pk=1)`

`MyModel.objects.get(name='something')`


##### Retrieving Multiple Objects

`MyModel.objects.all()`


#### Conditions

Exact match:

`MyModel.objects.filter(category='animals')`

Greater than:

`MyModel.objects.filter(price__gt=10)`

Less than or equal to:

`MyModel.objects.filter(price__lte=100)` 


Notice the double underscores: `__` (called 'dunder' in Python lingo).

#### Counting Results

`MyModel.objects.filter(category='animals').count()`



#### Order

In ascending order:

`MyModel.objects.order_by('price')`

Or descending order:

`MyModel.objects.order_by('-price')`


#### Limit

The QuerySet returned can be treated like a list:

`MyModel.objects.filter(category='animals')[0]
`MyModel.objects.filter(category='animals')[100:200]


#### Aggregate

These functions have [a separate page in the docs](https://docs.djangoproject.com/en/2.1/topics/db/aggregation/)

You can import extra aggregation functions:

`from django.db.models import Avg, Sum, Max, Min`

And use them like so:

`MyModel.objects.aggregate(Avg('price'))`

#### Deleting

```py
example = MyModel.objects.get(pk=1)
example.delete()
```

#### Updating

```python
example = MyModel.objects.get(pk=1)
example.name = 'Someone else'
example.save()
```



### Querying the Database

Chain `.query` at the end of any Django query method to see what SQL is being composed and executed for you.
