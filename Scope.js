//There are 3 types of scopes in Javascript which is :-
///1.Block  scope

///2.Function scope

///3.Global scope

///Block-Scope:=

///What is Block-Scope in javascript?

//Before ES6(2015) javascript had only two scopes which is global scope and function scope.

//Thereafter javascript introduced two new important keywords which is Let and const.

//These two keywords let and const provide block-scope in javascript.

//Variables declared inside a {block} cannot be accessed from outside the outside the block
//For Example:-
{
 let x = 10;
 console.log(x); //Here it can be accessed inside a block.

}
//X cannot be accessed from outside the block


//Variables declared inside a block can be accessed from outside the block.
//For Example:-

{
   var x = 15; 
   console.log(x); 
}
console.log(x); //Here X can be accessed because VAR is not a block ,yes it cab ne accessed from outside the 

///Local-Scope(Function-scope):=

//Variables declared within inside a javascript function is becomes local to the function.

//For-Example:-

function myName()
{
 let my_Name = "Yash";
 console.log(my_Name);  // Code here can be used
}

console.log(my_Name);  // Code here cannot be used because its a local scope(function scope) variables declared within inside a javascript function becomes local to the function






