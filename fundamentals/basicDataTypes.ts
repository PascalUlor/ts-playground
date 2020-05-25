//Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// Array
let list: number[] = [decimal, hex, binary];
// list.push('Iris') //Argument of type '"Iris"' is not assignable to parameter of type 'number'
list.push(9)

let list2: Array<string> = ['Frodo', 'Aragon', 'Sam'];
list2.push('Iris')
console.log('Arrays >>>>>', list, list2);

//tuple
let t: [string, number];
// Initialize it
t= ["hello", 10]; // OK
// Initialize it incorrectly
// t = [10, "hello"]; // Error
console.log(t[0].substring(2))

// Enum is a way of giving more friendly names to sets of numeric values
enum Color {Red = 1, Green = 20, Blue = 10}
let c: Color = Color.Green;
console.log('Enum >>>', c)

// Any
let notSure: any = 4;
// notSure.ifItExists(); // okay, ifItExists might exist at runtime
// notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
notSure = "joe"

/**
 * void is a little like the opposite of any: the absence of having any type at all. 
 * You may commonly see this as the return type of functions that do not return a value
 * null undefined
 */
function warnUser(): void {
    console.log("This is my warning message");
}

let unusable: void = undefined;
console.log('void1>>>>', unusable);
unusable = null; // OK if `--strictNullChecks` is not given
console.log('void2>>>>', unusable);
decimal = undefined

// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
console.log('undefined>>>>', decimal);

/**
 * The never type represents the type of values that never occur
 */

 // Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}

// Array of type Never
let neverArray: [] = [];
// neverArray.push(4) //Argument of type '4' is not assignable to parameter of type 'never'
console.log('>>>>', neverArray)


/*
object is a type that represents the non-primitive type, i.e. anything 
that is not number, string, boolean, bigint, symbol, null, or undefined
*/
// declare function create(o: object | null): void;

// create({ prop: 0 }); // OK
// create(null); // OK
// create({ name: null }); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

let heros: object = {}
heros['superman'] = 'Krypton'
console.log('>>>>', heros)

/*
Type Assertion:
Type assertions have two forms:
 1. One is the “angle-bracket” syntax
 2. as-syntax
*/

let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;


let someValue2: any = "this is a string";

let strLength2: number = (someValue2 as string).length;