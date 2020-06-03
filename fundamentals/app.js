function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    return result;
}
var number1 = 3;
var number2 = 56;
var printResult = true;
var text = 'Digit sum';
add(number1, number2, printResult, text);
// Define Objects with specifics (not optimal)
// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Diana',
//     age: 30
// }
//preffered
var person = {
    name: 'Diana',
    age: 30
};
/** Union type uses pipes to assign multiple data types to
 *  a variable
*/
function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var digit = combine(2, 6);
var wordText = combine('Max', 'Steel');
var alphText = combine('Ben', 10);
console.log(alphText, digit, wordText);
// functions
function addHandler(n1, n2, cb) {
    var result = n1 + n2;
    return cb(result);
}
// addHandler(100, 500, (num)=> console.log('>>>>>', num));
// if cb returns a number i.e cb:(num: number) => number
console.log('>>>>>', addHandler(100, 500, function (num) { return num; }));
