let date =  Date.now(); 
console.log(date);//returns the time in milisecond since 1/1/1970
console.log(Math.floor(date/1000)); // Display value in second


let dateobj = new Date(1970,0,1,5,30);
console.log(dateobj.getTime()); // value in milisecond

let newDate = new Date();
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time ... `

console.log(newDate.toLocaleString('default',{
    weekday:"long",
    timeZoneName:"long",
    day:"2-digit"
}))

