## AJAX and Forms

Today, we'll learn how to work with Django and AJAX and all the different ways we can do that.

## Agenda
After this lesson, you should have an understanding of:

  * Binding event handlers to a form
  * Serializing form data for an AJAX request
  * Sending AJAX requests with request methods other than GET
  * Responding to form posts via AJAX

## The current 'Cog' app

* The app already works - we just need to use AJAX to make it nicer!
* Allows the user to view a list of Cogs, an individual cog's details, create a new cog, update and delete a cog

## The Plan
* Recreate some of the vanilla cog app using Ajax
  * We'll try with HTML responses
  * We'll try with JSON responses

## AJAXifying the front-end with JavaScript
* Waiting for the `DOMContentLoaded` event
* intercepting the event
* `axios` - url, method, responseType, data
* `.then()`and `.catch()`
* Test it at every stage!
* What do our responses look like?

## The response
* How does our front-end change when we change the response from HTML to JSON?

## Wrap-up
