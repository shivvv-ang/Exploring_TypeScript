//Basic function typing

//--> parameter must be typed and return must be explicit (considered as good practice)

function add(a: number, b: number): number {
  return a + b;
}

//arrow function

const multiply = (a: number, b: number): number => {
  return a * b;
};

//void functions

function log(msg: string): void {
  console.log(msg);
}

//optional parameters

// --> these paramters must be mentioned right after the required one's
function greet(name: string, age?: number) {
  console.log(name, age);
}

//age becomes number or  undefined

//default paramter

function sendDefaultMessage(name: string, message = "yo whats up buddy") {
  console.log(name, message);
}

//function type alias

type MathOperatoions = (a: number, b: number) => number;

const addition: MathOperatoions = (a, b) => a + b;

const subtraction: MathOperatoions = (a, b) => a - b;

//function as paramter (callback typing)

function process(a: number, b: number, fn: (x: number, y: number) => number) {
  return fn(a, b);
}

process(2, 3, (x, y) => x + y);

//returning object from a function

type User = {
  name: string;
  age: number;
};

function createUser(name: string, age: number): User {
  return { name, age };
}

//union types in functions

function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

//above is also what we call type narrowing

//never return type

function crash(): never {
  throw new Error("Go fuck the whole production");
}

function Infinite(): never {
  while (true) {}
}

// never -> function that never returns or run infinitely

//function overloading

function getData(id: number): number;
function getData(id: string): string;

function getData(id: number | string) {
  return id;
}

//rest paramters

function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}

//functions + interface

interface Logger {
  log(msg: string): void;
}

const logger: Logger = {
  log(msg) {
    console.log(msg);
  },
};