
# TypeScript Deep Dive

This repository documents my in-depth journey learning **TypeScript**, starting from core type system fundamentals to advanced concepts like **OOP, composition, and generics**.

The goal of this repo is not just syntax, but **understanding how and why TypeScript is designed the way it is**, and how to write **scalable, maintainable, real-world code**.

---

## Topics Covered

### Type System Fundamentals
- Type annotations vs type inference
- Primitive types (`string`, `number`, `boolean`)
- `any` vs `unknown`
- Union types (`|`)
- Intersection types (`&`)
- Custom type aliases
- Optional properties (`?`)
- Readonly properties
- `never` type and unreachable code

---

### Objects & Structural Typing
- Inline object typing
- Type aliases for objects
- Duck typing (structural typing)
- Nested object types
- Best practices for reusable types

```ts
type User = {
  name: string;
  age: number;
};
```

---

### Arrays, Tuples & Enums

- Typed arrays (`Type[]`)
- Union arrays
- Readonly arrays
- Tuples (fixed-length, ordered data)
- Optional tuple elements
- Enums vs union literal types
- String enums vs numeric enums

```ts
type ApiResponse = [status: number, data: string];
```

---

### Functions in TypeScript

- Function parameter typing
- Return types
- Optional and default parameters
- Void functions
- Function overload basics
- Arrow functions with proper `this` binding

---

### Interfaces

- Interfaces as contracts
- Interface vs type aliases
- Optional & readonly interface properties
- Structural typing with interfaces
- Using interfaces with objects and functions

```ts
interface Charger {
  plug: string;
  voltage: number;
}
```

---

### Classes & OOP in TypeScript

- Classes and constructors
- Public, private, protected modifiers
- Readonly properties
- Getters and setters
- Static members
- Inheritance (`extends`)
- Method overriding and `super`
- Polymorphism

---

### Abstract Classes vs Interfaces

- Interfaces for contracts
- Abstract classes for shared logic
- Why abstract classes cannot be instantiated
- When to use abstract classes vs interfaces

```ts
abstract class Vehicle {
  abstract move(): void;

  start() {
    console.log("Starting");
  }
}
```

---

### Composition over Inheritance

- Why inheritance can be dangerous
- HAS-A vs IS-A relationships
- Dependency injection using interfaces
- Swappable implementations
- Cleaner, more testable designs

```ts
class CheckoutService {
  constructor(private payment: PaymentMethod) {}

  checkout(amount: number) {
    this.payment.pay(amount);
  }
}
```

---

### Utility Types

- `Partial<T>` — make all properties optional
- `Required<T>` — enforce all properties
- `Pick<T, K>` — select specific fields
- `Omit<T, K>` — remove specific fields

```ts
type UpdateTransaction = Partial<Transaction>;
```

---

### Generics (Deep Dive)

- Generic functions
- Generic constraints (`extends`)
- Multiple generic parameters
- Generics with arrays and objects
- Generic interfaces
- Generic classes
- `keyof` with generics
- Real-world generic patterns (API responses, repositories)

```ts
function identity<T>(value: T): T {
  return value;
}
```

---

## Key Takeaways

- TypeScript is **structurally typed**, not nominal
- Interfaces disappear at runtime
- Abstract classes exist at runtime
- Composition leads to better design than deep inheritance
- Generics preserve type safety without sacrificing flexibility
- Utility types dramatically reduce boilerplate
- Prefer unions over enums in many frontend cases

---
