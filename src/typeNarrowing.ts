//type narrowing

//1 using typeof

function print(value: string | number) {
  if (typeof value === "string") {
    value.toUpperCase();
  } else {
    value.toFixed(2);
  }
}

//2 narrowing with if checks (truthy /  falsy)

function greet(name?: string) {
  if (name) {
    name.toUpperCase();
  }
}

//3 narrowing with in objects

type admin = { role: "Admin"; Permissions: string[] };
type user = { role: "User" };

function Authorize(person: admin | user) {
  if ("Permissions" in person) {
    person.Permissions; //Admin
  }
}

//4 narrowing with instace of (classess)

class Dog {
  bark(): string {
    return "bhaw bhaw";
  }
}

class Cat {
  meow(): string {
    return "meow meow meow";
  }
}

function sound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const dog = new Dog();

sound(dog); // this bound to call bark method

class Car {
  drive(): String {
    return "Vrommm vrommm";
  }
}

class Bike {
  drive(): string {
    return "dhoom dhoom machale tane ne ne ne";
  }
}

function runVehicle(vechicle: Car | Bike) {
  if (vechicle instanceof Car) {
    vechicle.drive(); //car
  } else {
    vechicle.drive(); // bike
  }
}

const astonmartin = new Car();

runVehicle(astonmartin); // vroom vrrom

//5 custom type guard

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function test(val: unknown) {
  if (isString(val)) {
    val.toUpperCase();
  } else {
    console.log("yo what are you doing bro");
  }
}

test(42);

type BlackCoffee = { type: "Purist"; tasetLevel: "absoultely shit" };

type Chreamycoffee = { type: "Creamy"; tasteLevel: "Good Enough" };

type SomeFancyShit = {
  type: "Sugary";
  tasteLevel: "very sweet or is bad to health";
};

type coffee = BlackCoffee | Chreamycoffee | SomeFancyShit;

function makeCoffee(order: coffee) {
  switch (order.type) {
    case "Purist":
      return "Black Shit Coffee";
    case "Creamy":
      return "Chreamy shit your about absrob";
    case "Sugary":
      return "die with sugar mostly likely";
  }
}


