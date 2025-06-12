




// class person {

//   age_5;
// }

// const  object = new  person();


// function_call_stack.js 

 function first(){

    console.log("Html");
    Second()
 }

 function Second(){

    console.log("CSS");
    Third()
 }

 function Third(){
    console.log("java_script");
 }

 first();   



//  I call a functing to retuen a function values 
  
function solve(number){
    
   return function (number){
      return number*number;
    }
     
  };
   let retun_fun = solve(5);
    let final_ans = retun_fun(10);

    console.log("I call a function to return a function = "+ final_ans );

// now we are using array with function 

 let arr  = [

   function(a,b){
     return a+b;
   },

   function (a,b){
    return a*b;
  },

  function(a,b){
    return a**b;
  },

 ]
  
 let call_index = arr[0];
 console.log("Now we are using array with function for sum = "+call_index(7000,35000));
 let call_index_2 = arr[1];
 console.log("Now we are using array with function for Multiply = "+call_index_2(7000,6));
 let call_index_3 = arr[2];
 console.log("Now we are using array with function for check Power = "+call_index_2(21,2));


//  Now we are using Object code with function 

let obj = {
  name : "pankaj",
  age  : 24,
  salary : 7000,
  position : "Front-End-Developer"
  ,
  Roadmap_of_Developer : (F_salary , month )=>{
     
    return F_salary * month;
    
  }
}

 console.log(obj.name);
 console.log(obj.age);
 console.log(obj.salary);
 console.log("This is the salary of 7000*6 = "+obj.Roadmap_of_Developer(7000,6)); 
 

