//Javascript operators

///Assignment operator:-
//In javascript assignment operator (=) is used to assign a value to a variable.

//For example.

let x   =  10;  // 10 assign the value to x;
var y   = "Yash";  //Yash assign the value to a;
const z = x + y; // x + y assign the value to z; 


const firstNumber = 5;
const secondNumber = 5;
const result = firstNumber + secondNumber;
console.log(result); //10



///Addition operator:-
//The addition opearator (+) add numbers 

//For example:-
var c = 10;
var d = 10;
let b = c + d;  //Addition operator for adding numbers.
console.log(b);


//Multiply operator:-
///The multiplication operator (*) multiply numbers.

//For example:-
let m = 10;
let n = 20;

let o = m * n;
console.log(o);




//Types of Javascript operators:-

//There are different types of operators in javascript.

//1.Arithmetic  operators
//2.Assignment  operators
//3.Comparision operators
//4.Logical     operators
//4.Conditional operators
//5.Type        operators



///1.Arithmetic Operators:-

//Arithmetic operators are used to perform arithmetic operations.
// + Addition
// - Subtraction
// * Multiplication
// ** Exponentiation
// / Division
// % Modulus
// ++ Increment
// -- Decrement


//For example:-
//AN expression
let ten = 10;

let g = (100+50) * ten;
console.log(g);

//What is operators and operand?
//The numbers ( in an arithmetic operation ) is called operands. 
//The operation ( to be performed between numbers) is defined by an operator.


//For Example:-

100 + 100 // Operands  and operator

//Operator precedence:-

//For example:-

let operation = 100 + 2 * 3;  //Multiplication done first
console.log(operation);  //Here the value is 160
//Because in tradition school mathematics  multiplication done first ,however multiplication and division have highner precedence
//When using parentheses, the operations inside the parentheses are computed first

//For example:-
let i = (100 + 2) * 3;
console.log(i); //Here the value is 306




//2.Assignment Operators:-
//In javascript the assignment operators are used to assign a values to a variables.
//The addition  assignment operator (+=) adds a value to a variable.

//For example
let add = 10;
add += 5;
add = x + 5;
console.log(add); //The value is 15;

let minus = 10;
minus -= 5;
minus = x - 5;
console.log(minus); //The value is 5;

let multiply = 10;
multiply *= 5;
multiply = multiply * 5;
console.log(multiply);


///3.Comparision operators:-
//Javascript comparision operators:-

//Comparison operators are used to test True or False.

//What is comparision operators?
//In javascript comparision operators are used to determine the equality or differnce between the variables or values and also comparision operators are used in conditional statements to compare values.

// = = Equal to

// = = = Equal value and equal type

// ! = Not equal 

// ! = = Not equal value and type

// > Greater than

// < Less than

// < Greater than or equal to

// > Less than or eqaul to

// ? Ternary Operator

//lets take an example:-

let firstNum  = 1;
let secondNum = 2;
let resultNum1 = firstNum == secondNum;
console.log(resultNum1); //The answer is false ,because 1 is not equal to 2.if the operands are equal.

let thirdNum   =  3;
let fourthNum  =  3;
let resultNum2 =  thirdNum === fourthNum;
console.log(resultNum2); //The answer is false, because 3 is not equal to 4.if the operands are equal and same type.

let fifthNum = "5";
let sixthNum = 6;
let resultNum3  = fifthNum != sixthNum;
console.log(resultNum3); //The answer is True,because 5 is not equal to 6.

let seventhNum = 7;
let eigthNum = 8;
let resultNum4 = seventhNum !== eigthNum;
console.log(resultNum4); //The answer is True,because 7 is not equal to 8.if the operands are not equal and same type.


let ninthNum = 9;
let tenthNum = 10;
let resultNum5 = tenthNum > ninthNum;
console.log(resultNum5); //The answer is true , because 10 is greater than 9. if the left operand is greater than the right operand.


let resultNum6 = ninthNum < tenthNum;
console.log(resultNum6); //The answer is true here , because 9 is less than 10. if the left is operand is less than the right operand.



let eleventhNum = 11;
let twelvethNum = 11;
let resultNum7 = eleventhNum >= twelvethNum;
console.log(resultNum7); //The answer is true here , because  11 is not greater but equal to 11,if the left operand is greater than or equal to the right operand.


let thirteenNum = 13;
let fourteenNum = 14;
let resultNum8 = thirteenNum <= fourteenNum;
console.log(resultNum8); //The answer is true here, because 13 is less than 14 but no equal to 14, if the left operand is less than or equal to the right operand.



//What are logical operators?
//In javascript logical operators are used to determine the logic between variables or values.

// && LOgical   And

// || Logical   Or

// ! Logical    Not

//Lets take an example below :-
x = 5;  y = 6;  //If you assign a value to a variable that has not been declared,it will automatically become a GLOBAL variable.#

// && Logical And  
(x < 10 && y > 1);
//Now here the value of x is 5 and y is 6 and obviously the logic and 5 is less than 10 and  6 is greater than 1 True.

// || Logical   or
(x == 6 || y == 7);
//Now here the value of x is 5 and the value of y is 6 ,obviously the logic or  an operator is 5 is equal to 6 and 6 is equal to 7 which is FALSE right.
 

// ! Logical Not
!(x==y);
//Now here the value of x is 5 and the value of y is 6 , and obviously by using logical not operator their values are not equal hence first they are not logic based automatically so it will become a TRUE.



/// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------






// && Logical And (Example):-
//Let's say you're tasked with coming up with some code that will check if the currentTime variable is between 9 a.m. and 5 p.m. The code needs to console.log true if currentTime > 9 and if currentTime < 18

let currentTime = 10;
console.log(currentTime > 9 && currentTime < 18);

//so how does this code work?
// On the first line I set the currentTime variable and  i assign the value of 10 to it.
// On the second line I console the two comparisions currentTime > 9 and currentTime < 18 
// And i also used &&(Aperands) logical operator to comparisons the values
//Effectively my code is interpretted as the following:-

console.log(10 > 9 && 10 < 18);
// so here the value of currentTime is 10 and here 10 is obviously greater than 9 and 10 is less than 18
// the result is True , the comparison of 10 > 9 is : true and the comparison of 10 < 18 is : true.
// console.log(true && true );
//Both values are true
//This is my code works line by line

//So here the behavior of the logical && operator is it returns a single boolean value either true or false.
// It returns True if the both values on its right and its left are evaluated to true.
// It returns false in all the other instances.

//In other words
// console.log( true && true );  True
// console.log ( true && false);  False
// console..log ( false && true); False
// console.log (false && false ); False


// || Logical   or (Example)

// It is used when atleast one of the given comparison evaluates to true.
//Consider the following task: You need to write a program in JavaScript which will return true if the value of the currentTime variable is not between 9 and 17. Put differently, your code needs to console.log true if the value of the variable currentTime is either less than 9 or greater than 17.


let current_Time = 18;
console.log(current_Time < 9 || current_Time > 17);
//So how does this code work
//On the first line i set current_Time and i assign a value 18 to it.
//On the second line in console.log i compare the two values current_Time < 9 current_Time > 17.
// and i also use logical OR operator to compare the values
//Effectively my code is working and interpretting.
console.log(18 < 9 || 18 > 17);

// So as the following comparison 18 is less than 9 which is false and using OR || operator 18 is graeter than 17 which is true.
//console.log(False || True);
//So as a behavior of logical OR operator it evaluates to True when one of the given comparison is true.
//That means in simple words:-
//The logical OR operator are always evaluates to true , except when both sides evaluates to false.

// console.log(True || False) //True
// console.log(False|| True)  //True
// console.log(True || True)  //True
// console.log(False || False) //False

//Operator Precedence and Associavity:-
//1.Left to Right associavity
//2.Right it left associavity
let multiplyFirst = 2 * 3 + 6;  // Here multiplication done first. 2 * 3 = 6 6 + 6 = 12;
let   result_Get = multiplyFirst;
    console.log(result_Get); // 12


let coercionType = 1 + "2" ;   // String type 12.
console.log(typeof (coercionType)); //Note that the value of 1 is of the number data type, and the value of "2" is of the string data type, and so JavaScript will coerce the number 1 to a string of "1", and then concatenate it with the string of "2", so the result is a string of "12".

let jsQuiz = 5 > 4 > 3;

let givenResult = jsQuiz;
console.log(givenResult); //False

// So here in this given jsQuiz 5 is greater than 4 which is True and True is greater than 3 which is evaluated to false.



//Examples 
//Task 1: Using the logical && operator
//You are coding an RPG game, where each character has certain skill levels based on the value saved in their score.

//Create a variable named  score and set it to  8

//Use console.log() that includes the string "Mid-level skills:" and compares the score variable to above 0 and below 10 using the && operator

//The expected output in the console should be: "Mid-level skills: true"


let score = 8;
console.log("Mid-Level skills :",score > 0 && score < 10); // bOth eva;uates to True;



/*Task 2: Using the logical || operator
Imagine you are coding a video game. Currently, you’re about to code some snippets related to the game over condition.

You need to code a new variable named timeRemaining and set it to 0. You also need to code a new variable named energy and set it to 10.

Next, you should write a piece of code that could be used to determine if the game is over, based on whether either the value of the timeRemaining variable is 0 or the value of the energy variable is 0.

Complete the task using the following steps:

Declare the variable timeRemaining, and assign the value of 0 to it.

Declare the variable energy, and assign the value of 10 to it.

Console log the following parameters: "Game over: ", and timeRemaining == 0 || energy == 0

Note that the expected output in the console should be: "Game over: true" */
 let timeRemaining = 0;
 let energy = 10;
 console.log("Game-Over: ",timeRemaining === 0 || energy ===  10); //The value is True. 


 /*Task 4: Add numbers using the + operator
Console log the result of adding two numbers, 5 and 10, using the + operator.

Note: This task should be completed on a single line of code. The output in the console should be 15.*/

console.log(10+5);

/*Task 6: Use the += operator to accumulate values in a variable
Code a new variable and name it counter, assigning it to the value of 0.

On the next line, use the += operator to increase the value of counter by 5.

On the next line, use the += operator to increase the value of counter by 3.

On the fourth line, console log the value of the counter variable.

Note: The output value should be 8.*/

let counter = 0;
counter += 5;
counter += 3;
console.log(counter);
































//Adding javascript strings
//The + operator can be used to add(concatenate) strings.

//What is concatenation in javascript?
//In javascript when used on strings,(+) the addition operator is called concatenation operator.

//Lets take an example:-

let myName = "Yash";
let lastName = " Dandnaik";

let print = myName + lastName;
console.log("Hello " + print); //Hello Yash Dandnaik printed in the console


//The += Addition assignment operator is used to add(concatenate) strings
//Lets take an example:-

let autumn = "What a lovely day, ";
autumn += "Feeling great";  //autumn = autumn + "Feeling great";
console.log(autumn);  //What a lovely day, Feeling great
    



//Compairing different types:-

//Comparing data and different types in javascript may give an unexpected results:-

///When comparing a string to a number , javascript will convert the string to a number when doing the comparision.

31 > "21"; //When comparing a string to a number , javascript convert the string to a number when doing the comparision.

//An empty string converts to 0.

//A non-numeric string converts to NaN = not a number which is always false.


//Lets take an example below for better understanding:-

2 < 12; //Which is True.

2 > 12; //Which is False.

2 < "12"; //Which is True , because when comparing the string to a number ,javascript converts the string to a number when doing the comparision.

2 < "Yash"; //WHich is False,because when comparing a string to a number , javascript converts the string to a number hence in this example this is not a number which is Always NaN False





