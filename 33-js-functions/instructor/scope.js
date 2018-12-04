// scope examples
if (true) {
  var a = 5;
  let b = 6;
}

console.log(a); // 5. Works because defined with var.
console.log(b); // ReferenceError: b is not defined
