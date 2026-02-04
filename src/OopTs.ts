//classes

class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi,I'm ${this.name} `;
  }
}

const u = new User("shila", 42);

u.greet();

// access modifier

//public (default) ->  public name:string;
//private (class only ) -> private password : string;
//protected (class + child  classess) protected id : string;

class Account {
  protected balance: number = 0;
}

class SavingAcount extends Account {
  addInterest() {
    this.balance += 30;
  }
}

//constructor shortcut (ts auto creates and assign properties)
class user {
  constructor(
    public name: string,
    private password: string,
    readonly id: string,
  ) {}
}

//read only immutability

class Config {
  readonly appName = "MyApp";
}

//getter and setters

class Usr {
  private _age = 0;

  getAge(): number {
    return this._age;
  }

  setAge(value: number) {
    if (value < 0) throw new Error("Invalid age");
    this._age = value;
  }
}

// inheritance

class Animal {
  move() {
    console.log("Moving ....");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

const zoro = new Dog();

zoro.bark();

// method over riding

class Janwar {
  speak() {
    console.log("say something bitch");
  }
}

class Bhaw extends Janwar {
  speak() {
    super.speak();
    console.log("Bark");
  }
}

// polymorphism

interface shape {
  area(): number;
}

class Circle implements shape {
  constructor(private r: number) {}
  area() {
    return Math.PI * this.r * this.r;
  }
}

class Square implements shape {
  constructor(private s: number) {}
  area(): number {
    return this.s * this.s;
  }
}

function printArea(shape: shape) {
  console.log(shape.area());
}

// interface

interface flyable {
  fly(): void;
}

class bird implements flyable {
  fly(): void {
    console.log("im flying");
  }
}

// abstract class

abstract class Pokemon {
  abstract move(): void;
  speak() {
    console.log("......");
  }
}

class pikashu extends Pokemon {
  move(): void {
    console.log("thunder shock");
  }
}

const pikspu = new pikashu();
pikspu.speak();
pikspu.move();

class MathUtil {
  static pi = 3.14;
  static square(n: number) {
    return n * n;
  }
}

// this in ts

class Button {
  label = "Click";

  handleClick = () => {
    console.log(this.label);
  };
}

//DUCK TYPING IN OOP
interface Logger {
  log(msg: string): void;
}

class ConsoleLogger {
  log(msg: string) {
    console.log(msg);
  }
}

//composition

interface PaymentMethod {
  pay(amount: number): void;
}

class StripePayment implements PaymentMethod {
  pay(amount: number) {
    console.log("Paid via Stripe", amount);
  }
}

class PaypalPayment implements PaymentMethod {
  pay(amount: number) {
    console.log("Paid via Paypal", amount);
  }
}

class CheckoutService {
  constructor(private payment: PaymentMethod) {}

  checkout(amount: number) {
    this.payment.pay(amount);
  }
}

const checkout = new CheckoutService(new StripePayment());
checkout.checkout(500);