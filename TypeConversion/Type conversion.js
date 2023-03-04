//1.Javascript considers 0 as false and non-zero numbers as true and if the true is converted to a number the answer is always 1.
//For Ex:-
//Boolean()

let a = 0;
a = Boolean(a);
console.log(a); //False for 0 number.

let b = 1;
b = Boolean(b);
console.log(b);//True for non-zero numbers.

let h = null;
h = Boolean(h);
console.log(h);

//Number()

let c = true;
c = Number(c);
console.log(c);// The answer is 1 for True.


let d = false;
d = Number(d);
console.log(d); //The answer is 0 for False

let emptyString = "";
emptyString = Number(emptyString);
console.log(emptyString); //The answer is 0;

let carName = "BMW";
carName = Number(carName);
console.log(carName); //The answer is (Nan Not a number).

let output = "31 98";
output = Number(output);
console.log(output); //The answer is (Nan Not a number).


let notaNumber = "John";
notaNumber = Number(notaNumber);
console.log(notaNumber); //The answer is (Nan Not a number).



//String()

let e = 123;
e = String(e);
console.log(e); //number converted to a string.123.


let f = null;
f = String(f);
console.log(f); //Null converted into a string.

let g = undefined;
g = String(g);
console.log(g); //Undefined converted into a string.



//The unary + operator can be used to convert a variable to a number:-

let y = "31";
let z = + y;
console.log(z); //The answer is 31 because of unary opearator + can be used to convert a variable to a number.


let x ="yash";
let s = + x;
console.log(s); //The answer is Nan because of unary operator if the variable is not converted it will still become a Nan(Not a number)

