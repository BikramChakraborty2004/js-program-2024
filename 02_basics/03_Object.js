//  Object create => Literal and Constructor

// singletone => If create using constructor
const mySym = Symbol("Key1");
// Creating a object in js
// this is one type of creating object using literal
const JsUser = {
    name:"Bikram", // Bydefault system treats keys as strings
    age : 23,       // here 23 is number but age is string 
    email : "bikram@gmail.com",
    "Full name" : "Bikram Chakraborty",
    [mySym]:"myKey1", // if want to Symbol as a key then use []
    lastLoginDays : ["Monday","saturday"]
};
console.log(JsUser.email);// o/p bikram@gmail.com
console.log(JsUser["email"]); // it will also print as keys are treated as string
// If manually write keys as string then it will not be accessed using dot operator. Like "Full name"
console.log(JsUser["Full name"]);
// also symbol key cannot be accesed using dot operator
console.log(JsUser[mySym]);

// // Update the value using = operator
JsUser.email = "bikramupdatemail@gmail.com";
console.log(JsUser);

// // Lock an object so that it cannot modify
//Object.freeze(JsUser); // It locks the object
JsUser.name="Rahul";
console.log(JsUser["name"]);

// In Js functins can be treated as variables 
// we add a function into JsUser object
JsUser.greeting = function () {
    console.log("Hello Js user");
}
console.log(JsUser.greeting());

// If i want to dynamically value print use backtick and $ sign
JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`); 
}
console.log(JsUser.greetingTwo());







