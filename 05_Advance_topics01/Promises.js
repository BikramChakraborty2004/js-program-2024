// Promise one 
const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    // DB calls cryptography , network
    setTimeout(function(){
        console.log(("async task is completed"));
        resolve()
    },1000)
    
})
promiseOne.then(function(){
    console.log("promise consumed");  
})
// resolve() is directly triggered with .then()
//-----------------------------------------------------
// Promise two (short code without storing in a variable)
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 2 is triggered !!");
        resolve()
    },1000)
}).then(function(){
    console.log("promsise 2 consumed !!");
    
})
//-----------------------------------------------------
// Promise three (pass an object) VIA RESOLVE METHOD
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "BIKRAM", email: "b123@gmail.com"})
    },1000)
})
promiseThree.then(function(username){
    console.log(username.username)
})

//-----------------------------------------------------
// Promise Four (talk about then return a value store into nearest and rejects go to error)
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Raj", age: 12})
        }else{
            reject("Error: Something went wrong !!")
        }
    },1000)
})
.then(function(user){
    return user.username
})
.then(function(username){
    console.log(username);  
})
.catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("it is finally block");
})
//-----------------------------------------------------
// Promise Five

