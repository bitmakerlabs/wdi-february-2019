# Problem Solving and Computational Thinking
So far we've talk about how the fundamental build blocks of programming work, including variables, arrays, hashes, iteration, if/else statements, methods, arguments, and return values.  But knowing the *what* and *how* isn't the hard part - the hard part is knowing *why* and *when* to apply each of these concepts when you're presented with any given programming task.

##  Agenda
* What is computational thinking
  * Decomposition
  * Pattern matching
  * Abstraction
  * Algorithms
* Researching technical problems
* Pseudocode
* Problem solving thought process

### Computational Thinking (slides)

### Programming and emotional skills (slides)

- balance of humility - being open about what you don't know - and confidence - knowing you'll be able to figure it out

### Researching Technical Problems (slides)

1. google the error message, removing any parts that are specific to your problem (e.g. specific variable names)
2. describe the problem 

#### Preferred Sources
+ Stack Overflow
+ Official documentation

#### Other Sources
+ Other forums besides Stack Overflow
+ Tutorials
+ Blog posts

#### Stack Overflow
* date
* upvotes / green "accepted" check mark
* comments saying the solution helped
* skip the question and only go back to read it if you need the context to understand the answer or which parts of it are relevant/irrelevant to you
* go to official documentation to learn more about any methods mentioned

Talk through some examples of google searches and stack overflow hits.

####  Reading the Ruby Docs
```
method_name(argument, optional_argument=default_value) → return_value

- description of method

- examples of use
```

* most of the time, skip the description of method and focus on first couple of examples of use, then go to irb and try it yourself to verify you understand

Go through following examples:
* `String#length`
* `String#to_i`
* `String#chomp`

### Pseudocode (slides)


## Other advice about planning your code (slides)
* plan on paper first
* pseudocode!
* try to get to any solution that works first, then refactor the ok solution into a good solution
* if you're stuck, go through each of the parts of code you know so far (if, loop, method, new variable, etc) and ask yourself if any of them could help with this problem
* talk through the problem out loud
* break the problem down into smaller steps (decomposition!)
* think about similarities between this problem and problems you've solved in the past

# Break

Demonstrate example of coming up with a high level/english language plan, pseudocoding it, then translating it into Ruby
e.g. adding up all the numbers in an array

Together as a class, apply the same process to pig latin problem
