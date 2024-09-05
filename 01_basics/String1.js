const name = "Bikram"
const age = 30

// concaticate 2types
console.log("Hello my name is "+name+" and my age is "+30);
console.log(`Hello my name is ${name.toUpperCase()} and my age is ${age}`); // Modern way, Here we call some mehod like toUpperCase() with variable

// Using Object Creation
const str = new String("My String")
console.log(str.charAt(0));
console.log(str[0]);
console.log("Length "+str.length);
console.log(str.indexOf(' '));

const substr = str.substring(0,4)  // No negative parameter is allowed 
console.log(substr);

const anotherstr = str.slice(-8,5);   // Negative parameter is allowed 
console.log(anotherstr);

const name2 = "   Bikram .   ";
console.log(name2);
let nameWithoutSpace = name2.trim(); // It trimmed the white spaces from both of the end
console.log(nameWithoutSpace);





