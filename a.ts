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

function delayedCall(fn: () => void) {
  setTimeout(fn, 1000);
}
function fn() {
  console.log("this will be executed after 1 second");
}
delayedCall(fn);
//interface
interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function isLegal(user: User): boolean {
  if (user.age >= 18) {
    return true;
  } else {
    return false;
  }
}
const value = isLegal({
  firstName: "mayank",
  lastName: "kumar",
  age: 22,
});
console.log(value);

