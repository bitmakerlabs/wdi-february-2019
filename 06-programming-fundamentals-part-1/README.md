ur journey into programming begins with the fundamentals of any modern programming language: basic data types, variables and flow control. We'll be discussing the why these are fundamental topics to learn as a developer and how you can combine them to write your first programs.

## Agenda
* [What is programming?]
* [What is Python?]
* [How to run Python programs]
* [Basic Data Types]
* [Variables and assignment]
* [Control Structures]

## What is programming?
* Programming is the process of solving problems through code
* Code is a general term for a symbolic language that defines instructions that computers can understand and execute
* There are many types of programming languages that exist.  We're starting with the language Python.


### Low-level programming languages
* Generally interact directly with the hardware layer
* Requires the developer to manage the resources available on the physical computer through their code
* Useful when you have very limited resources or are custom embedded systems
* Examples: Assembly, C, C++

### High-level programming languages
* Details of the hardware are taken care of by the language so that developers can solve more general problems
* The language is more expressive, meaning it allows solutions to be written in terms of "what to accomplish" rather than describing each step of "how to accomplish it"
* Useful for creating solutions that work across multiple platforms and when the hardware is not the focus
* Examples: Python, Ruby, Java, JavaScript, PHP

## What is Python?
Python is a programming language. As a programming language, it has the following attributes:

* High-level (not low-level)
* Interpreted (not compiled)
* Created with readability in mind
* General purpose: popular for many types of tasks, including web development, scientific computing, numeric data processing, scripting, and even game development

## How To Run Python Programs
Running Python programs is pretty straightforward

From the command line:

```bash
$ python my_program_filename.py
```

### Python Shell
You can also run Python interactively by running just `python` from the commandline, without specifying a file.

Though this won't let you save your inputs, it's a great way to play around with your code.

## Basic Data Types
Data Types are the building blocks of programming. They let you define different kinds of data that all have their own special behaviours.

### Numbers
* Integers: whole numbers, e.g. `5`
* Floats: decimal numbers, e.g `5.5` or `0.2`
* Arithmetic: `+`, `-`, `*`, `/`, `%`
* Comparisons: `>`, `<`, `>=`, `<=`, `==`, `!=`

### String
* Let us store and manipulate text
* String interpolation
* String manipulation methods

### None

`None` in Python indicates the absence of a value.  It represents nothingness.

### Booleans
Booleans represent "true" or "false".  In Python these are capitalized: `True` and `False`. Every programming language has the concept of true or false at a fundamental level. You can combine true and false values using boolean logic or (logical operations). The two most common logical operators are `and` and `or`.

#### Truthiness and Falsiness
Beyond the keywords `True` and `False`, most languages have the concept of "truthiness" and "falsiness". These are non-Boolean values that within a language evaluate to true or false, respectively. Understand what evaluates to true and what evaluates to false in a language is usually one of the first things you'll want to know.

In Python, the only values that are falsey besides `False` are `None`, zero (`0`, `0.0`), the empty string (`""`), and empty lists, sets, or dictionaries (`[]`, `()`, `{}`) - but those last three touch on concepts we won't be talking about for a few more days.


### Converting between data types
There are many methods available on each kind of these objects that let you convert them from on type to another

* `str()`: to string
* `int()`: to integer
* `float()`: to float

```
int("1")
str(1)
float(1)
```
 
## Variables
Variables  allow us to symbolically name and refer to any data type. They are called variables because we can change the values inside, i.e. the values vary over time.

* meaningful names for variables

```
name = "Betty Maker"
number_of_weeks = 12
```

## Output and Input
`print()` allows us to display information in the terminal to the program's user.  

```
print("Hello world!")
```

`input()` allows us to receive information from the program's user.

```
print("What's your name?")
user_name = input()
print("Hello, {}".format(user_name))
```

## Control Structures
Control structures let us define different code paths based on certain conditions.

* if / elif / else

```
if day_of_week == "Tuesday":
  print("Happy Tuesday")
elif day_of_week == "Wednesday":
  print("Happy Wednesday")
  print("You're halfway through the week")
else:
  print("Goodbye!")
  print("Have a good day!")

```

Notice that every other line in the above example is indented.  One of the things that sets Python apart from most programming languages is that it is _white space sensitive_, meaning you _have_ to indent certain lines of code (such as the instructions inside `if`/`else` statements) in order for things to work.  This is different from in HTML and CSS, where we indent purely for readability.

* while

```
count = 10

while count >= 0:
  print(count)
  count = count + 1

```

## Comments

You can tell the Python interpreter to ignore lines of code by starting the line with a `#`.  Such a line is called a "comment", because it allows you to annotate your code.

```
# this is a comment
# Python will skip these lines
```


