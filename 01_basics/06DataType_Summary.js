    /* NOTE */
/* According to Store the data and access the data Data types are categorised 
   into two parts one is Primitive and Another is Non-Premitive (Refference) Data Types */

// *** Primitive ***//
// There are 7 types of data types : String , Number , Boolean, null, undefined, Symbol, BigInt

//*** Non-Primitive or Refference Type ***//
// Array , Objects, Functions

/*  Primitive */
const score = 100; // As in JS We does not declare any datatype with the variable So, JS is the Dynamically Type Language
const s = 100.90  ;// Js has no float double int type ..only number type is has 

const id1 = Symbol('abc');
const id2 = Symbol('abc');
console.log(id1==id2);
console.log(typeof id1);


const n = 483739539474949845806n;  // for bigint write in last n
console.log(typeof n);

/* Non-Primitive or Refference Type */

const arr=[1,2,3,4,4];
for(i=0;i<arr.length;i++)
    console.log(arr[i]);
console.log(typeof n);    
let MyObj={
    name: "Bikram",
    age: 22,
}
console.log(MyObj.name);
console.log(MyObj.age);
console.log(typeof n);
let MyFunc = function(){
    console.log("Hello World");
    
}
console.log(typeof MyFunc);
