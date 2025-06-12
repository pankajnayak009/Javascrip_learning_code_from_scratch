let obj = {
  
    Name : "Pankaj",
    age  : 24,
    salary : 8000,
    position :"Front-End Developer"
};
 

// updated obj
 
console.log("This is an object = ",obj);

// // cloning the object  with spread operator  {...}

// let clone = {...obj};
// clone.age = 25;
// clone.salary = 20000;
// clone.position = "Full-stack Developer";
 
// console.log("Cloning the object = ",clone);


// wer are using assign operator for cloning the obj


let obj_2 = {
  
    Name : "Pankaj Nayak",
    age  : 25,
    salary : 18000,
    position :"Full-stack Developer"

};
 
console.log(" 2nd real object = ",obj_2);
// assign operator for cloning
let assign_operator = ({},obj_2);

assign_operator.age = 26;
assign_operator.salary = 45000; 

console.log("Assign operator for cloning = ",assign_operator);



// Using for in loop for clonning the obj

let obj_3 = {
  
    Name: 'Pankaj ',
    age: 26,
    salary: 45000,
    position: 'Full-stack Developer'

};

// Cloning using iteration 

let updated_version = {};

for (const key in obj_3) {
     let  new_key = key;
     let  new_value = obj_3[key];
     updated_version[new_key] = new_value;
}

console.log("Creating New obj_3 ",obj_3);

updated_version.Name = "Pankaj Nayak";
updated_version.age = 26;
updated_version.salary = 100000;
updated_version.position = " Full-stack Developer + Freelancer + Trader";
console.log("Update obj_3 with for in loop   ", updated_version); 

let a = 10 















// Garbage Collector