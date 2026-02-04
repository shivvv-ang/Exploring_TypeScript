function identity(value: any) {
  return value;
}

//so above function with whatever type you give  , but any kills type safety (any will give run time error)

//generic fix of above

function identitys<T>(value: T): T {
  return value;
}

identitys<number>(10); // T = number
identitys("hello"); // T = string (inferred)

//generics with array

function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

firstElement([1, 2, 3]);
firstElement(["a", "b"]);

//multiple generics

function pair<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

pair(1, "hello");

//generics with objects

function getId<T extends { id: string }>(obj: T) {
  return obj.id;
}

getId({ id: "911", name: "yo whats your emergency" });

//generics + interfaces

interface ApiResponse<T> {
  status: number;
  data: T;
}

const userResponse: ApiResponse<{ name: string }> = {
  status: 200,
  data: { name: "something" },
};

//generics with types

type Result<T = string> = {
  value: T;
};

const r1: Result = { value: "yo whats this shit this is madness" };

const r2: Result<Number> = { value: 47 };

//generics with classess

class Store<T> {
  private items: T[] = [];

  addItem(item: T) {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const numberStore = new Store<Number>();

numberStore.addItem(10);

const userStore = new Store<{ name: string }>();

userStore.addItem({ name: "young lord" });

//genercis + interfaces
interface Repository<T> {
  getAll(): T[];
  save(item: T): void;
}

interface User {}

class UserRepo implements Repository<User> {
  getAll() {
    return [];
  }
  save(user: User) {}
}

//GENERICS + CONSTRAINTS

function logLength<T extends { length: number }>(value: T) {
  console.log(value.length);
}

logLength("hello");
logLength([1, 2, 3]);