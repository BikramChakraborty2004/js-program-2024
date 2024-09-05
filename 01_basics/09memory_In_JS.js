/* Stack ( For Primitive Type) , Heap (Non-Primitive) */

// If the variable occupied in stack then user get a copy of the variable
// But if the Object is stored in Heap then we get the reference ...if we change value of the object original value also be changed .

/* STACK */
let age1 = 23
let age2 = age1;
age2 = 210 ; // Here age2 will be modifoed but not age1 Because a copy of age1 store in age2 (There is no Adrres access)
console.log(age1);
console.log(age2);

/* HEAP */
let Obj1 = {
    age3: 12,
    str: "abc"
}
let Obj2 = Obj1
Obj2.age3 = 22;  // We change the value of Obj2 then Also changes occured in Obj1
console.log(Obj1.age3);
console.log(Obj2.age3);


