//  Variables and Datatypes

// Arithmatic operator

let ist_Month_salary = 7000;
let IInd_M = 7000;
let Thrd_M = 7000;
let Fort_M = 7000;
let Fivt_M = 7000;
let six_M = 7000;

console.log("Addition of 6 Months salary");
let Six_months_collection =
  ist_Month_salary + IInd_M + Thrd_M + Fort_M + Fivt_M + six_M;
console.log(Six_months_collection);

let Monthly_salary = 7000;
let Total_month = 6;
let salary_Multiply = Monthly_salary * Total_month;
console.log("salary_Multiply");
console.log(salary_Multiply);

let No = 2;
let power = 3;
let calcuate = No ** power;
console.log("Calulation of power Operator **");
console.log(calcuate);

let module_no_Ist = 13;
let module_no_IInd = 2;
let check_modulation = module_no_Ist % module_no_IInd;
//console.log("Check a No is Modular No or not Note: If a no give  You a Reminder");
console.log(
  "Check if a number is a modular number or not. Note: A modular number gives you a remainder."
);
console.log(check_modulation);

// Comparison operator
// Operator	 Description	            Example	     Output
// ==	       Equal to	               5 == "5"	     true (checks value only)
// ===	    Strictly equal	         5 === "5"	  false (checks value & type)
// !=	       Not equal	               10 != 5	     true
// !==	    Strictly not equal	      10 !== "10"	  true
// >	       Greater than	            8 > 3	        true
// <	       Less than	               2 < 7	        true
// >=	       Greater than or equal to	5 >= 5	     true
// <=	       Less than or equal to	   3 <= 2	     false

let Programmer_A_Age = 23;
let Programmer_B_Age = 24;

let pankaj_salary = 7000;
let bhuppi_salary = 17000;

if (Programmer_A_Age == Programmer_B_Age) {
  console.log("Programmer_A_Age _23 ==  Programmer_B_Age_24 are  equal");
} else {
  console.log("Programmer_A_Age _23 ==  Programmer_B_Age_24 not equal");
}

if (pankaj_salary === bhuppi_salary) {
  console.log("The pankaj_salary_7000 === bhuppi_salary_20000 are  equal");
} else {
  console.log("The pankaj_salary_7000 === bhuppi_salary_17000 are   not equal");
}
// yhi par galti nikl di XD 
if (Programmer_A_Age >= Programmer_B_Age) {
  console.log("Programmer_A_Age _23 >= Programmer_B_Age_24 are  Grather_Than");
} else {
  console.log("Programmer_A_Age _23 >= Programmer_B_Age_24  not Grather_Than");
}
// change mat ker yar please
if (Programmer_A_Age <= Programmer_B_Age) {
  console.log("Programmer_A_Age _23 <= Programmer_B_Age_24 are  True");
} else {
  console.log("Programmer_A_Age _23 <= Programmer_B_Age_24   false");
}

if (Programmer_A_Age != Programmer_B_Age) {
  console.log(
    "Programmer_A_Age (23) is not equal to Programmer_B_Age (24) → Condition is True."
  );
} else {
  console.log(
    "Programmer_A_Age (23) is equal to Programmer_B_Age (24) → Condition is False."
  );
}

if (Programmer_A_Age !== Programmer_B_Age) {
  console.log(
    `Programmer_A_Age (${Programmer_A_Age}) is not equal to Programmer_B_Age (${Programmer_B_Age}) → Condition is True.`
  );
} else {
  console.log(
    `Programmer_A_Age (${Programmer_A_Age}) is equal to Programmer_B_Age (${Programmer_B_Age}) → Condition is False.`
  );
}

// Operator	 Description	                                           Example
// && AND)    Returns true if both conditions are true	          (5 > 3 && 10 > 5) // true
// ||(OR)     return if one vale are  true
// !(NOT)	  Reverses a Boolean value (true → false, false → true)	 !(5 > 3) // false

let age = 24;
let id = false;
let ouside_id = false;

if (age >= 18 && id) {
  console.log("you are veryfied student for  Go inside the party");
} else {
  console.log("Entry denied");
}

if (age >= 18 || id) {
  console.log("you are veryfied student for  Go inside the party");
} else {
  console.log("Entry denied");
}

let isRaining = true;

if (!isRaining) {
  console.log("You can go outside.");
} else {
  console.log("Stay inside, it's raining.");
}

// Ternary Operator (? :) in JavaScript

let Age_Block = 24;
let club_entry =
  Age_Block >= 18 ? "you can go indide the club" : "you are not allowed";
console.log(club_entry);

// List of Assignment Operators
// Operator	 Example   Equivalent To	   Description
//  =	       x = 10	  x = 10	            ssigns 10 to x
// +=	       x += 5	  x = x + 5	         Adds 5 to x
// -=	       x -= 3	  x = x - 3	         Subtracts 3 from x
// *=	       x *= 2	  x = x * 2	         Multiplies x by 2
// /=	       x /= 4	  x = x / 4	         Divides x by 4
// %=	       x %= 3	  x = x % 3	         Assigns remainder of x / 3 to x
// **=	    x **= 2	  x = x **2	         Raises x to the power of 2

// let  A = 42000;
// let  Months = 6;
// console.log(' This is your Monthly Salary as  a Front-End-Developer in Borntocode = '+A);

//  A+=7000;
//  console.log(' This is your Next Month Salary'+A);

//  A*= Months;
//  console.log('This is your 6 months Total Salary'+A);

//  A-= 35000;
//  console.log('Subtracted  6_mothbs_salary 42000 - 5_months_salary 35000 = ' + A +' Remaning Money');

//  A /= Months;
//  console.log('Divides A by 6'+ A);

let A = 42000;
let Months = 6;

A /= Months; // Divide A by 6
console.log("Divides A by 6: " + A);

let no_1 = 29;
let no_2 = 2;

no_1 %= no_2; // Assigns remainder of 25 / 2 to no_1
console.log("Assigns remainder of 25 / 2 to no_1: " + no_1);

let No_3 = 2;
let Check_power = 10;

No_3 **= Check_power;
console.log("Raises 2 to the power of 10 : = " + No_3);

// List of Bitwise Operators in JavaScript
// Operator	              Symbol	     Example (a = 5, b = 3)	 Binary Calculation	                      Result
// AND	                 &	        5 & 3	                   0101 & 0011 → 0001	                         1
// OR	                    `	        `	                        `5	                                        3`
// XOR	                 ^	        5 ^ 3	                   0101 ^ 0011 → 0110	                         6
// NOT	                 ~	        ~5	                     ~0101 → 1010 (Two's complement)	            -6
// Left Shift	           <<	        5 << 1	                   0101 << 1 → 1010	                            10
// Right Shift	           >>	        5 >> 1	                   0101 >> 1 → 0010	                             2
// Unsigned Right Shift	  >>>         -5 >>>                    1	Depends on system	                       Large positive
//                                                                                                           number

let Operand_1 = 5; // Binary: 0101
let Operand_2 = 3; // Binary: 0011

console.log("AND Operator (A & B): " + (Operand_1 & Operand_2));
console.log("OR Operator (A | B): " + (Operand_1 | Operand_2));
console.log("2's complement  Operator (~A ): " + ~0);

console.log("5*2 with   1 digit shift << :" + (5 << 1));
console.log("5*2*2 with 2 digit shift << :" + (5 << 2));

console.log("1 digit shift but lost << : " + (5 >> 1));
console.log("2 digit shift but lost << : " + (5 >> 2));

// Here’s a table summarizing conditional statements in JavaScript:

// Statement	             Description	                                     Example
// if	                      Executes code if the condition is true.	          if (x > 10) { console.log("Greater"); }
// if-else	                Executes one block if true, another if false.	    if (x > 10) { console.log("Greater"); } else { console.log("Smaller");}
// if-else if-else	       Checks multiple conditions sequentially.	          if (x > 10) { } else if (x == 10) { } else { }
// switch	                Matches a value against multiple cases.	          switch (day){ case 1: console.log("Monday"); break; }
//
// Ternary Operator (? :)	 Shorter syntax for if-else.	let result = (x > 10) ? "Greater" : "Smaller";

let Age = 24;

// if (Age >= 18) {
//   console.log("This is eligible for Vote : " + Age);
// } else {
//   console.log("This is not  eligible for Vote :" + Age);
// }