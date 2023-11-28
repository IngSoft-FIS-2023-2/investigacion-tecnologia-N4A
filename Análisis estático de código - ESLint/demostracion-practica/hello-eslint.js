// Variable 'x' is declared but never used
// Variable is never reassigned. Use 'const' instead
let x = 5;

// Missing semicolon at the end of the line
const y = 10

// Indentation is not consistent
function example() {
  let a = 1;
    let b = 2;
}

// Missing space after 'if'
if(true) {
  console.log("This should have a space after 'if'");
}

// Strings must use doublequote
const color = 'blue';

// Using 'var' instead of 'let' or 'const' (not a hard error but discouraged)
var someVariable = 42;

// Multiple variable declarations in a single statement
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let var1 = 1, var2 = 2, var3 = 3;