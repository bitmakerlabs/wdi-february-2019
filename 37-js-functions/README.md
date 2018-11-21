# JS Functions & Callbacks

As we dive deeper into JavaScript, our second programming language, we need to revisit the concept of functions (methods in Ruby). We'll spend time noting the similarities and investigating the differences with how they're defined and called in Ruby.

## Agenda

0. A short review of methods
1. Side-by-side comparison with Ruby
2. How are JS Functions different than methods?
3. Functions as 'first-class citizens'
4. Callbacks & Asynchronous code


## A short review of methods

- Methods are used to give a name to an algorithm
- The two most important things about methods are the inputs and the outputs
- A method can accept zero or more parameters as inputs
- Parameters are local to the method
- The name of the method and it's list of parameters make up its signature
- Every method returns something to the caller


## Side-by-side comparison with Ruby

|   Ruby  |   JS    |
|---------|---------|
|Defined with the `def` keyword|Defined with the `function` keyword (or arrow notation)|
|All parameters must be specified when called|Parameters are not required|
|Implicit and explicit return values|Explicit return value for normal functions (otherwise `undefined`). Implicit and explicit return values for arrow functions.|
|One way to define a method|Three ways to define a function: function declaration, function expression, and arrow function|

## How are JS Functions different than methods?

- Functions in JS are **first-class citizens** of the language
- This means that a function can be:
  - Stored in a variable
  - Passed as an argument to another function
  - Returned from a function
- They're treated like all of the other basic data types (AKA primitive data types)

## Functions - how to write them - 15 minutes

  * Call them functions instead of methods in JavaScript
  * Function declaration
  * Function expression
  * Anonymous functions
  * Arrow functions

## Scope - 15 minutes

  * Local
    * `var`: function based
    * `let` and `const`: block based (easier)
  * Global
    * `window.varname` (in the browser)
    * `global.varname` (in node)
    * declare a variable without `var`, `let`, or `const`
  * Always use properly declare variables!!! Use `let` or `const`.

## Callbacks - 15 minutes

  * Functions passed into other functions.
    * Why would we want to do this? When we want to follow a set of instructions *later*.

## Asynchronous - 15 minutes

  * Use timer example - we want this code to run later.
  * Pass a callback to do it (just a function with instructions).
  * Show that code will not run in order.
