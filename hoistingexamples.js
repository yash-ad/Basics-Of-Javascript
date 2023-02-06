
//When javascript runs a program there are two steps going behind the scenes which are compilation and Interpretation(Execution)of the code.
//First compilation step is JIT (Just-In-Time) Compiler, memory allocation in the variables and functions.
//Second is Interpretation step which is an execution of code, stored memory allocated in a values.
//This is how javascript engine works in two steps.
console.log(a); //Due to Compilation phase ,the value of a is not defined yet and its not execution.
                //Now is interpretation (Execution) phase ,Var a is exist in a memory which is by default undefined.
var a = 5;  // variable declaration in compilation process so the value of a is an undefined bu default before an execution part.
            //Interpretition phase now the value of a is assigned to 5.
console.log(a); // This is not a variable or function declaration in the compile phase.
//now in the interpretation(Execution) phase the value of a is 5.

console.log(b); //Undefined
var b = "Dandnaik"; //Dandnaik in a memory before executing
console.log(b);// Value = Dandnaik

//Function declaration example.
myName() //The value is "My name is Yash ";
function myName()
{
console.log("My name is Yash ");
}


//Functon expression example
//nature(); //Undefined it will caught an error because it cannot access before intialization.

//const nature = functon universe()
{

    //console.log("Earth");
};
//nature(); //It will also give an error because nature is not a function.

//Examples with let and const:-
//Compilation phase variables and functions allocate memory.
//Interpretation phase execution of the code the value to a stored memory.
console.log(c) // this will caught an error with let and const before intialization we cannot access them.
let c = "Cat"; // In a compilation phase C varaible allocated to memory by default Undefined before execution.
console.log(c);// The value of C is Cat.when program starts an execution phase or process.

//Hoisting examples for JS interview  :-

var a = 20; //Compilation phase undefined
//Executon phase 20 assigned to a;
var a; // already declared a which is an undefined in a memory
//this is not an execution.
console.log(a); //Not execution in compile phase
//IN an execution phase the value of a ina stored memory is 20 so the value of a is 20;

var v = 5050; //Undefined stored in a memory due to a compilation step.
//In an execution step variable v undefined value is assigned to 5050 stored in a memory.
var v;//already declared v in a memory which is an undefined. and not reassigning in an execution step.
console.log(v);//Not an execution in a compile step.
//In an executon step the value of variable v is 5050;

var d = "Dandnaik";
console.log(d); //Dandnaik

//Scope and hoisting examples
function fn(){
console.log(d); //Undefined
var d = 50; //Undefined in compile step
console.log(d); //50

}
fn();