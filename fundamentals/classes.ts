class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");

// Inheritance
//   class Animal {
//     move(distanceInMeters: number = 0) {
//       console.log(`Animal moved ${distanceInMeters}m.`);
//     }
//   }

//   class Dog extends Animal {
//     bark() {
//       console.log("Woof! Woof!");
//     }
//   }

//   const dog = new Dog();
//   dog.bark();
//   dog.move(10);
//   dog.bark();

// Super
class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

// Access modifiers

/*
  Private, it cannot be accessed from outside
  of its containing class. For example:
  */

class AnimalP {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  public getElevatorPitch() {
    return `Hello, my name is ${this.name}.`;
  }
}

class Cat extends AnimalP {
  age: string;
  constructor(age: number) {
    super(name);
    this.age = name;
  }
  public getName() {
    return `Hello, my name is ${this.age}.`;
  }
}
const testA = new AnimalP("Cat").getElevatorPitch();
console.log(testA, ">>>>>>");
//   new Animal("Cat").name; // Error: 'name' is private;

/*
  Protected > is like Private but members declared Protected can also be
  accessed within deriving classes.
  */

class Person {
  protected name: string;
  protected constructor(theName: string) {
    this.name = theName;
  }
}

// Employee can extend Person
class Employee extends Person {
  private department: string;
  public salary: number;
  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
howard.salary = 100;
console.log(howard); // error
// howard.name; // error
//   let john = new Person("John"); // Error: The 'Person' constructor is protected

class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName;
  }
}
let dad = new Octopus("Man with the 8 strong legs");
//   dad.name = "Man with the 3-piece suit"; // error! name is readonly.
console.log(">>>>", dad.name);

// Accessors (Getters/Setters)
const fullNameMaxLength = 10;

class Employee2 {
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (newName && newName.length > fullNameMaxLength) {
      throw new Error("fullName has a max length of " + fullNameMaxLength);
    }

    this._fullName = newName;
  }
}

let employee = new Employee2();
employee.fullName = "Bob Smith";
if (employee.fullName) {
  console.log(employee.fullName);
}

/** Static methods
 *
 */
class Grid {
  static origin = { x: 0, y: 0 };
  calculateDistanceFromOrigin(point: { x: number; y: number }) {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor(public scale: number) {}
}

let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5x scale
console.log("Static>>>", Grid.origin);

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

/**
 * Abstract classes are base classes from which other classes may be derived.
 */

abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log("Department name: " + this.name);
  }

  abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {
  constructor() {
    super("Accounting and Auditing"); // constructors in derived classes must call super()
  }

  printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10am.");
  }

  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}

let department: Department; // ok to create a reference to an abstract type
//   department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
//   department.generateReports(); // error: method doesn't exist on declared abstract type
