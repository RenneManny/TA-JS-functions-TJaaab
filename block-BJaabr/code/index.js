// -look at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(n) {
  return n + 1;
}

// - Write a Function Expression
let fun = function (n) {
  return n + 1;
};
// - Write an Arrow Function without curly brackets(if possible)
let fun1 = (n) => n + 1;
// - Write an Arrow Function with curly brackets
let fun2 = (n) => {
  return n + 1;
};
// - Execute the function
addOne(5);
fun(6);
fun1(7);
fun2(8);
// - Execute the function and store the return value in a variable.
let value = addOne();
// - What is the typeof returnValue
//The type of return value will be  Number.
/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function substractOne(n) {
  return n - 1;
}
// - Write a Function Expression
let sub = function (n) {
  return n - 1;
};
// - Write an Arrow Function without curly brackets(if possible)
let sub2 = (n) => n - 1;
// - Write an Arrow Function with curly brackets
let sub3 = (n) => {
  return n - 1;
};
// - Execute the function
substractOne(5);
sub(6);
sub2(7);
sub3(8);
// - Execute the function and store the return value in a variable.
let subb = substractOne(9);
// - What is the typeof returnValue
// The typeof value will be Number
/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(n1, n2) {
  return n1 + n2;
}
// - Write a Function Expression
let add = function (n1, n2) {
  return n1 + n2;
};
// - Write an Arrow Function without curly brackets(if possible)
let add1 = (n1, n2) => n1 + n2;
// - Write an Arrow Function with curly brackets
let add2 = (n1, n2) => {
  return n1 + n2;
};
// - Execute the function
addOne(50, 20);
add(30, 50);
add1(50, 60);
add2(70, 80);
// - Execute the function and store the return value in a variable
let val2 = addOne(80, 90);
// - What is the typeof returnValue
// The typeof val2 will be Number
/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(sqr) {
  return sqr * sqr;
}
// - Write a Function Expression
let sqr1 = function (sqr) {
  return sqr * sqr;
};
// - Write an Arrow Function without curly brackets(if possible)
let sqr2 = (sqr) => sqr * sqr;
// - Write an Arrow Function with curly brackets
let sqr3 = (sqr) => {
  sqr * sqr;
};
// - Execute the function
square(10);
sqr1(20);
sqr2(30);
sqr3(5);

// - Execute the function and store the return value in a variable
let val3 = square(100);
// - What is the typeof returnValue
// the type of return value will be Number
/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x, y) {
  if (x > y) {
    return true;
  } else {
    return false;
  }
}
// - Write a Function Expression
let greater = function (x, y) {
  if (x > y) {
    return true;
  } else {
    return false;
  }
};
// - Write an Arrow Function without curly brackets(if possible)
let greater1 = (x, y) => {
  if (x > y) {
    return true;
  } else {
    return false;
  }
};

// - Write an Arrow Function with curly brackets
let greater2 = (x, y) => {
  if (x > y) {
    return true;
  } else {
    return false;
  }
};
// - Execute the function
isGreater(20, 30);
greater1(70, 60);
greater2(90, 100);
// - Execute the function and store the return value in a variable
let val4 = isGreater(120, 140);
// - What is the typeof returnValue
// The typeof returnn value will be Boolean
/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(n) {
  if (n % 2 === 0) {
    return `Number is even`;
  } else {
    return `Number is odd`;
  }
}
// - Write an anonymous Function Expression
let odd = function (n) {
  if (n % 2 === 0) {
    return `Number is even`;
  } else {
    return `Number is odd`;
  }
};
// - Write an named Function Expression
let even = function oddOrEven(n) {
  if (n % 2 === 0) {
    return `Number is even`;
  } else {
    return `Number is odd`;
  }
};
// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let arrow = (n) => (n % 2 === 0 ? true : false);
// - Write an Arrow Function with curly brackets
let arrow2 = (n) => {
  if (n % 2 === 0) {
    return `Number is even`;
  } else {
    return `Number is odd`;
  }
};
// - Execute the function
oddOrEven(50);
odd(2);
even(1);
arrow(5);
arrow2(15);
// - Execute the function and store the return value in a variable
let val5 = oddOrEven(2);
// - What is the typeof returnValue
// the type of return value will be string
