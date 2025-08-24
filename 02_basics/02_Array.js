// Array part 2 
/* MERGE TWO ARRAY*/
const arr1 = [1,2,3,4,5,6,7,8]
const arr2 = [10,20,26,40,56,43]

//arr1.push(arr2); // Here Array under array means nested array 
console.log(arr1[8]); // return the arr2 that is an element of arr1
console.log(arr1);
// USING CONCAT METHOD  ==> all elements of 2 arrays merged 
console.log(arr1.concat(arr2));

// USING SPREAD OPERATOR
const merge_arr = [...arr1,...arr2]
console.log(merge_arr);

/* flat() method If there is array of array ie. nested 
array present then it will simply converted into single array*/
const arr3 = [1,2,3,4,[5,6,7],8,5,7,[4,5,6,[6,6,8,3,2]]]
console.log(arr3.flat(Infinity));

// check whether it is array or not 
console.log(Array.isArray("Bikram")); // false because "bikram" is not an array

// convert into an array
console.log(Array.from("bikram")); // return an array

let a =100
let b = 200
let c = 300
console.log(Array.of(a,b,c));// return an array




