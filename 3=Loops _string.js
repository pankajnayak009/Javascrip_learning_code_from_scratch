let button = 6;

if (button == 1) {
  console.log(" 1  glass water  ");
} else if (button == 2) {
  console.log(" Meditation and  Excercise ");
} else if (button == 3) {
  console.log(" Take a Bath with Cold Shower ");
} else if (button == 4) {
  console.log(" World's Healthy Breakfast ");
} else if (button == 5) {
  console.log(" Deep_work 24 / 7 Hours ");
} else if (button == 6) {
  if (Age >= 18) {
    console.log("This is eligible for Vote age = " + Age);
  } else {
    console.log("This is not  eligible for Vote age = " + Age);
  }
} else {
  console.log("This no is not valid");
}

// let day = 1;
// switch (day) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Invalid day");
//     break;
// }

for (let day = 1; day <= 7; day++) {
  // if (day == 1) {
  //   continue; // Skips case 3 (Tuesday) and moves to the next iteration
  // }

  switch (day) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday"); // This will be skipped because of continue
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;
    default:
      console.log("Invalid day");
      break;
  }
}

//   Loops and string
// for loop
console.log("we are using For Loop");
for (let i = 1; i <= 10; i++) {
  console.log(i + " Pankaj Nayak ");
}

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// let i = 1;
// for (let i = 0; i <= 10; i++) {

//   if (i == 6) {
//       // continue;
//       break;
//   } else {

//     console.log(i);
//   }
// }

// While Loop
console.log("we are using while loop");
let w = 1;
while (w <= 10) {
  console.log(w + " while loop");
  //  console.log(x + ' DO while loop');
  w++;
}

// console.log('Now we are using DO while loop') ;
// let x = 1
// do {
//    console.log( [x]+'DO while loop');
// } while (x <= 10);

console.log("Now we are using DO while loop");

let x = 1;
do {
  console.log(x + " DO while loop");
  x++; // Increment x to avoid infinite loop
} while (x <= 10);


// Loops for_each , for_in, for_of

let arr_12 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

arr_12.forEach((value, index) => {
  // console.log("Number :",value ,"index",index);
  console.log("index", index, "Number :", value);

});

// for in loop 

console.log("This is a Data + Function, which makes an Object!");

let obj = {
  Name: "pankaj",
  age: 24,
  gender: "Male",
  salary: 20000,
  get_function: function () {
    console.log("This is my first function inside the obj");
  }
};

// Looping through object properties
console.log("Looping through object properties")
for (let key in obj) {
  console.log(key, ":", obj[key]);
}

// Calling the function inside the object
obj.get_function();
















// Now we are using String for practice

console.log("Now we are using String for practice");

let name = `pankaj nayak is a frontend developer 
in Born to code`;
console.log(name);

let Lang_1 = "Hindi ";
let Lang_2 = "English";

let Ans = Lang_1 + Lang_2;
console.log(" Sum of Two String : = " + Ans);

console.log(
  "Returns the length of a string Two String (Hindi English) = " + Ans.length
);
console.log(
  "Converts string to uppercase Two String : (Hindi English) = " +
    Ans.toUpperCase()
);
console.log(
  "Converts string to Lowercase Two String : (Hindi English) = " +
    Ans.toLowerCase()
);
console.log(
  "Returns character at a given index : (Hindi English) = " + Ans.charAt(0)
);
console.log(
  "Extracts part of a string (no negatives) : (Hindi English) = " +
    Ans.substring(0, 5)
);
console.log(
  "Replaces part of a string : (Hindi to Sanskrit) = " +
    Ans.replace(`Hindi`, `Sanskrit`)
);
console.log(
  "includes(value)	Checks if substring exists : (Hindi English) = " +
    Ans.includes("English")
);
console.log(
  "indexOf(value)	Finds the position of substring: (Hindi English) = " +
    Ans.indexOf("English")
);
console.log(
  "startsWith(value)Checks if string starts with a value = " +
    Ans.startsWith("Hi")
);
console.log(
  "endsWith(value)	Checks if string ends with a value: (Hindi English) = " +
    Ans.endsWith("English")
);

console.log(
  "trim()	Removes whitespace from start and end: (Hindi English) = " +
    Ans.trim("English")
);
console.log(
  "padStart(n, char) using for id generation	Pads start with characters: (Hindi English) = " +
    Ans.padStart(20, "0")
);
console.log(
  "padStart(n, char) using for id generation	Pads start with characters: (Hindi English) = " +
    Ans.padEnd(20, "0")
);
console.log(
  "repeat(n)	Repeats a string multiple times: (Hindi English) = " + Ans.repeat(2)
);
console.log(
  'split("").reverse().join("") Reverses a string: (Hindi English) = ' +
    Ans.split("").reverse().join("")
);
console.log(
  "split(separator)	Splits a string into an array : (Hindi English) = ",
  Ans.split(` `)
);
// console.log('.join("") used for a string: (Hindi English) = ' + Ans.join("-"));
console.log(
  '.join("") used for a string but this is working with array : (Hindi English) = ' +
    Ans.split(" ").join("-")
);

// Note if I want to Concatinate two values inside the back_ticks ` ` or " "  we are you $ Sign `${A} ${B}` ${sum};

let opt_1 = "Pankaj";
let opt_2 = "Nayak";
let result = `${opt_1} ${opt_2}`;
console.log(
  `Note if I want to Concatinate two values inside the back_ticks \` \` or " " , we are you $ Sign =  ${result} `
);
console.log(
  '.join("") used for a string: (Hindi English) = ' +
    result.split(" ").join("\\")
);
