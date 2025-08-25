/* Block Scope
Variables declare inside a {} block cannot be access from outside the block*/
for(let i=0;i<5;i++){
    console.log(i);  
}
// console.log(i); // Error because i has block scope 


/*Lexical scope 
A variable defined outside function can be accessible inside another 
function defined after the variable declaration
BUT OPPOSITE IS NOT TRUE  */
function outerfunc(){
    let x = 5;
    let y = 6;
    function innerfunct(){
        console.log(x);
        console.log(y);

    }
    innerfunct();
}
outerfunc();

// FUNCTION EXPRESSION => we store the value of the function into a variable
// the function has to be called using the variable name 
const sum = function(a,b){
    return a+b
}
s= sum(10,10)
console.log(s);




