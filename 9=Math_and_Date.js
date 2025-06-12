
console.log(Math.PI);
console.log("calculating the power of a**b = "+Math.pow(2,10));
console.log("calculating the max No = "+Math.max(10,20,30,40,50,60,70,80,90,100) );
console.log("calculating the Min No = "+Math.min(10,20,30,40,50,60,70,80,90,100) );
console.log("Calculating the random No = " + Math.random());


console.log("Calculating the round No = " + Math.round(4.5));

console.log("Rounds to the nearest integer Math.round(4.5)) = " + Math.round(4.5));

console.log("Rounds down to the nearest integer  Math.floor(4.9) = " + Math.floor(4.9));


console.log("Returns absolute value Math.abs(-5) = " + Math.abs(-5));



//The Date object allows you to work with dates and times.

let currentDate = new Date(); // Create a Date object
console.log("Returns the year = " + currentDate.getFullYear());

console.log("Returns the Month = " + currentDate.getMonth());

console.log("Returns the date = " + currentDate.getDate());

console.log("Returns the day = " + currentDate.getDay());

console.log("Returns the hours = " + currentDate.getHours());

console.log("Returns the minutes = " + currentDate.getMinutes());

console.log("Returns the full_year = " + currentDate.getFullYear());

console.log("Returns the HR, min , sec = " + currentDate.getHours() +":"+ currentDate.getMinutes()+":"+ currentDate.getSeconds());

console.log("Returns the toDateString()Returns a readable date = " + currentDate.toDateString());
console.log("toLocaleDateString()Returns a localized date string = " + currentDate.toLocaleDateString());





console.log("current date directly get by the date object = "+currentDate);

new Date() 

// we can get custom build data  
 let Dynamic = new Date("September 29 2000 10:50"); 
 console.log(Dynamic);
 console.log(Dynamic.getMonth());
 console.log(Dynamic.getDate());
 console.log(Dynamic.getFullYear());
 console.log(Dynamic.getHours()+":"+Dynamic.getMinutes());

 // now we can set custom build data inside 
 console.log(Dynamic.setMonth(9));
 console.log(Dynamic.setDate(29));
 console.log(Dynamic.setFullYear(2002));
 console.log(Dynamic.setHours(1)+":"+Dynamic.setMinutes(50));
 
 Dynamic.setMonth(10); 
Dynamic.setDate(29); 
Dynamic.setFullYear(2002); 
Dynamic.setHours(1); 
Dynamic.setMinutes(50); 

console.log("Updated Date:", Dynamic.toString());
console.log("Time:", Dynamic.getHours() + ":" + Dynamic.getMinutes()); 

 










