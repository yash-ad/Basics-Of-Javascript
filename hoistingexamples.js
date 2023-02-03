
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
myName()
function myName()
{
console.log("My name is Yash ");
}


//Functon expression example
//nature(); //Undefined it will caught an error because it cannot access before intialization.

//const nature = functon()
{

    //console.log("Earth");
};
//nature(); //It will also give an error because nature is not a function.

//Examples with let and const:-
debugger;
//Compilation phase variables and fucntions allocate memory.
//Interpretation phase execution of the code the value to a stored memory.
console.log(c) // this will caught an error with let and const before intialization we cannot access them.
let c = "Cat"; // In a compilation phase C varaible allocated to memory by default Undefined before execution.
console.log(c);// The value of C is Cat.when program starts an execution phase or process.
