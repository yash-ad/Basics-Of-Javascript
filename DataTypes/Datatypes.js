let myName = "Yashraj"; //String datatype;
console.log("Hello I'm ",myName,", pleasure to meet you !");
console.log("The type of a is", typeof(myName));  //Type of is a function and to identify what type of datatype is.

let myBirth_date = 31; //Number datatype
console.log("My Birthdate is",myBirth_date,"st March");

let activeLifestyle = true; //Boolean Data-type
let sedentaryLifestyle = false;
console.log("The activelifestyle is ",activeLifestyle);
console.log("The sedentarylifestyle is ",sedentaryLifestyle);

let absenceValue = null; //Null data-type
console.log("The absence of value is ",absenceValue);

let UD; //Undefined data-type
console.log("The value of UD is ",UD);

let bigInt = 9552739727; //BigInt datatype
console.log("The value of BigInt is", bigInt ,"Which is a bunch of numbers.");

let symbol = "Id"; //Symbol Data-type
console.log("The value of a symbol is",symbol," , Which is an unique identifier.");

//Javascript types are dynamic which means that same variable can be used to hold different datatypes.
let x = 123;
x = 456;
x = "Yash";
x = false;
x = true;

//Note: When adding a number and a string ,Javascript will treat the number as a string.

let zodiacSign = 31 + "Aries";
console.log(zodiacSign);


let villa = "Deep" + 21;
console.log(villa);

//Javascript evaluates the expression from left to right:-

let solve = 10 + 10 + "Twenty";
console.log(solve);

let solveEx = "NumberTostring" + 30 + 10;
console.log(solveEx);

//Javascript[Arrays]
const bikes = ["Honda","Suzuki","Bmw","Tvs"];
console.log(bikes);

//Javascript {Objects}
const HarrierCar = {Color:"Black",Price:2500000,Year:"2022",Model:"Hybrid"};
console.log(HarrierCar);

