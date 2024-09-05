// Date

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myCreateDate = new Date(2023,0,27)  // YYYY - MM - DD
console.log(myCreateDate.toDateString());
 
myCreateDate = new Date(2023,0,27,2,9,8)// yyyy-mm-dd-hrs-mins-secs.
console.log(myCreateDate.toLocaleString());

let myCreateDate1 = new Date("01-14-2024"); // mm-dd-yyyy format
console.log(myCreateDate1.toLocaleString());


