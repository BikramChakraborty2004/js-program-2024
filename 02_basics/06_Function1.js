function printHello(){
    console.log("Hello this is the function !!"); 
    console.log("Good night"); // It is the scope of the function
    
}
printHello() // This is the execution of yhe function

function addTwoNumber(num1,num2){
    return num1+num2;
}
console.log(addTwoNumber(1,2));// print 3
console.log(addTwoNumber(3,"a")); // print 3a
console.log(addTwoNumber());// NaN
console.log(addTwoNumber(4,null));// null treated as zero

function loginUserMessage(username){
    return `${username} just logged in`;
}
console.log(loginUserMessage("Hitesh"));// Hitesh just logged in
console.log(loginUserMessage(""));// just logged in (For empty string)
console.log(loginUserMessage()) // undefined just logged in (For no argument)

// we can give a default value 
// function loginUserMessage(username = "Default value"){
//     return `${username} just logged in`;
//  }

// Spread or REST operator for variable length argument
function calculateCartPrice(...num1){
    return num1; // num1 is a array of arguments
}
console.log(calculateCartPrice(122,344,567,700));

function calculateCartPrice(val1,val2,...num1){

    console.log(val1, val2); // print 100 300
    console.log(num1); 
    // num1 is a array of remaining arguments [500,700]
}
calculateCartPrice(100,300,500,700);

// Pass Obejcts as argument
const obj = {
    name : "Bikram",
    age : 28
}
function handleObject(anyObj){
    console.log(`name is ${anyObj.name} and age is ${anyObj.age}`); 
}
handleObject(obj)

// Pass Obejcts as Array
const arr = [10,20,30,40,50]
function getSecondElement(myarr){
    return myarr[1]
}
console.log(getSecondElement(arr));








