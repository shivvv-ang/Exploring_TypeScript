//basic arrays

//type []

let nums: number[] = [1, 2, 3, 4, 5];

let arr: string[] = ["a", "aa", "bb", "cccc"];

let A: Array<string> = ["yooo", "yoooooo"];

// array of objects

type User = {
  id: string;
  age: number;
};

const user: User[] = [
  { id: "u1", age: 11 },
  { id: "u1", age: 12 },
];

//union arrays

let mixed: (string | number)[] = [1, "two", 3];

// read only

const scores: readonly number[] = [1, 2, 3, 5, 9, 11];


//auto type inference

const prices = [10, 20, 30];

prices.map((p) => p * 2); // p is number
prices.filter((p) => p > 15);