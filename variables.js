var   name = "Yashraj";
let   Name = "Yashraj";
const naMe = "Yashraj";
alert("My name is :" + name);
alert("My name is :" + Name);
alert("My name is :" + naMe);

//Javascript is a case Sensitive-Language
//The variables "name , Name , naMe are three different values"
//All javscript identifiers are case sensitive.


//Lets do some variables test exercise:-

var a = "3";
var b = "8";
//Lets say var a is a sand bucket and var b is water bucket so we need to exchange these materials,so all i have to do is i want an another bucket to fill these materials in it.
 
 var c = a;
 var a = b;
 var b = c;


console.log("The value of a is : " +  a ); //The output is a = 8;
console.log("The value of b is : " +  b );//The output is b = 3;

//Naming and naming convections for javascript variables

var myName = "Yash";
var lastName = "Dandnaik";
var my123 = 12345;
var myvar = "Variable";
var myname = "Yash";
var my_name = "Yash";
var my_name123$ = "Yash";
//camelcase,numbers and underscore and dollar sign is valid for naming convections in javascript


//Var Keyword variables









//Let Keyword variables

 //1.The let keyword was introduced in ES6(2015).
 //2.The let keyword cannot be redeclared.
 //3.The let keyword have a blockscope.

 //Before Ecmascript6(ES6) javascript had only two scopes which is Global scope and function scope.

 //Lets take an example of let keyword

 let a = "Yash"; // Declared let keyword with variable A with intialize the value is "Yash";
 let a = "Yashraj";//It is going to cause an error because let cannot be Redeclared

 console.log(a); //Yes it has been caused error beacuse of already declared;


 

 //What is Block-Scope?
 //Block-scope means that before Ecmascript6(ES6) 2015. 
 //Javascript had only two scopes which is global scope and function scope.
 //Javascript introduced two important keywords which is "Let" and "Const".
 //These two keywords "Let and  const " are blockscope in javascript.



 //variables declared inside a block {} cannot be accessed from outside the block.
 //For example

 
 {
    let x = 3;
    console.log(x); //Whenver  Let x = 3; and the console.log(x) the value will get beacause it is declared inside the block.
}

console.log(x);//It is going to cause an error  beacuse variable declared inside a block cannot be accessed from outside the block




//VAR Keyword :-
//However 
//Variables declared inside a block with VAR keyword can be accessed from outside the block.
// Variables declared with the VAR keyword cannot have blockscope beacause it was invented before block-scope ES6(2015)

//For Example
{

    var d = "String";
}
console.log(d); //Varaibles declared with the VAR keyword cannot have block-scope and yes it can be accessed from the outside of block





//Declare 
var x = 2;
//Redeclare 
var x = 3;


var lastName = "DandnaikOne";
console.log(lastName);
{

var lastName = "Dandnaik";
console.log(lastName)

}
var lastName = "DandnaikTwo";
console.log(lastName);

//Redeclaring Variables :-


//Redeclaring a variable using the "Var" keyword inside a block it also redeclare the variable outside the block because this is not a block scope.
//Redeclaring a variable using "Var" is allowed anywhere in javascript.

var y = "Yash";
console.log(y);

var y = "Yashraj"
console.log(y);

//Redeclaring a variable using var keyword is allowed anywhere in JS.





//LET Keyword :-


//Redeclaring a varible using the "Let" keyword inside a block cannot redeclare a varaible outside the block beacuse this includes only in Block-Scope.
//Redeclaring a variable using "Let" keyword int the same block is not allowed and in another block is allowed

let d = 1; //Allowed
let e = 2;

{
let f = 5; //Allowed
let g = 3; //Redeclaring a variable using "Let" keyword into the same block is not allowed and in another block is allowed

}

{

    let x = 2; //Allowed
    var x = 2;
}

//Redeclaring a variable using "Let" keyword  in another block is allowed

let v = 10;

{

  let v = 20;  
}


{
let v = 30;

}


//Hoisting

//Varaibles are defined with the var are hoisted to the top and can be intialized at any time.
//You can use the variable before it is declared.

carName = "Volvo";

var carName;


//Varaiable are defined with the let keyword are hoisted top of the block but cannot intialized

carName = "Tata";
let carName = "BMW";



let myName = "Yashraj";

{
 let myName = "Yashraj"
 console.log(myName);

}
let myName = "Yashraj"
console.log(myName);

//Const Keyword
//The const keyword was introduced in 2015
//Variables defined with the const cannot be reassigned and redeclared as well.
//Variables defione the const have block scope.