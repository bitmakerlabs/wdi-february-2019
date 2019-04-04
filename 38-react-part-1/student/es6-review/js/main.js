// A quick review of some useful ES6 bits for use with React

// ES5 variable
var student = { name: 'Tim Berners-Lee', grade: 89 };


// ES6 variables
let isAvailable = true;
const elOutput = document.getElementById('output');


//-------------------------------------------


// ES5 function with return
function timesTwo(num) {
    return num * 2;
}

// ES6 function with return
const timesThree = num => num * 3;


//-------------------------------------------


// ES5 function with multiple parameters
function printToElementES5(txt, ele) {
    if (txt == undefined)
        txt = 'Woops!';
    if (ele == undefined)
        ele = elOutput;

    ele.innerHTML += '<li>' + txt + '</li>';
}
printToElementES5();


// ES6 function (w/ default parameters)
const printToElementES6 = (txt = `Woops!`, ele = elOutput) => {
  ele.innerHTML += `<li>${txt}</li>`;
}
printToElementES6();


//-------------------------------------------


// ES6 destructuring
const {name, grade} = student;
const [first, second] = [student, { name: 'Grace Hopper',  grade: 93 } ];

// ES6 template literals
printToElementES6(`${name} recieved ${grade}%`);
printToElementES6(`${second.name} recieved ${second.grade}%`);

// ES6 spread operator
let students = [first, second];
students = [...students, { name: 'Alan Turing',  grade: 81 }];


//-------------------------------------------


var es5string = '<nav>' +
                '  <ul>' +
                '    <li><a href="#">Home</a></li>' +
                '    <li><a href="#">About</a></li>' +
                '    <li><a href="#">Contact</a></li>' +
                '  <ul>' +
                '<nav>';

var es6string = `<nav>
                   <ul>
                     <li><a href="#">Home</a></li>
                     <li><a href="#">About</a></li>
                     <li><a href="#">Contact</a></li>
                   <ul>
                 <nav>`;


//-------------------------------------------


// ES5 inline condition
if (isAvailable) printToElementES6(`I'm available!`);

// ES6 inline condition
{isAvailable && printToElementES6(`I'm available!`)}


//-------------------------------------------


// ES6 map
const countries = [`Canada`, `Japan`, `Peru`].map( (c, i) => `I love ${c}` );
printToElementES6( countries.join(' and ') );