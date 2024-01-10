// console
// console.log(0,1,3,4,5);
// console.log("chien");
// const x =100;
// console.log(x);
// console.error('bi lo');
// console.warn('Warning');
// console.table({ name: 'Chien', email: 'chien@gmail.com' });
// console.group('test');
// console.log(x);
// console.error('Alert');
// console.warn('Warning');
// console.log("Xin chao");
// console.groupEnd();
// const styles = 'padding: 20px; background-color: white; color: red ;text-align: center;' ;
// console.log('%cHello World', styles);

//valiudata
// const name='chien';
// let ho ="Dinh";
// let age =10;
// console.log( "tuoi cua ban la " + age)
// console.log("ten cua ban la " + ho + "" + name)
// With let, we can declare a value without assigning a value
// let score;
// score = 1;
// console.log(score);

// if (true) {
//   score = score + 1;
// }

// console.log(score);

// const x = 100;

// We can not re-assign a const variable
// x = 200 // Will result in an error

// We can still manipulate arrays and objects using const
// const arr = [1, 2, 3, 4];
// arr.push(5);
// console.log(arr);

// const person = {
//   name: 'Brad',
// };
// person.name = 'John';
// person.email = 'brad@gmail.com';
// console.log(person);

// Declare multiple values at once
// let a =1, b, c;

// const d = 10,
//   e = 20,
//   f = 30;

// console.log(d);
// console.log(a);

// data
// String
// const firstName = 'Sara';
// // Number
// const age = 30;
// const temp = 98.9;
// // Boolean
// const hasKids = true;
// // Null
// const aptNumber = null;

// // Undefined
// // let score;
// const score = undefined;

// // Symbol
// const id = Symbol('id');

// // BigInt
// const n = 9007199254740991n;

// // Reference Types

// const numbers = [1, 2, 3, 4];

// const person = {
//   name: 'Brad',
// };
// function sayHello() {
//   console.log('Hello');
// }
// const output = sayHello;
// console.log(output, typeof output);
// More info on why typeof null == object

// Value is stored in the stack
// const name = 'John';
// const age = 30;

// // Reference is stored in the heap
// const person = {
//   name: 'Brad',
//   age: 40,
// };

// let newName = name;
// newName = 'Jonathan';

// let newPerson = person;
// newPerson.name = 'Bradley';

// console.log(name, newName); // John, Jonathan
// console.log(person, newPerson); // { name: 'Bradley', age: 40 }, { name: 'Bradley', age: 40 }

// let amount = 'hello';

// // Convert string to number
// amount = parseInt(amount);
// amount = +amount;
// amount = Number(amount);
// amount = amount.toString();
// amount = String(amount);
// // Convert string to decimal
// amount = parseFloat(amount);
// // Convert number to boolean
// amount = Boolean(amount);
// // Ways to get NaN
// console.log(Math.sqrt(-1));
// console.log(1 + NaN);
// console.log(undefined + undefined);
// console.log('foo' / 3);
// console.log(amount, typeof amount);
// //

// let x;

// x = 5 + 5;
// x = 5 - 5;
// x = 5 * 5;
// x = 5 / 5;
// x = 7 % 5;

// // Concatenation
// x = 'Hello' + ' ' + 'World';
// x = 2 == '2';

// // Equal to (Type and value)
// x = 2 === '2';

// // Not equal to (Just the value, not the type)
// x = 2 != '2';

// // Not equal to (Type and value)
// x = 2 !== 2;

// // Greater than and less than
// x = 10 > 5;
// x = 10 < 5;
// x = 10 <= 5;
// x = 10 >= 5;

// console.log(x);

//type-coercion
//  let x;

// // Coerced to a string
// x = 5 + '5';

// x = 5 + Number('5');

// // Coerced to a number
// x = 5 * '5';

// // null is coerced to 0 as it is a `falsy` value
// x = 5 + null;

// x = Number(null);

// x = Number(true);
// x = Number(false);

// // true is coerced to a 1
// x = 5 + true;

// // false is coerced to 0 (falsy)
// x = 5 + false;

// // Undefined is coerced to 0 (falsy)
// x = 5 + undefined;

// console.log(x, typeof x);
// let x;

// const name = 'John';
// const age = 31;

// // Concatenation
// x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// // Template Literals
// x = `Hello, my name is ${name} and I am ${age} years old`;
// // console.log(x)
// // String Properties and Methods

// // Creating a "string object" (JS does this automatically when using a propery or method on a primitive string)
// const s = new String('Hello World');

// x = typeof s;

// x = s.length;

// // Access value by key
// x = s[0];

// // Shows the prototype of the string object. Shows the properties and methods
// x = s.__proto__;

// // Change case
// x = s.toUpperCase();
// x = s.toLowerCase();

// // charAt() - returns the character at the specified index
// x = s.charAt(0);

// // indexOf - returns the index of the first occurrence of a specified value in a string
// x = s.indexOf('d');

// // substring() - search a string for a specified value
// x = s.substring(2, 5);
// x = s.substring(7);

// // slice() - extracts a part of a string and returns a new string
// x = s.slice(-11, -6);

// // trim() - remove whitespace from beginning and end of string
// x = '         Hello World';
// x = x.trim();

// // replace() - replace all instances of a string
// x = s.replace('World', 'John');

// // includes() - returns true if the string is found
// x = s.includes('Hell');

// // valueOf() - returns the primitive value of a variable
// x = s.valueOf();

// // split() - returns an array of strings
// x = s.split('');

// console.log(x);

// Create a new string called "myNewString" that holds the value of "Developer", using the lowercase value from "myString"
// const myString = 'developer';

// let myNewString;

// // Solution 1:
// myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// // Solution 2:
// myNewString = myString[0].toUpperCase() + myString.substring(1);
// // Solution 3:
// myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

// console.log(myNewString);

// let x;
// const num = new Number(5);
// // toString() - returns a string representation of the number
// x = num.toString();
// // To get the length
// x = num.toString().length;
// // toFixed() - returns a string representation of the number with a specified number of decimals
// x = num.toFixed(2);

// // toPrecision() - returns a number with the specified length
// x = num.toPrecision(3);

// // toExponential() -  convert a number to exponential notation and return its value as a string
// x = num.toExponential(2);

// // toLocaleString() - returns a string representation of the number, using the current locale
// x = num.toLocaleString('en-US');
// // valueOf - Get value
// x = num.valueOf();
// // The Number object itself has some properties and methods
// // Largest and smallest possible number
// x = Number.MAX_VALUE;
// x = Number.MIN_VALUE;
// console.log(x);
//
// let x;

// // Square root
// x = Math.sqrt(9);

// // Absolute value
// x = Math.abs(-5);

// // Round
// // x = Math.round(4.2);

// // // Round up
// // x = Math.ceil(4.2);

// // Round down
// x = Math.floor(4.9);

// // Exponent
// // x = Math.pow(2, 3);

// // // Minimum number
// // x = Math.min(4, 5, 3);

// // Maximum number
// x = Math.max(4, 5, 3);

// // Get a random number/decimal between 0 and 1
// x = Math.random();

// // Get a random number between 1 and 100
// x = Math.floor(Math.random() * 100 + 1);

// console.log(x);

// const x = Math.floor(Math.random() * 100 + 1);
// const y = Math.floor(Math.random() * 60 + 1);

// // Get the sum
// const sum = x + y;
// const sumOutput = `${x} + ${y} = ${sum}`;
// console.log(sumOutput);

// // Get the difference
// const diff = x - y;
// const diffOutput = `${x} - ${y} = ${diff}`;
// console.log(diffOutput);

// // Get the product
// const prod = x * y;
// const prodOutput = `${x} * ${y} = ${prod}`;
// console.log(prodOutput);

// // Get the quotient
// const quot = x / y;
// const quotOutput = `${x} / ${y} = ${quot}`;
// console.log(quotOutput);

// // Get the remainder
// const rm = x % y;
// const rmOutput = `${x} % ${y} = ${rm}`;
// console.log(rmOutput);

//
// let d;
// // Get today's date and time
// d = new Date();
// // Set to a string
// d = d.toString();
// // Get a specific date
// // Important: the month is 0-based, so 0 is January and 11 is December
// d = new Date(2021, 0, 10, 12, 30, 0);
// // Pass in a string
// d = new Date('2021-07-10T12:30:00');
// d = new Date('07/10/2021 12:30:00');
// d = new Date('2022-07-10');
// d = new Date('07-10-2022');

// // Get current timestamp
// d = Date.now();

// // Get the timestamp of a specific date
// d = new Date();
// d = d.getTime();
// d = d.valueOf();
// // Create a date from a timestamp
// d = new Date(1666962049745);
// // Convert from milliseconds to seconds
// d = Math.floor(Date.now() / 1000);
// console.log(d);

//
// let x;
// let d = new Date();

// Date methods

// x = d.toString();

// x = d.getTime();
// x = d.valueOf();

// x = d.getFullYear();

// x = d.getMonth();
// x = d.getMonth() + 1;

// x = d.getDate();

// x = d.getDay();

// x = d.getHours();

// x = d.getMinutes();

// x = d.getSeconds();

// x = d.getMilliseconds();

// x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

// // Intl.DateTimeFormat API (locale specific)
// x = Intl.DateTimeFormat("en-US").format(d);
// x = Intl.DateTimeFormat("en-GB").format(d);
// x = Intl.DateTimeFormat("default").format(d);

// x = Intl.DateTimeFormat("default", { month: "long" }).format(d);

// x = d.toLocaleString("default", { month: "short" });

// x = d.toLocaleString("default", {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
//   hour: "numeric",
//   minute: "numeric",
//   second: "numeric",
//   timeZone: "America/New_York",
// });

// console.log(x);
