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






