interface LabeledValue {
    label: string;
}

function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

interface SquareConfig {
    color?: string;
    width?: number;
}

// Optional props (optional chaining)
function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});
console.log('>>>>', mySquare)

//Readonly properties #
interface Point {
    readonly x: number;
    readonly y: number;
}

// let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

//ReadonlyArray<T>
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 10; // error!
// a = ro; // error!
console.log('ReadonlyArray>>>', ro)


// interface with any number of properties
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}
let obj: SquareConfig
console.log(obj)
