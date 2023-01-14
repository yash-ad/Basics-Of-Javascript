//Hoist means to raise or lift something in simple words:-

//1.What is hoisting in javascript? //IMP in Js
//Hoisting is javascripts by default behavior of moving decalrations at the top.

//Lets take an example 1.
a = "Yash";
var a;
console.log(a);


//Lets take an example 2.

var b;
b = "Dandnaik";
console.log(b);

//Hoisting is javascripts by default behavior of moving all declarations at the top of the current scope.



//Let and const Keywords:-



//Varaiables defined with the let and const keywords are hoisted to the top of the block, however it cannot be intialized.
 

//Let keyword example:-
let lastName = "Dandnaiks";

 console.log(lastName); //It will caught an error because before it is declared.

//Const keyword example:-
const myName = "Yashraj";
console.log(myName);//It will caught an error beacuse must be intialized beforeits declaration

//Javascript intializations are not hoisted:-
//Javascript only hoists declarations not intializations.
var x = 2; //Intialize X to the assigning value 2.
var y = 3; //Intialize Y to teh assigning value 3
console.log(x);
console.log(y);



//Example :-
var d = 123;

console.log("The value of d is :" + d ," and f is :" + f);

var f = 567;


// So as you can see her the value of d is 123 and f is undefined because hoisting declarations not intializations f is declared before it is used. so here the value of f is we have got an undefined.






























