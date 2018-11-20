
// Numbers
const aNumber = 10;
const aFloatingPointNumber = 3.1415;
let amount = 10;
amount -= 1;
console.log(amount);

// Strings
const aString = 'this is a string';
const anotherString = "This is also a string";

// Booleans (True and False)
const aTrue = true;
const aFalse = false;

// undefined
let anUndefinedVariable;
let anUndefinedVariable = undefined; // exactly the same as previous line

// null
// This is an value that indicates something explicitly has no value
const nullValue = null;

// Arrays
const anEmptyArray = [];
const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const mixedArray = [1, 2, 'THREE', 'Four', false];

daysOfTheWeek[1]      // => Monday
daysOfTheWeek.length  // => 7

// Object Literals
const anObject = { key: "value", name: "description", "title": "body"};



// If Statement
function ifStatement() {
  let somethingTrue = true,
      somethingFalse = false,
      aString = "PROTOTYPE",
      result;

  if ( aString.length >= 9 ) {
    console.log("Condition A");
    result = aString.length;
  } else if ( aString.length < 9 ) {
    console.log("Condition B");
    result = "short"
  } else {
    console.log("DEFAULT CASE");
    result = null;
  }

  console.log("result: ", result);
}

function ternaryOperator() {
  const ten = 10,
      result = (ten >= 10) ? true : false;

  console.log("result:", result);
}


function switchStatement() {
  const fruit = "Banana";

  switch (fruit) {
      case "Apple":
          console.log("APPLE");
          break;
      case "Pear":
          console.log("PEAR");
          break;
      case "Banana":
      case "Costa Rican Banana":
      case "African Banana":
      case "Plantain":
          console.log("BANANA");
          break;
      default:
          console.log("DEFAULT");
          break;
  }

  console.log("Switch DONE.");
}


// For Loops
function simpleForLoop() {
  for (let i = 0; i < 9; i++) {
    console.log(i);
  };

  console.log("Done looping! i = " + i);
}

function forLoop() {
  const mystring = "some random string";
  let sum = 0;
  for (let i = 0; i < mystring.length; i++) {
    sum += i; // sum = sum + i;
    console.log(mystring[i]);
  };

  console.log("sum: ", sum);
}


// While Loop
function whileLoop() {
  let counter = 200;
  while (counter < 100) {
    counter++;
    console.log('Counter:', counter);
  }
}


// Do/While Loop
function doWhileLoop() {
  let atLeastOnce = false;

  do {
    console.log('atLeastOnce:', atLeastOnce);
    atLeastOnce = true;
  } while (atLeastOnce);

  console.log('atLeastOnce after loop', atLeastOnce);
}


function infiniteLoop() {
  let counter = 0;
  while (true) {
    counter++;
    console.log(counter);

    if (counter > 100) {
      console.log("Found a match!");
      break;
    }
  }

  console.log("Final counter:", counter);
}


// Named function
function namedFunction() {
  console.log("Inside namedFunction");
}

function sum(a, b) {
  return a + b;
}

// Functions with parameters
function functionWithParameters(param1, param2) {
  console.log('param1:', param1);
  console.log('param2:', param2);
}

// Anonymous function
const anonymous = function() {
  console.log("I'm anonymous");
};

// Callback

function pretty(func) {
  console.log("The year is:");
  func();
  console.log("You made it!");
}

function printYear() {
  const currentDate = new Date();
  console.log(currentDate.getFullYear());
}

printYear();

pretty(printYear); // named function example


pretty(function() { // anonymous function example
  console.log("How long did I take to run?");
});

// Arrow functions - see functions.js



// Scope examples -------------------

const test = 7;
console.log(test);
console.log(global.test);
function d() {
  test2 = 'cheese';
  const localToFunction = 'bob';
}
d();
console.log(global.test2);
console.log(global.localToFunction);


console.log("\n\n\n");

// Callbacks --------------------------


function takesLong() {
  for (let i=0; i<1000000000; i++) {
    // do nothing but take a while!
  }
  console.log("Took a while!");
}

takesLong();

function analyze(funcToTime) {
  console.log("\nAnalyzing...");
  console.time(funcToTime.name);
  funcToTime();
  console.timeEnd(funcToTime.name);
}

analyze(takesLong);

console.log("\n\n\n");


// forEach callback
const arr = [1, 2, 3];
arr.forEach(function(x) {
  console.log(x * 2);
});
arr.forEach((x) => {
  console.log(x * 2);
});

// map callback
const values = [3, 4, 5]
const newValues = values.map(num => num ** 2)
console.log(newValues);

// objects - accessing attributes

const places = {
  'toronto': 'big',
  'montreal': 'very artsy',
  'vancouver': 'relaxed'
};
console.log(places['toronto']); // the standard way
console.log(places.montreal); // much easier and more readable!
const place = "montreal";
console.log(places[place]); // the standard way - no way around it for dynamic access


// objects with functions - basic example
const y = 0;
const moves = {
  'F': function() { y += 1 },
  'B': function() { y -= 1 },
}

moves.F();
console.log(y);
moves.B();
console.log(y);



// objects with functions - basic Mars Rover implementation

const roverX = 0,
    roverY = 0,
    roverDirection = 'N',
    directions = ['N', 'E', 'S', 'W'];

function turnRover(amount) {
  let index = directions.indexOf(roverDirection);
  index = (index + amount) % 4;
  if (index < 0) index += 4;
  roverDirection = directions[index];
}

// use this function...
function moveRover(amount) {
  switch (roverDirection) {
    case "N": roverY += amount; break;
    case "E": roverX += amount; break;
    case "S": roverY -= amount; break;
    case "W": roverX -= amount; break;
  }
}

// OR this object!
roverMoves = {
  "N": function() { roverY += 1; },
  "E": function() { roverX += 1; },
  "S": function() { roverY -= 1; },
  "W": function() { roverX -= 1; },
}

// main function
const orders = {
  'L': function() { turnRover(-1) },
  'R': function() { turnRover(1) },
  'M': function() { moveRover(1) },
  // 'M': function() { roverMoves[roverDirection]() },
};

orders.L();
orders.L();
orders.M();
orders.R();
orders.M();
console.log(roverX, roverY, roverDirection);



// More complicated callbacks --------------------------

function addBun(addBurger, addToppings) {
  console.log('___---___'); // top bun
  if (addToppings) addToppings();
  addBurger();
  console.log('---___---'); // bottom bun

  serve();
}

function addCheeseBurger() {
  console.log('---------'); // cheese
  addPlainBurger();
}

function addPlainBurger() {
  console.log('========='); // patty
}

function addToppings() {
  console.log('   +++   '); // ketchup
  console.log('  =====  '); // tomato
}

function serve() {
  console.log("\n\n\n");
}



addBun(addCheeseBurger, addToppings);
addBun(addPlainBurger, addToppings);
addBun(addPlainBurger);

console.log("\n\n\n");
// asynchronous JS
function doStuff() {
  console.log("*************");
  console.log("Should print after");
}
setTimeout(doStuff, 500);
console.log("Print as soon as possible");
