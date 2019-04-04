# Grocery List

A simple shopping list (built in React JS).

## Part 1: Component-ize

Assess the current interface and determine how best to convert it into React Components, such that it will show up looking the same way that it does when run as an HTML-only webpage.

### Tips:

- Look for repeating patterns in the HTML
- Remember to convert all `class` attributes to `className` and ensure all self-terminating elements have a trailing slash
- Inline style definitions have to be structured as an Object, and must use JS variable names
- Components must `return` a single HTML element. So, you may wrap multiple elements in a `<div>` (or similar); Alternatively, you can wrap them in a special React Component called a `<React.Fragment>` (the Fragment docs [can be found here](https://reactjs.org/docs/fragments.html))
- Not every block has to be a component (`<header>`, in this case)

## Part 2: State

Determine where your the state variables for your data will be held, such that the right element is being re-rendered on change of the variable's value. Both your list items and category headings should be stored.

### Tips:

- Remember that data easily flows downward from parent to child, but requires some thought when looking to send it back up. Be sure to consider what's required to render this application before determining your state variable locations.

## Part 3: Data and Re-rendering

Complete the application by ensuring your grocery list quantities can increase and decrease. Ensure item quantities can never drip below 0 items required.