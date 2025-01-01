// falsy values: false, 0, "", null, undefined, NaN (Not a Number)
// truthy values: true, any number other than 0, any string other than an empty string  will be truthy.
let x = 0;
let y = "";
let z = null;
let w = undefined;
let v = NaN;

if (x) {
  console.log("x is truthy");
} else {
  console.log("x is falsy");
}

if (y) {
  console.log("y is truthy");
} else {
  console.log("y is falsy");
}

if (z) {
  console.log("z is truthy");
} else {
  console.log("z is falsy");
}

if (w) {
  console.log("w is truthy");
} else {
  console.log("w is falsy");
}

if (v) {
  console.log("v is truthy");
} else {
  console.log("v is falsy");
}

