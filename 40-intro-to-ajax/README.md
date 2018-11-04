# Intro to AJAX

Today we introduce AJAX, the last major conceptual piece of building a modern web application.

## Agenda

* **Requests and Responses Review (15 mins)**
    * Request/response cycle
    * Types of requests
* **Intro to AJAX (30 mins)**
    * What is it?
    * Data interchange formats
    * How does it work?
    * How do we use it?
* **Exercise (60 mins)**
    * Intro
    * API overview
    * Coding
* **Final Thoughts (5 mins)**
* **Q&A/Resources (10 mins)**

## Requests and Responses Review

### Request/Response Cycle

* [HTTP Basics](http://wiki.hashphp.org/images/6/67/HTTP_Model.jpg)

### Types of Requests

* [Classic vs AJAX Web Application Model](http://adaptivepath.org/uploads/archive/images/publications/essays/ajax-fig1.png)
* [Synchronous vs Asynchronous Web Application Model](http://adaptivepath.org/uploads/archive/images/publications/essays/ajax-fig2.png)

## Intro to AJAX

### What Is It?

* A - Asynchronous: Non-blocking communication
* J - JavaScript
* A - and
* X - XML (HTML, JS, JSON, etc.)

### Data Interchange formats

* **XML (Extensible Markup Language)**
    * A markup language for describing data.
    * Like HTML, it uses opening and closing tags to encapsulate information.
    * Unlike HTML, the tags are based on the information being described (ie. there is not a finite list of 'known tags').
    * [Example](https://www.w3schools.com/xml/plant_catalog.xml)
* **JSON (JavaScript Object Notation)**
    * A data format based on the JavaScript syntax.
    * Easy for JavaScript applications to parse.
    * Many programming languages (including Ruby) are able to convert data to and from JSON.
    * [Example](http://json.org/example.html)

### How Does It Work?

* The user performs an action on a page.
* The action is intercepted by a JavaScript program.
* The JavaScript program dispatches a network request, which includes the URL, a method/action/verb, and sometimes a request body and/or header information.
* The server sends a response, which is received by the JavaScript.
* The JavaScript program determines what to do with the response, depending on: the type of request; whether it succeeded or failed; and other factors.

**For example:**
* *FIRST* A user browsing an eCommerce site clicks on an 'Add To Cart' button.
* *THEN* The program dispatches a network request which includes information about the product that the user is 'adding'.
* *THEN* The server sends a response saying that product has successfully been added to the user's cart.
* *THEN* The program displays a pop-up with a success message, and displays the option to checkout or continue shopping.

### How Do We Use It?

* [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
* [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [`axios`](https://github.com/axios/axios)

## Exercise

### Intro

We'll be building a simple HTML page and JavaScript program that interacts with the [Monsters API](https://bitmaker-monsters-api.herokuapp.com/).

For this exercise, we don't need to write any back-end code. However, we *do* need to know how to interact with the API.

### API Overview

* URL: https://bitmaker-monsters-api.herokuapp.com/
* Routes:
    * `/`
    * `/monsters`
    * `/monsters/scare`
* File Extensions
    * `.html` - Returns the monster data as HTML.
    * `.txt` - Returns the names of the monsters as plain text.
    * `.json` - Returns the monster data as JSON.
* Query String Parameters
    * `?limit=n` - Allows the application to limit the amount of data returned.

### Coding

This exercise is split into two parts:

1. For part one, we'll make a request to GET monster data from the API.
2. For part two, we'll POST new monster data to the API and confirm that it persists.

### Final Thoughts

After the exercise, we'll talk briefly about why AJAX is a useful and powerful tool, as well as highlight some cases where it may actually work against us.

* Progressive enhancement and graceful degradation
* Accessibility concerns
* [Sigh, JavaScript](http://sighjavascript.tumblr.com)

### Q&A/Resources

Finally, we'll spend a few minutes answering any questions that may not have been addressed during the lecture or exercise.

## Links

* [HTTP Diagram](http://wiki.hashphp.org/images/6/67/HTTP_Model.jpg)
* [AJAX: A New Approach to Web Applications](http://adaptivepath.org/ideas/ajax-new-approach-web-applications/)
* [XML Example](https://www.w3schools.com/xml/plant_catalog.xml)
* [JSON Example](http://json.org/example.html)
* [`XMLHttpRequest` documentation](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
* [`fetch` documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [`axios` documentation](https://github.com/axios/axios)
* [Monsters API](https://bitmaker-monsters-api.herokuapp.com/)
