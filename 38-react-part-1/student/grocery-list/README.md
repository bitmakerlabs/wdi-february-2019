# Grocery List

A simple shopping list (built in React JS).

## Step 1: Componentize

Assess the current interface and determine how best to convert it into React Components, such that it will show up looking the same way that it does when run as an HTML-only webpage.

### Hints

- Look for repeating patterns in the HTML
- Remember to convert all `class` attributes to `className` and ensure all self-terinating elements have a trailing slash
- Components must `return` a single HTML element. So, you may wrap multiple elements in a `<div>` (or similar); Alternatively, you can wrap them in a special React Component called a `<React.Fragment>` (the Fragment docs [can be found here](https://reactjs.org/docs/fragments.html))
- Remember: Not every block has to be a component (`<header>`, in this case)

## Step 2: State

Determine where your the state variables for your data will be held, such that the right element is being re-rendered on change of the variable's value. Both your list items and category headings should be stored.

### Hints

- Remember that data easily flows downward from parten to chold, but requires some thought when looking to send it back up. Be sure to consider what's required to render this application before determining your state variable locations.

## Step 3: Data and Rerendering

Complete the application by ensuring your grocery list quantities can increase and decrease. Ensure item quantities can never drip below 0 items required.