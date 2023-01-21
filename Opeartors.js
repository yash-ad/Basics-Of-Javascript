//Javascript operators

///Assignment operator:-
//In javascript assignment operator (=) is used to assign a value to a variable.

//For example.

let x   =  10;  // 10 assign the value to x;
var a   = "Yash";  //Yash assign the value to a;
const z = x + y; // x + y assign the value to z; 

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
let a = 10;

let g = (100+50) * a;
console.log(a);

//What is operators and operand?
//The numbers ( in an arithmetic operation ) is called operands. 
//The operation ( to be performed between numbers) is defined by an operator.


//For Example:-

100 + 100 // Operands  and operator

//Operator precedence:-

//For example:-

let y = 100 + 2 * 3;  //Multiplication done first
console.log(y);  //Here the value is 160
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
    

///3.Comparision operators:-
//Javascript comparision and logical operators:-

//Comparison and logical operators are used to test True or False.

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


//What are logical operators?
//In javascript logical operators are used to determine the logic between variables or values.

// && LOgical and

// || Logical   or

// ! Logical not

//Lets take an example below :-
 x = 5;  y = 6;  //If you assign a value to a variable that has not been declared,it will automatically become a GLOBAL variable.#

 // && Logical And  
 (x < 10 && y > 1);
 //Now here the value of x is 5 and y is 6 and obviously the logic and  is 5 less than 10 and  6 is greater than 1 True.

 // || Logical   or
 (x == 6 || y == 7);
 //Now here the value of x is 5 and the value of y is 6 ,obviously the logic or  an operator is 5 is equal to 6 and 6 is equal to 7 which is FALSE right.
  

// ! Logical Not
!(x==y);
//Now here the value of x is 5 and the value of y is 6 , and obviously by using logical not operator their values are not equal hence first they are not logic based automatically so it will become a TRUE.




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

2 < "Yash"; //WHich is False,because when comparinf a string to a number , javascript converts the string to a number hence in this example this is not a number which is Always NaN False





