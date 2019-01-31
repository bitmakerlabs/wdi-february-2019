Today we'll be getting to know the different parts of an HTML form. Forms are special because they allow your users to input and submit data to your web application. Once you receive a submitted form, you can save that data so that you can access it again later.

## Agenda
* HTML forms
 * Web accessibility for forms
* HTTP review (GET, POST, PUT, PATCH, DELETE)
* Network tab in the Chrome developer tools
* Saving submitted data
  * `request.GET` and `request.POST` dictionaries

## The `form` tag
* submitting a form generates an HTTP request
* remember to include `action` and `method` attributes to configure the request that gets sent

```html
<form action="/some_path_on_your_server" method="post">
...
</form>
```

## Form Fields
`<input type=" " name=" " value=" " id=" "/>`
  * `type`, `name`, `value`, `id` attributes
  * `id` must match with `for` attribute of corresponding `label` tag
  * types include `text`, `radio`, `checkbox`, `hidden`, `file`, `submit`

`<label for=" ">...</label>`
  * `for` attribute must match with `id` attribute of corresponding field

`<textarea name=" " id=" "></textarea>`
  * `name` and `id` attributes
  * whitespace sensitive

```
<select name=" " id=" ">
<option value=" ">text that the user sees</option>
<!--- more options -->
</select>
```
  * `name`, `id` attributes on `<select>`
  * `value` attribute on `<option>`

```
<fieldset>
<legend>description of what data this fieldset is for</legend>
<!-- fields go here-->
</fieldset>
```

## request.GET or request.POST
* contains all data from submitted form
  * the keys come from the `name` attributes of your fields
  * the values come from your user

```
{'title': "This is the title the user entered", 'description': "this is the description the user typed in"}
```

## PUT, PATCH, DELETE Requests

* HTML forms can't generate these! >:[


## Redirect vs Render

General guideline:
* render a response when receiving a GET request
  * `return HttpResponse(render(request, 'name_of_template.html`, context))`
* redirect the user (to a GET route) in response to all other (POST, PUT, PATCH, DELETE) requests
  * `return HttpResponseRedirect('/whatever_url')` 
  * redirecting tells the browser to send a fresh `get` request to a different URL
