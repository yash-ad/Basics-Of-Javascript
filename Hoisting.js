//Hoist means to raise or lift something in simple words:-

/*1.What is hoisting in javascript? //IMP in Js
Hoisting is javascripts behavior of moving decalrations of functions , variables and classes to the top of their scope, prior to executioin of the code however the concept of
hoisting in javascript is due to the compilation start that happens before javascript programs start executing, in fact hoisting is bascially relation to  the memory management
*/

//Lets take an example 1 (Value hoisting).
a = "Yash";
var a;
console.log(a); 


    season = "Summer";
let season;
console.log(season); //This will caught an error beacause  it cannot access before its intialization.



      universe  = "Nature";
const universe  = "Nature";
console.log(universe); //This will caught an error beacause  it cannot access before its intialization.


//Lets take an example 2.

var b;     //Undefined
b = "Dandnaik"; //"Dandnaik" because if you assign a value to a variable that has not been declared, it will automatically become a global variable.
console.log(b); //

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



//Example 1. :-
var d = 123;

console.log("The value of d is :" + d ," and f is : " + f);

var f = 567;


// So as you can see here the value of d is 123 and f is undefined because hoisting declarations not intializations f is declared before it is used. so here the value of f is we have got an undefined.
 

//Example 2.:-

var g = 55; //Intialize g
var h;      //Declare h
 
console.log(" The value of g is : " + g ," & the value of h is : " + h );

var h = 66; // Assign 66 to h
console.log(h);

//So here as well the value of g is 55 and the value of h is an undefined because of hoisting declarations at the top and not intializations, so h is declared before it is used.

//Hoisting is an unknown or overlooked behavior of javascript.
//To avoid bugs(errors),always declare the variable at the beginning of every scope

























