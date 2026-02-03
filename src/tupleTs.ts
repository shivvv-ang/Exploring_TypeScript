// basic tuple

let user: [string, number];

user = ["string", 11];

// tuple with labels

let userkun: [name: string, age: number];

//optional

let response: [number, string?];

response = [200];

response = [200, "Ok"];

//tupele footgun (don't mutate tuple)

let tup: [string, number];

// tup.push("extra"); allowed 

