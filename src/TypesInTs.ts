//type annotation (explicitly tell typscript the type)

let age: number = 22;

function add(a: number, b: number): number {
  return a + b;
}

//type inference (typescript figures out type by itself)

let name = "something"; //inferred as string
let yearsofexperience = 0.5; // inferred as number

//dealing with types

// union

let trainSeat: "aisle" | "window" | "middle" = "aisle";

trainSeat = "window";

let apiRequest: "Pending" | "Success" | "Error" = "Pending";

apiRequest = "Success";

//any  (encompasses the type of every possible value)

const orders = ["199", "128", "911", "619"];

// let currentOrder : any; // here type is inferred to any or we can set explicitly any

let currentOrder: string | undefined;

for (let order of orders) {
  if (order === "619") {
    currentOrder = order;
    break;
  }
}

console.log(currentOrder); // here it is expected type would be string or undefined

//custom types

type BlackCoffee = { type: "Purist"; tasetLevel: "absoultely shit" };

type Chreamycoffee = { type: "Creamy"; tasteLevel: "Good Enough" };

type SomeFancyShit = {
  type: "Sugary";
  tasteLevel: "very sweet or is bad to health";
};

type Book = {
  name: string;
  author: string;
  published: Date;
};

let bookString = '{name:"","author:"",published:new Date()}';

let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject);

type Shape =
  | { kind: "Circle"; radius: number }
  | { kind: "square"; size: number };

//never represents values that should never occur and is commonly used for exhaustive type checking and functions that don’t return.

function area(shape: Shape) {
  switch (shape.kind) {
    case "Circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.size ** 2;

    default:
      const _exhaustive: never = shape; 
      return _exhaustive;
  }
}


//optional values in type

type superUser = {
  userName:string,
  iq:number;
  bio?:string;
}

const u1:superUser = { userName:"something",iq:911}
const u2: superUser = { userName: "whatever", iq: 911 ,bio:"ocassionally working brain"};


// read only 

type Config = {
  readonly appName:string,
  version:number
}

const cfg  : Config = {appName:"its time for africa",version:911}

// cfg.appName = "yooo" can't reassign it since it is read only