// Arrays are resizable in js 
// arrays can store multiple values of  different data types 
const myarr = [0,1,2,3,4,5,6]
console.log(myarr[5]);
// array using constructor 
const arr2 = new Array(10,20,30,40,50);
console.log(arr2[4]);

/* Array methods */
// myarr.push(7); // add value

// myarr.pop();  // delete last value

//myarr.unshift(8) // add at first and shift remaining elements

// myarr.shift(); // remove the first element

// console.log(myarr.includes(6));  // true or false
// console.log(myarr.indexOf(2)); // return index only

// const newArr = myarr.join(); // it converts the arra into string format
//  console.log(newArr); // o/p ==>> 0,1,2,3,4,5,6

/* IMPORTANT SLICE VS SPLICE*/
console.log("Original array : ",myarr);
const myn1 = myarr.slice(2,5); // exclude last index and print [2,3,4]
console.log(myn1); // slice() do not effect original array
console.log("After slice method : ",myarr);

const myn2 = myarr.splice(2,1);//spilce(start index, number of element to delete) and print [2,3,4,5]
console.log(myn2); // splice() effect original array
console.log("After splice method : ",myarr); // so original array [0,1,6]





