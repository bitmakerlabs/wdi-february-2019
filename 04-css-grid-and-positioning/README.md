Being able to create complex and robust layouts via CSS is crucial to creating modern user interfaces on the web. Today we'll learn how to use the css grid and position properties (along with many other supporting properties) to control where elements are rendered on the page.

# Agenda

#### Overview & Intro <small>(5 min)</small>

#### CSS Grid  <small>(40 min)</small>


#### Positioning <small>(30 min)</small>

- `static`
- `relative`
- `absolute`
- `fixed`
- `z-index`

## Grid

The CSS Grid is the most recent way to setup a layout, where an element (grid container) is set to treat its direct children elements (grid cells) as items placed within the grid's row and column structure (sort of like a flexible spreadsheet or table).

The 

grid was officially added to all of the major browsers in October of 2017, but has really only begun its industry-wide adoption in 2018. You can [read more about the addition of 

grid (as well as a number of _very_ useful links) here](http://alistapart.com/article/the-story-of-css-grid-from-its-creators) and in the resources below.

### Grid terminology

- Before considering the elements that live inside of our grid container, think about the grid itself and how it's made up:
    - A CSS grid, like a traditional table (think: spreadsheet), has 

cells (or "items")
    - If we were to draw those cells, we use a 

line (that includes around the outside of the whole grid)
    - We have then formed rows and columns, which we refer to individually as a 

track
    - Combining multiple cells together would give us an 

area

### Grid container

-

display: grid; or 

display: inline-grid;
-

grid-template-columns and/or 

grid-template-rows defines the measurements
- For example, to create a grid with four equal columns: 

.layout { display: grid; grid-template-columns: 25% 25% 25% 25%; }

### Measurements

- Relative values are best and easily expressed. Consider 

% or 

fr (fraction)
    - Repeating values can be easily handled using repeat([#], [MEASUREMENT]), like so: 

grid-template-columns: repeat(4, 1fr);

-

auto can be used to fill the maximum remaining space (often just using a single fraction will yield the same results)

### Grid items

- We manipulate the items within the grid by defining their 

start and 

end relative to the grid lines, allowing us to change how and where the cells appear
-

grid-column-start, 

grid-column-end, 

grid-row-start, 

grid-row-end
    - Can be shorted to 

grid-column and 

grid-row defining both start and end separated by a forward slash 

/. For example:
        -

grid-column: 1 / 4; (defines the start line as 1, ends at line 4)
        - Can also be written as: 

grid-column: 1 / span 3; (span three lines)

    - Note: If no end line value is declared, the item will span 1 track by default

### Additional usage

- Rather than defining grid-column and grid-row, items can be moved and stretched within the grid by defining a 

grid-area (

 / 

/ 

/ 

).
    - For example, 

grid-area: 1 / 1 / 3 / 4; spans two rows and three columns, starting in the top left corner of the grid

- A block item will take up an entire cell's height and width _(even if it's an inline element!)_ because it is set to 

align-self: stretch; and 

justify-self: stretch; by default.
    - Align an item vertically with a cell using 

align-self, horizontally using 

justify-self, by setting the values to any of 

start, 

end, or 

center
    - Both can be set to the same value in one declaration using 

place-self
    -

align-items, 

justify-items, 

place-items can do the same as above for _all cells_ when applied to the parent

- Applying 

grid-gap to a grid parent places the specified gap space between the cells (but not on the outside)
    -

grid-column-gap and 

grid-row-gap can be applied as well provide different values for rows and columns

- Rather than using line numbers, you can define your own custom names for lines (like an alias).
    - For example, in the parent: 

grid-template-columns: [a] 33.33% [b] 33.33% [c] 33.33% [d];
    - Then for usage in the cell: 

grid-column: a / c; (means span from the first line to the third)

### Alternative Layouts Techniques

- In the early days of the web we used 

table elements with 

&lt;tr&gt; (rows) that contained 

&lt;td&gt; ("table data" or cells - the columns, effectively).
    - Cons: Lots of extra HTML to manage, non-semantic (tables are for data, not layouts!), not at all flexible, difficult/impossible to create irregular layouts

- Next we used 

float, which can be set to 

left or 

right (

none is the default)
    - Still used heavily to this day. Can achieve almost all layouts, but does require some hacking (see: 

.clearfix or 

clear:both;) and still not as robust or flexible as grid.

- Creating non-static layouts using 

position: absolute.
    - Very complex and if you're not careful, can easily become a mess of overlapping content and sometimes unbeknownst to the developer until it's discovered by a user with an obscure screen resolution.

-

display:flex, definitely the best secondary option.
    - Also quite new, flex can be used seamlessly with grid. Often grid will set the major areas of the page, and flex will be used within the grid cells. Learn more here: [https://css-tricks.com/css-grid-replace-flexbox/](https://css-tricks.com/css-grid-replace-flexbox/)
    - A great way to learn and practice flex: [http://flexboxfroggy.com/](http://flexboxfroggy.com/)


# Positioning

## Lesson Working Files

[Positioning Lesson Working File](positioning/index.html)

## `position: static;`

- by default, all elements are positioned as static

- the `top`, `bottom`, `right`, and `left` properties have no effect on statically positioned elements

- we usually don't explicitly position something as static, as it's the default

## `position: relative;`
- creates a positioning context around the element

- you can see this context using the chrome dev tools

- instructs the element to obey the `top`, `bottom`, `right`, and `left` properties

- the `top`, `bottom`, `right`, and `left` properties accept the various CSS units: `px`, `em`, `%`

- the `top`, `bottom`, `right`, and `left` properties accept negative numbers

- usually we don't specify the `top`, `bottom`, `right`, and `left` for `position: relative`, but rather we use `position: relative` when we want to create a context for inner `absolute` elements to be positioned

## `position: absolute;`

- takes the element out of the regular html flow, and positions according to the nearest parent contained that is positioned as `relative`, `absolute` or `fixed`

- instructs the element to obey the `top`, `bottom`, `right`, and `left` properties

## `position: fixed;`

- like `position: absolute` but context is never parent element but rather is always the browser window

- fixed position elements on the page will remain as other elements scroll by

## `z-index`

- controls z-axis (front to back)

- used for stacking elements on top of other elements

- natural `z-index` is order of elements in document

- the higher the `z-index`, the closer to the top of the stack it is

- default `z-index` for elements is `0`

- elements with `z-index` set are contained within parent elements that have `z-index` set

- elements must be positioned with `relative`, `absolute` or `fixed` or else a `z-index` property will be ignored

- `z-index` accepts negative numbers, although those can be difficult to work with


# Recap and Further Resources

## CSS Grid Resources
-[Complete Guide to CSS grid](https://css-tricks.com/snippets/css/complete-guide-grid/) (documentation)
-[MDN: CSS grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) (documentation)
-[Grid By example](https://gridbyexample.com/learn//) (documentation)
-[Video Tutorials](https://www.youtube.com/channel/UC7TizprGknbDalbHplROtag) (video tutorial)


## Positioning Resources

- [MDN: position](https://developer.mozilla.org/en/docs/Web/CSS/position) (documentation)
- [Learn CSS Layout: Position](http://learnlayout.com/position.html) (tutorial)
- [CSS Positioning 101](http://alistapart.com/article/css-positioning-101) (tutorial)

## Bonus Resource

- [Shae Howe Positioning Content](http://learn.shayhowe.com/html-css/positioning-content/) (tutorial)
