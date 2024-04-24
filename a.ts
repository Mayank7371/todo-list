const x: number = 1;
console.log(x);
const y: string = "mayank";
console.log(y);
// greeting to the user

function greet(myName: string) {
  console.log("Hello " + myName);
}
greet("mayank");
// return type specification
function sum(a: number, b: number): number {
  return a + b;
}
const answer = sum(1, 2);
console.log(answer);

//age verification
function isLegal(age: number): any {
  if (age >= 18) {
    return true;
  } else return false;
}
const answer = isLegal(21);
console.log(answer);
