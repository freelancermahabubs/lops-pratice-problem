/*
--------------
-----------------
Array
---------------
----------------------------
*/

//  Type of Variable: This is Number Variable.
var phonePrice = 45;
console.log(typeof(phonePrice));
// Type of Variable: This is a String Variable.
var fruitsName = "Apple";
console.log(typeof(fruitsName));
// Type of Variable: This is a Boolean Variable.
let youHappy = true;
console.log(typeof(youHappy));
const a = {name: 'Mahaub', age: 25 }
console.log(typeof(a));

// Type of Object: This is a an Object Variable.
 let person = {
  name: "Mahaub",
  age: 25,

  address: {
    Street: 'Main St',
    City: 'Netrokona',
    state: 'My',
  },

  hobbies: ['reading', 'running']
 };
 console.log(typeof(person));

 // Type of Symbol: This is a Symbol Variable.

 let age = Symbol();
 let mahaub = {};
 console.log(typeof(age));

 mahaub[age] = 25;
 console.log(mahaub[age]);

 // Type of undefined: Thi is a an undefined Variable.

 let x;
 console.log(typeof(x));

// Type of Null: This is a Null Variable.
let nameM = null;
console.log(nameM);
// How to change or update the value of a variable.

let applPrice = 5;
// Change or update value.
applPrice += 10;

console.log(applPrice);
let oragePrice = 25;
// Change or update value.
oragePrice %= 2;
console.log(oragePrice);

// This is Primitive and non-primitive data types.

// Here's an example of using primitive data types:

let num = 42;
let name = "mahabub";
let isTrue = true;
let sym = Symbol ('example');
let undf;
let bigInt = 11111111255555550n;

//Here's an example of using primitive data types:

let personId = {name: 'Jhon', age: 25};
let number = [1, 2, 3, 4, 5];
// Naming convention of JavaScript Variables
let myVariable;
let userAge;
let _privateVariable;
let $specialvalue;
let myVariable_1;


//math operation javaScript

// This is an Addition
 let penPrice = 5;
 let paperPirce = 2;
 console.log(paperPirce + penPrice);
//  This is an Exponentiation
let priceofPaper = 2;
let b = 8;
let totalPrice = priceofPaper ** b;
console.log(totalPrice);
// Shorthand
// let numOfApple = 5;
// a++; // a = 6
// a--; // a = 5

// ParseInt.
let tablePrice1 = "42";
let tablePrice2 = "010";
let tablePrice3 = "0x10";
console.log(parseInt(tablePrice1));
console.log(parseInt(tablePrice2, 16));
// ParseFloat
let num1 = "3.14";
let num2 = "5.5e2";
let num3 = "-2.5";
console.log(parseFloat(num1));
console.log(parseFloat(num2));

// Declare an array in js
let fruits = ['apple', 'orange', 'Banana', 'cherry'];
console.log(fruits.length);
// 2 length -
// fruits.length = 2;
// console.log(fruits);

// add a new Element an array
fruits[4] = "Callames Erickets";
console.log(fruits);

// What is index in js 
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

// find the value of and Element by index 
let value = fruits[1];
console.log(value);

// change and Element by index
fruits[1] = 'mabrom';
console.log(fruits);
// ge the index of an Element by the value

let numbers = ["apple", "banana", "cherry"];
let man = numbers.indexOf("banana");
console.log(man);
let man2 = numbers.indexOf('orange');
console.log(man2);

// what does it mean when you get undefined while getting the value of an element by index js?

let man3 = numbers[4];
console.log(man3);

// How can you add an last element to an array
numbers.push("mangos");
console.log(numbers);

// how can you remove the last an element from array
numbers.pop();
console.log(numbers);

// add an element at the first position of an array
numbers.unshift('mahaub');
console.log(numbers);
// Remove the first element of an array.
numbers.shift();
console.log(numbers);











 
