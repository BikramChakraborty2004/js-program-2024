let Number1 = "33"
let Number2 = "33abc"
let Number3 = false

//These are NUMBER CONVERSION
let n1 = Number(Number1)
let n2 = Number(Number2) // => This should not be a number type but it is number type
let n3 = Number(Number3) // => value true converted into 1 and false 0

console.log(typeof(Number1))
console.log(typeof(n1))

console.log(typeof(Number2))
console.log(typeof(n2)) // Type is number

console.log(n2) // => value is NaN
console.log(n3) // => value is 0

// THIS IS BOOLEAN CONVERSION
let isOk = 10
let str = ""
let str1 = "Bikram"
let isOkBool = Boolean(isOk) // => Any NON-ZERO is Converted to true
let strBool = Boolean(str)   // => Any Empty String is Converted to false
let str1Bool = Boolean(str1) // => Any Non-Empty String is Converted to true

console.log(isOkBool)
console.log(strBool)
console.log(str1Bool)

// THIS IS String CONVERSION 
let int =10;
let bool =true;

let s1 = String(int)
let s2 = String(bool)

console.log(typeof(int))
console.log(typeof(bool))
console.log(typeof(s1))
console.log(typeof(s2))

console.log(s1)
console.log(s2)
