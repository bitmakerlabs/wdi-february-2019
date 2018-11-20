// Named function
function namedFunction() {
  console.log("Inside namedFunction");
}

// Functions with parameters
function functionWithParameters(param1, param2) {
  console.log('param1:', param1);
  console.log('param2:', param2);
}

// Anonymous function
var anonymous = function() {
  console.log("I'm anonymous");
};


// Arrow function
var arrowFunction = (param1, param2) => {
  console.log("Arrow function with params:", param1, param2);
  return param1 * 2;
}

// Arrow function (implicit return, multi-line)
var arrowFunctionImplicit = (param1, param2) => ( // <-- notice no curly braces
  param1 * 2
)
console.log(arrowFunctionImplicit(5))

// Arrow function (implicit return, one line)
var arrowFunctionOneLiner = (param1, param2) => param1 * 2 // <-- notice no parentheses either
console.log(arrowFunctionOneLiner(5))
