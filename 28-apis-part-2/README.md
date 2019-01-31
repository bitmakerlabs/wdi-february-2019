Today we will learn how to work with various RESTful APIs, and how to build our own.

## Agenda
+ Review HTTP statuses
+ What is an API?
+ What is a RESTful API?
+ Using a simple API
+ Using an authenticated API
+ Environment management
+ Building an API
+ `requests`

## Working with APIs

In this lesson, we'll investigate why you might need to make API requests from the server and how to use an example API.


After this lesson, you'll know:

  * Why you need to make some API requests from the server
  * How to research your API and read its documentation
  * How to use a library that handles OAuth for an API


1. Researching Twitter API 
  * Want to make an app that displays tweets about a topic
  * Google 'Twitter API' and go to their API dev docs
  * Regular vs streaming API
  * API rate limiting
  * Try out an API endpoint in the browser - what happens?
  * Need OAuth!
  * Find capabilities - does it do what we want?
    * URL endpoints with explanations
    * example responses
      * Can just google search "Twitter API JSON" to find what we want

1. Researching Twitter Wrapper
  * surely someone has written something to use Twitter for Python?
    * Google it!

1. Registering your application with Twitter 
  * Website
    * Twitter wants to know who you are in the real world - just use a placeholder here for now
  * Callback URL - where to go after asking a user to sign in through the service
  * Auto-generates a consumer public/private key pair
    * like username/password
  * Need to generate an access token public/private pair
    * represents what we have access to
    * can be revoked



1. Use PostMan to make requests to the Twitter API (time permitting)

