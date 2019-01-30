Functions are a named sequence of instructions that allow us to reuse code in multiple places in our programs. We'll discuss why functions are useful, what to think about when defining and using your own functions and those that are provided to you through the language and from other developers.

## Agenda

0. Setting up Atom
1. What are functions?
2. How to define a function
3. Inputs & outputs
4. Code style

## What are Functions?

- A function is a named sequence of instructions
- Some programming languages refer to it as a function
- It *encapsulates* logic for re-use
  - Basically, it allows us to write code once, and reuse it in multiple places
  - A building block toward Don't Repeat Yourself (DRY)
  - Improves maintainability of our code when there's only one point of failure

## Variable Scope

- Local variables are only visible to the other statements at the same level

## Inputs & Outputs

- When creating a function the two things you want to think about at first are:
  - What are the inputs required to do the work inside the function?
  - What do I want to get out of the function?
- You can use the `return` keyword to return a value
- If you're not careful, **your function will return None**
  - That's not a particularly useful result for anyone using your function


## Code Style Guide

- Code must be indented within blocks
- Spaces around operators (=, +, =>, etc.)
- No space between function name and parameter list
  - DO: `def function(something):`
  - DON'T: `def function (something):`
- Spaces after commas in lists


