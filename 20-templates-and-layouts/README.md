Today we'll continue to explore the basics of creating applications for the web.  We'll talk about dynamic routes, params, and how to keep your front-end code DRY.

## Web Frameworks Part 3

Now that we have an idea of how HTTP works, and having seen a basic web application in action, it's time to take things to the next level with a larger web application.

We'll write a web application that has a layout, CSS, images, dynamic pages, and dynamic routes.

## Agenda

* Layouts
* CSS and Images
* Dynamic Routes and the Request Parameters 



## Doing more with Django templates

* `{{ }}` vs `{% %}`
* Iteration and conditionals in templates
* Calling methods inside templates
* Template Tags
  * Generating URLs of internal links
    * `path('articles', views.article_list, name='article_list_path')` in `urls.py`
    * `{% url 'article_list_path' %}` in template


## Layouts

* Using a `layout` to give consistency to each page and avoid repeating front-end code

`base.html`
```html
.
.
.
<body>
.
.
.
  {% block content %}
  {% endblock %}
.
.
.
</body>
```

`specific_page.html`
```html
{% extends 'base.html' %}
{% block content %}
.
.
.
{% endblock %}
```

## Incorporating CSS, images, and other static assets

1. Create `static` directory, usually with `css` and `images` sub-directories

2. `base.html`

```html
<head>
  {% load staticfiles %}
  ...
  <link rel="stylesheet" href="{% static 'css/name_of_stylesheet.css' %}">
</head>
```

## Defining dynamic routes and accessing captured parameters

* **Dynamic Routes** vs **Static Routes**

Define a dynamic URL pattern with a placeholder (e.g. `id`):

`urls.py`
```python
.
.
.
path('articles/<int:id>', views.article_details, name='article_details_path'),
.
.
.
```

Your view function takes an extra argument for each dynamic component of the URL:

`views.py`
```python
def article_details(request, id):
 ...
```

Generating the URL in a template:

```python
{% url 'article_details_path' id={{ whatever }} %}`
```
