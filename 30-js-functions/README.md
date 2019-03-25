## Agenda

- function declarations
- function expressions
- arrow functions
- callbacks
- event loop
- anonymous functions
- forEach
- map
- reduce
- filter
- sort
- every
- some
- wrap-up

## Today's lesson

- the goal of today's lesson is to teach you about concepts, not syntax

- there will be some interactive points where you'll be asked to  apply a concept through an exercise

## Function declarations

```js
function add(a, b) {
  return a + b;
}
```

## Function expression

```js
const add = function(a, b) {
  return a + b;
}
```

## Arrow function syntax

```js
const add = (a, b) => {
  return a + b;
}
```

## Arrow function: implicit return

Leave out the curly braces

```js
const add = (a, b) => a + b
```

What happens if we leave out brackets and explicitly `return`?

```js
const add = (a, b) => return a + b
```

## Arrow function: single parameter

Leave out the brackets

```js
const isQuestion = sentence => sentence[sentence.length - 1] == '?'

isQuestion("Don't worry, be happy!") // false
isQuestion("How's it going?") // true
```

What happens if we use brackets with a single parameter?

```js
const isQuestion = (sentence) => sentence[sentence.length - 1] == '?'
```

## Arrow functions use case: validators

Let's build name validator

### Rules

- must have two words separated by a space
- each word's first letter must be an uppercase
- can only contain letters, numbers and hyphens
- each word cannot begin with a hyphen
- each word cannot end with a hyphen
- two consecutive hyphens are not allowed

## Name validation test cases

```js
// Valid Names
nameValidator('Margaret Hamilton')
nameValidator('Ada Lovelace')
nameValidator('Tim Berners-Lee')

// Invalid Names
nameValidator('Mr. Alan Turing')
nameValidator('grace hopper')
nameValidator('Yukihiro- Matsumoto')
nameValidator('Dennis Ritchie-')
nameValidator('Bill Gate$')
nameValidator('Barbara Lis--kov')
```

## Name validator function skeleton

```js
const nameValidator = name => {

  const errors = []

  // - must have two words separated by a space
  // - each word's first letter must be an uppercase
  // - can only contain letters, numbers and hyphens
  // - each word cannot begin with a hyphen
  // - each word cannot end with a hyphen
  // - two consecutive hyphens are not allowed

   displayResults(name, errors)
}

const displayResults = (name, errors) => {
  if (errors.length == 0) {
    console.log(`${name} is valid!`)
  } else {
      console.log(`${name} is invalid!`)
     for (error of errors)
      console.log(`- ${error}`)
  }

  console.log()
}
```

## Validation: name must have two words

```js
*const twoWords = name => name.split(' ').length == 2

const nameValidator = name => {

  const errors = []

* if (!twoWords(name))
*   errors.push('name must be two words')

  displayResults(name, errors)
}
```

## Validation: first name starts with uppercase

```javascript
*const firstName       = name   => name.split(' ')[0]
*const isUpper         = letter => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').includes(letter)
*const startsWithUpper = word   => isUpper(word[0])

const nameValidator = name => {

  const errors = []

* if (!startsWithUpper(firstName(name)))
*   errors.push(`first name '${firstName(name)}' must start with an uppercase letter`)

  displayResults(name, errors)
}
```

## Callbacks

A function passed into another function and then invoked at some point.

## Callbacks: `forEach`

Previously we called the nameValidator independently for each name we wanted to validate:

```js
// Valid Names
nameValidator('Margaret Hamilton')
nameValidator('Ada Lovelace')
nameValidator('Tim Berners-Lee')

// Invalid Names
nameValidator('Mr. Alan Turing')
nameValidator('grace hopper')
nameValidator('Yukihiro- Matsumoto')
nameValidator('Dennis Ritchie-')
nameValidator('Bill Gate$')
nameValidator('Barbara Lis--kov')
```

## Callbacks: `forEach`

Instead, let's put the names in an array and then call `forEach` on the array:

```js
const names = [
  'Margaret Hamilton',
  'Ada Lovelace',
  'Tim Berners-Lee',
  'Mr. Alan Turing',
  'grace hopper',
  'Yukihiro- Matsumoto',
  'Dennis Ritchie-',
  'Bill Gate$',
  'Barbara Lis--kov'
]

names.forEach(nameValidator)
```

## Callbacks: `forEach`

```js
const names = [
  'Margaret Hamilton',
  'Ada Lovelace',
  'Tim Berners-Lee',
  'Mr. Alan Turing',
  'grace hopper',
  'Yukihiro- Matsumoto',
  'Dennis Ritchie-',
  'Bill Gate$',
  'Barbara Lis--kov'
]

names.forEach(nameValidator)
```

In this example, `nameValidator` is the callback: it's passed into the builtin JavaScript `forEach` function and then invoked for each element in the array.

## Synchronous Code

Normally code is processed synchronously, that is, each line of code is executed completely before proceeding to the next execution point (e.g. next line).

Synchronous code is called *blocking* as the code after the currently executing code is *blocked* from executing until the current synchronous code has finished.

## Asynchronous Code

Some operations can take a while (e.g. by a while, I mean anywhere from a few milliseconds to several seconds).

These longer running operations are better performed asynchronously.

Asynchronous means the code is registered as a callback and will to execute at a later point in time. This means regular processing of code will continue until the callback is *called*.

## Common Asynchronous Callbacks

#### Browser
- timeouts
- DOM events (click, updates)
- ajax calls

#### Node
- timeouts
- file system access
- database calls
- network calls

## Event Loop Simplified (very high level)

```
   ┌───────────────────────────────────┐    \
┌─>│ execute code / register callbacks │     \
│  └─────────────────┬─────────────────┘      \
│      ┌─────────────┴─────────────┐           1 tick
│      │ invoke ready callbacks    │          /
│      └─────────────┬─────────────┘         /
└────────────────────┘                      /
```

## Anonymous functions

A function without a name.

Function declarations are not anonymous.

In this example, the name of the function is `add`:

```js
function add(a, b) {
  return a + b;
}
```

## Function expressions can be anonymous

In this example, even though we've assigned the function to the variable `add`, the function itself does not have a name and therefore it's anonymous.

```js
const add = function(a, b) {
  return a + b;
}
```

To make it a named function:

```js
const add = function adder(a, b) {
  return a + b;
}
```

## Arrow Functions are always anonymous

```js
const add = (a, b) => a + b
```

## We can define anonymous functions directly when required as a callback

Perhaps we have some number pairs:

```js
const numberPairs = [[1, 5],
                     [2, 6],
                     [3, 7],
                     [4, 8]]
```

Instead of:

```js
const add = (a, b) => {
  console.log(a + b)
}

numberPairs.forEach(add)
```

We could do this:

```js
numberPairs.forEach((a, b) => {
  console.log(a + b)
})
```

## `forEach` with index

Sometimes its useful to know the index with `forEach`

```js
*const nameValidator = (name, index) => {
* console.log(`Processing name #${index + 1}`)

  // -- snip --
}
```

code/name_validator/name_validator_with_index.js

## `forEach` with collection

Sometimes its useful to have access to the entire collection with `forEach`

```js
*const nameValidator = (name, index, names) => {

* if (index == names.length - 1)
*   console.log('AND FINALLY ...')

  // -- snip --
}
```

code/name_validator/name_validator_with_collection.js

## `forEach` documentation

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Syntax

## More iteration functions

forEach is perhaps the simplest, but javascript arrays have many useful iteration functions:

- map
- filter
- reduce
- sort
- every
- some

## `map`

Transform an array from one state to another.

## `map` example

Let's say we'd like to put our names in `<li>`> tags.

```js
const names = [
  'Margaret Hamilton',
  'Ada Lovelace',
  'Tim Berners-Lee',
  'Alan Turing',
  'Grace Hopper',
  'Yukihiro Matsumoto',
  'Dennis Ritchie',
  'Bill Gates',
  'Barbara Liskov'
]

const toLiTag = content => `<li>${content}</li>`

const liTags = names.map(toLiTag)

liTags.forEach(liTag => console.log(liTag))
```

## map names to valid / invalid

```js
const nameValidator = (name, index, names) => {

  // -- snip --

* return errors.length == 0 ? 'valid' : 'invalid'

}

// -- snip --

*console.log(names.map(name =>
* `${name}: ${nameValidator(name)}`
*))
```

## Why map?

Generally, code becomes simpler to reason about:

- less variable declarations

- less code

- less indirection

## Why map? (example)

This:

```js
const namesWithValidOrInvalid = []

const addNameToArrayWithValidOrInvalid = name => {
  namesWithValidOrInvalid.push(`${name}: ${nameValidator(name)}`)
}

names.forEach(addNameToArrayWithValidOrInvalid)

console.log(namesWithValidOrInvalid)
```

Becomes:

```js
const withValidOrInvalid = name => `${name}: ${nameValidator(name)}`
console.log(names.map(withValidOrInvalid))
```

## Map: index, whole collection,  documentation

Functions passed to `map` can receive and index and the whole collection being iterated over if desired (similar to `forEach`)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#Syntax

## `filter`

Select certain elements from a collection

```js
const nameValidator = (name, index, names) => {

  // -- snip --

* return errors.length == 0

}

// -- snip --

*console.log('Valid Names:')
*console.log(names.filter(nameValidator))
*console.log()
*console.log('Invalid Names:')
*console.log(names.filter(name => !nameValidator(name)))
```

## `sort`

Sorts array.

If `sort` is called without a function as an argument, then it will sort array by Unicode value of elements (i.e. usually alphabetically or numerically).

If `sort` is called with a comparison function as an argument, then it will sort array based on return value of function:

- below 0: the element will rank sooner in sort order
- 0: the element will not change order
- above 0: the element will rank later in sort order

## `sort` examples

```js
const names = [
  'Margaret Hamilton',
  'Ada Lovelace',
  'Tim Berners-Lee',
  'Alan Turing',
  'Grace Hopper',
  'Yukihiro Matsumoto',
  'Dennis Ritchie',
  'Bill Gates',
  'Barbara Liskov'
]

// Sort by length
names.sort((name1, name2) => name1.length - name2.length)

console.log(names)

// Sort by last name alphabetically
names.sort((name1, name2) => name1.split(' ')[1].charCodeAt(0) - name2.split(' ')[1].charCodeAt(0))

console.log(names)
```

## `every`

Returns true if function returns truthy for every element in array

```js
const names = [
  'Margaret Hamilton',
  'Ada Lovelace',
  'Tim Berners-Lee',
  'Mr. Alan Turing',
  'grace hopper',
  'Yukihiro- Matsumoto',
  'Dennis Ritchie-',
  'Bill Gate$',
  'Barbara Lis--kov'
]

const validNames = [
  'Margaret Hamilton',
  'Ada Lovelace',
  'Tim Berners-Lee',
  'Alan Turing',
  'Grace Hopper',
  'Yukihiro Matsumoto',
  'Dennis Ritchie',
  'Bill Gate',
  'Barbara Liskov'
]

console.log(names.every(nameValidator))      // false
console.log(validNames.every(nameValidator)) // true
```

## `some`

Similar to `every` but only needs one function return value to be true.

## `reduce`

Executes once for every element in array, returning result of each execution.

Summing an array is a typical use case:

```js
[1, 2, 3, 4].reduce((total, number) => number + total)
```

-
Interspersing words with commas:

```js
const addComma = (sentence, word) => `${sentence}, ${word}`
['red', 'blue', 'green', 'yellow'].reduce(addComma)
```

## Bonus knowledge: Using a debugger in node

1. Add the keyword `debugger` to where you'd like your breakpoint.

```js
// -- code --

debugger

// -- code --
```

2. Run your program with:

```sh
 node inspect your_program.js
```

3. The program will start. Type `cont` to continue.

4. The program will break at your `debugger`.

5. Type `repl` to enter the repl.

6. Type `CONTROL-c` to exit repl.
