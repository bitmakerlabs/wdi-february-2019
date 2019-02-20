As web developers, we aren’t interested in reinventing the wheel. Most problems we're tasked with solving have been solved by other people in the past, and our job is to find those pre-existing solutions and integrate them into our projects.  In this lesson we'll talk about how to decipher the documentation and how to go about working with unfamiliar code.

## Agenda
* Modules, packages, libraries
* `import` statements
* Python Standard Libraries
  * `datetime`
* 3rd Party Libraries
  * Evaluating
  * Installing
* Dependencies
  * Tools for managing them

## Modules

Modules contain Python code, such as classes and functions:

![modules contain Python code](http://interactivepython.org/runestone/static/CS152f17/_images/modreference.png)

You can think of a module as a Python file.

```
from turtle import Turtle
```

```
from turtle import Screen
```

or

```
from turtle import Screen, Turtle
```

## Packages

Packages are collections of modules.

## Libraries

The terms library and package can be used more or less interchangeably.

## Standard Library

The Python "standard library" refers to the modules that come pre-installed with the Python language (but which need to be `import`ed).  `random`, `datetime`, `math` are some commonly used examples.  [The full list is here](https://docs.python.org/3/py-modindex.html).

## 3rd Party Libraries

[PyPI](https://pypi.org/), also known as the Python Package Index, is the place to go to find Python packages/libraries built by the community.  These are _not_ part of the Python language the way the standard library is.  Some packages are used ubiquitously and others have been abandoned or exist in obscurity.

Pip is the tool we use for installing 3rd party Python packages.

```bash
pip install ______
```

## Virtual Environments

Generally, we like to install packages on a per-project basis, rather than globally across our whole computer.  Using `virtualenv` to create separate environments for each of our projects also allows us to have different _versions_ of a package across different projects.

`pyenv virtualenv ____`
`pyenv activate ____`


#### pyenv

`pyenv` is a tool for managing different versions of _the Python language_, but it also gives us commands for managing virtual environments, as you can see above.

## Importing your own code

Your own Python files and directories work the same way as other modules and packages:

![example module and package file structure](https://github.com/bitmakerlabs/screenshots/raw/master/modules.png)


From inside `main.py`:
```
from my_package import my_module
my_module.my_function() # "Hello"
```

OR

```
from my_package.my_module import my_function
my_function() # "Hello"
```

The above import statements will also work inside a Python shell run from `my_project_dir`.

## Writing our own Solution vs Using a Library

As developers, whenever we have a problem to solve, we should ask ourselves a few questions:
1. Has someone else already solved this problem?
1. Do I understand the problem well enough to solve it?
1. Is their solution appropriate for my use case?
1. Do I need to have direct control over the implementation of this solution?

The answers to these questions will inform whether or not we should use a library to solve the problem for us instead of implementing our own solution.


## Evaluating a Library

When trying to decide what library to use for a particular problem, we want to make sure that:
1. The library actually solves our problem in the way we want
1. That it is well maintained
1. That it is used by a reasonable number of users
1. That it is likely to be maintained in the future

* Check out PyPI, Github repo (if available), Libraries.io stats

## IPython Shell

`pip install ipython`

`pdef` to see function/method/constructor signature

`pdoc` for more detailed documentation info

