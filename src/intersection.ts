//& (intersection)

//An intersection type combines multiple types into one, requiring all properties from each type to be present.

type sauces = { sauce: string };
type addon = { additionalStuff: string };

type meal = sauces & addon;

const stuff: meal = {
  sauce: "",
  additionalStuff: "",
};
