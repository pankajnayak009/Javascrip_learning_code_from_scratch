class Person {
  //property
  name = "Pankaj Nayak";
  age;
  position;
  #salary;

  // constructor
  constructor(newage, updatposition, initialSalary = 7000) {
    this.age = newage;
    this.position = updatposition;
    this.#salary = initialSalary;
  }

  //bhihaviour
  Building_web_structure() {
    console.log("Building web structure with Html"); // this.#salary
  }
  Designing_web_with_CSS() {
    console.log("Designing web with CSS");
  }

  Appling_functionality_with_js() {
    console.log("Appling functionality with js");  
  }
   
  get Hiddensalary() {
    return this.#salary;
  }

  set Hiddensalary(val) {
    this.#salary = val;
  }
}

let obj = new Person(25, "Fullstackdeveloper", 20000);
console.log(obj.name);
console.log(obj.age);
console.log(obj.Hiddensalary);
console.log(obj.position);

obj.Building_web_structure();
obj.Designing_web_with_CSS();
obj.Appling_functionality_with_js();

// Modifying Salary Using Setter
obj.Hiddensalary = 18000;
console.log("Updated Salary :", obj.Hiddensalary);

// Default perameter Set if you are forget to pass

function printEngineerName(engineerName = "Pankaj Nayak") {
  console.log(`I am a Front-End Developer: ${engineerName}`);
}

//   printEngineerName(); // Default parameter will be used
printEngineerName(undefined); // Custom name
