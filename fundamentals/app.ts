function add(n1:number, n2:number, showResult:boolean, phrase:string){
 const result = n1 + n2;
    if (showResult){
     console.log(phrase + result)
 }
 return result
}

const number1 = 3;
const number2 = 56;
const printResult = true;
const text= 'Digit sum';

add(number1, number2, printResult, text)

// Define Objects with specifics (not optimal)
// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Diana',
//     age: 30
// }

//preffered
const person = {
    name: 'Diana',
    age: 30
}

/** Union type uses pipes to assign multiple data types to
 *  a variable
*/

function combine(input1:number | string, input2:string | number){
    let result;
       if (typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result
   }

const digit = combine(2, 6);

const wordText = combine('Max', 'Steel');

const alphText = combine('Ben', 10);
   
console.log(alphText, digit, wordText);

// functions
function addHandler(n1: number, n2: number, cb:(num: number) => number) {
    const result = n1 + n2;
    return cb(result);
}

// addHandler(100, 500, (num)=> console.log('>>>>>', num));

// if cb returns a number i.e cb:(num: number) => number
console.log('>>>>>', addHandler(100, 500, (num)=> num))
