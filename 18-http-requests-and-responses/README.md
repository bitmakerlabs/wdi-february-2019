# HTTP Requests and Responses

Every time you enter a URL in your browser, you're making a **request** to a web server. When the page you requested appears in your browser, it's because you've received the **response** from the server.

The entire web is designed on the concept of clients that make requests to servers and servers returning a response for the requested information.

During this lecture, we'll cover how the web works and the different parts of the **HTTP** (Hypertext Transfer Protocol). We'll also cover how to get started writing our very first Ruby web application!

## Agenda

* [Intro](#intro) (< 5 mins)
* [Request-Response Cycle](#request-response-cycle) (30 min)
* [Request Methods](#request-methods) (15 min)
* [CRUD](#crud) (5 min)
* [Response Codes](#response-codes) (5 min)
* [Django](#django) (60 min)

## Intro

* Recap of testing
* Intro of Requests and Responses

## Request-Response Cycle

* How information gets passed around on the web
* HTTP
* Client/Server concept
* Examples of making requests and getting reponses in the real world. e.g. Restaurant server, bank teller, post office.

### Parts of a request

* URL
* Request method
* Headers
* Body (sometimes)

### Parts of a response

* Response status code
* Headers
* Body (most of the time)

### Statelessness

## Request Methods/HTTP Verbs

Since a URL represent the location of a particular set of information, the request methods let us indicate what we want to do with it.

Common request methods:

* GET
* POST
* PUT or PATCH
* DELETE

## CRUD

* Create
* Read
* Update
* Delete

How the HTTP Verbs relate to CRUD:

HTTP Verb | Action   | Explanation
----------|----------|-------------
POST      | (C)reate | Create data
GET       | (R)ead   | Fetch data
PUT/PATCH | (U)pdate | Update data
DELETE    | (D)elete | Delete data

## Response Codes

Response codes let the browser know the status of the request

Response code categories:

* 1xx: Informational (not really used)
* 2xx: Success
* 3xx: Redirection
* 4xx: User Error
* 5xx: Server Error

Most important:

* 200: [OK](https://http.cat/200)
* 301: [Moved Permanently](https://http.cat/301)
* 302: [Found](https://http.cat/302)
* 403: [Forbidden](https://http.cat/403)
* 404: [Not Found](https://http.cat/404)
* 500: [Internal Server Error](https://http.cat/500)
* 503: [Service Unavailable](https://http.cat/503)

## Django 

## Django
Django is a web-framework for Python we'll be using for the remainder of the course.


* Defining URLs
* Templates

### Django Commands

start a new project:

`django-admin startproject my_project_name`

from inside the project directory, start the server:

`python manage.py runserver`

then go to `localhost:8000` in your browser

#### Configuration

In `settings.py`, add the name of your project to the list of `INSTALLED_APPS`.

### What goes where

* `urls.py` is where we define our URLs
* the `templates` directory is where we put our HTML files
  * embed Python in these HTML templates with `{% %}` and `{{ }}`
* `views.py` is (typically) where we define the functions to handle different requests
