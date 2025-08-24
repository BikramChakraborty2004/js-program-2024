const tinderUser2 = {}  // Non Singletone object using literals 
//console.log(tinderUser2);

const tinderUser = new Object(); // Singletone object (using constructor)
tinderUser.id = "123abc"
tinderUser.name = 'sammy'
//console.log(tinderUser);

// Nested object
const regularUser = {
    email:"abc@gmail.com",
    fullname:{
        userfullname:{
            firstname : "Bikram",
            lastname : "Chakraborty"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname.userfullname.lastname);

// ** merge two object **
const obj1 = {1: "a", 2:'b'}
const obj2 = {3: 'c', 4:'d'}

const obj3 = {obj1, obj2}; 
// inside obj3, two objects present obj1, obj2
console.log(obj3);

// if i want that 2 object convert into 1 then
const obj4 = Object.assign(obj1,obj2); 
// Recommended syntax-->> Object.assign({},obj1,obj2)
console.log(obj4);
// Using spread operator
const obj5 = {...obj1,...obj2}
console.log(obj5);

// IMPORTANT CONCEPT (Array of object)
const users = [
    {
        name:"Bikram",
        age :22
    },
    {
         name:"Raj",
        age :25
    },
    {
         name:"Ramesh",
        age :45
    }
]
console.log(users[1].name);

console.log(tinderUser);
// Object.keys() return an String array of keys
console.log(Object.keys(tinderUser));
// Object.values() return an array of values 
console.log(Object.values(tinderUser)); 

// check whether a property present is not 
console.log(tinderUser.hasOwnProperty('name'));// True or false 
 









