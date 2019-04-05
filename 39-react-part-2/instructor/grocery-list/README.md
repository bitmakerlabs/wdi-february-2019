# Grocery List (Part 2)

Today we'll continue to work on our grocery list application. If you completed yesterday's exercise, you may use it as a starting point. If not, feel free to use the application provided here.

Currently, our application renders the category filter data, as well as a selection of grocery list items. It also allows users to increase and decrease the quantity of each list item. However, it does not allow users to add new items to the list, or to filter the existing items by category. Let's add these features!

## Getting Started

Before you get start, make sure to install the project's dependecies by navigating into the `grocery-list/` directory and running the following command:

```
npm install
```

Once the dependencies have been intalled, start the application by running the following command:

```
npm run start
```

## Part 1: Adding New Items

Update the `<Form />` component such that when a user enters a string of text and presses 'Add', a new item appears in the grocery list below.

Currently, our `items` array is made up of objcts that have a `name`, a `type`, and a `quantity`. Since the submission form does not include fields for `type` or `quantity`, make sure to set default values for these properties.

This update should also:
  - Prevent users from submitting 'empty' items;
  - Clear the input field upon successful creation of a new item.

### Tips:
- The `<Form />` cannot act on the `items` data directly, but the `<App />` component may be able to help out.
- `<form>` elements expose a special event that we can listen on and respond to.

## Part 2: Filtering Items By Category

Update the `<Filters />` component such that when a user clicks on one of the filters:
  - The UI is updated to indicated that the clicked filter has been selected;
  - The list below is updated to display only items whose type matches the selected filter.

### Tips
  - Currently, we're tracking the `filters` and `items` using 'state variables'. Is there another piece of information that we should record in order to complete this task?
  - Each of our `items` has a type property which matches one of the existing filters.
  - As in Part 1, the `<Filters />` component is not able to act on the `items` data directly.

## Stretch Goals

### Adding New Categories

Update the `<Filters />` component such that a user can create new categories using the existing input field. When a user submits the new category data, the application should re-render and display the updated filters list.

### Adding Item Types

Update the `<Form />` component with an additional field that will allow users to specify the 'type' of a new item. When a user creates a new item, this information should be captured and applied.
