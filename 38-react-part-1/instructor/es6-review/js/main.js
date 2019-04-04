// A quick review of some useful ES6 bits for use with React

// ES5 variable
var student = { name: 'Tim Berners-Lee', grade: 89 };


// ES6 variables
let isAvailable = true;
const elOutput = document.getElementById('output');

const anArray = [];
const anObject = {}

//-------------------------------------------


// ES5 function with return
function timesTwo(num) {
    return num * 2;
}

var someVar = timesTwo(5);

// ES6 function with return ("fat arrow")
const timesThree = num => num * 3;

let someOtherVar = timesThree(5);

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

// ES5
// var name = student.name;
// var grade = student.grade;

// ES6 destructuring
const {name, grade} = student;
const [first, second] = [student, { name: 'Grace Hopper',  grade: 93 } ];

const fruits = ['apples', 'bananas', 'grapes', 'cherries'];

const [fav1, fav2, ...theRest] = fruits;


elOutput.addEventListener('click', ({target}) => {
    console.log(`You clicked ` + target.innerHTML);
})


// ES6 template literals
printToElementES6(`${name} recieved ${grade / 100}%`);
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

const isOpen = false;
const es6string = `
    <nav>
        <ul class="${ (isOpen) ? `open` : `close` }">
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

let sure;
if (isAvailable)
    sure = `Yes!`;
else
    sure = `Noooo`;

sure = (isAvailable) ? `Yes!` : `Noooo`;

// {isAvailable && 

//     // `<nav>
//     //     <ul class="${ (isOpen) ? `open` : `close` }">
//     //         <li><a href="#">Home</a></li>
//     //         <li><a href="#">About</a></li>
//     //         <li><a href="#">Contact</a></li>
//     //     <ul>
//     // <nav>`
// }


//-------------------------------------------


// ES6 map
const countries = [`Canada`, `Japan`, `Peru`].map( (c, i) => `I love ${c}` );
printToElementES6( countries.join(' and ') );