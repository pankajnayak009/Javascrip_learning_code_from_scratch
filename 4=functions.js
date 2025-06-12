// function in javascript

// function functionName(parameter1, parameter2,) {
//     // Function body
//     // Code to be executed
//     return value; // Optional
// }

// function name(params) {
//   let funct_no_1 = 7000;
//  let funct_no_2 = 6;
//  let multiply_1 = funct_no_1*funct_no_2;
//   return value;
// }

function multiplyNumbers() {
    let funct_no_1 = 7000;
    let funct_no_2 = 6;
    let multiply_1 = funct_no_1 * funct_no_2;
    return multiply_1;
  }
  
  function multiplyNumbers_2_function(funct_no_1, funct_no_2) {
    // let multiply_1 = funct_no_1 + funct_no_2;
    // return multiply_1;
    return funct_no_1 + funct_no_2;
  }
  
  console.log(
    "This function only return all_ready multyplied A * B  Ans = " +
      multiplyNumbers()
  ); // Output: 42000
  console.log(
    "This function only return Passed parameters = " +
      multiplyNumbers_2_function(7000, 35000)
  );
  
  function Counting_loop_function() {
    console.log("Counting_loop_function from 1 to 10");
    for (let k = 1; k <= 10; k++) {
      console.log(k * 2);
    }
  }
  
  Counting_loop_function();
  // console.log("Counting_loop_function"+Counting_loop_function());
  
  function get_multyply_with_return(x, y) {
    return x * y;
  }
  console.log("get_multyply_with_return = " + get_multyply_with_return(7, 2));
  
  // Counting_loop_function();
  // console.log("Counting_loop_function"+Counting_loop_function());
  
  const get_function = function get_multyply_with_return(x, y) {
    return x * y;
  };
  // console.log("get_multyply_with_return = " + get_multyply_with_return( 7 , 2));
  
  let get = get_function(7, 10);
  console.log(
    "Create const variable put function  inside  the variable  (function name) > get_multyply_with_return = " +
      get
  );
  
  //  Arrow Function
  
  let get_Arrow = (x, y) => {
    return x * y;
  };
  
  let Arrow_result = get_Arrow(3250, 12);
  console.log("Arrow_Function_Result = " + Arrow_result);
  
  let name_1 = "Pankaj";
  
  for (let val of name_1) {
      console.log(val);
  }
  
  
  
  
  // console.log("This is ans of age "+age_);
  // var age_ = 22;
  
  
  
  
    const get_function_5 = function(age) {
      console.log("This is ans of age " + age);
    };
    
    get_function_5(25);
  