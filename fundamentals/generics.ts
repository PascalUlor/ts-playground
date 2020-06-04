// format for Generics
function identity<T>(arg: T): T {
    return arg;
  }

const last = <T>(arr: T[]): T=>{
  return arr[arr.length-1];
}

const arrNum = last([1,2,3,4,5]);

const arrString = last<string>(['Diana', 'Clark']);

console.log('>>>>>',arrNum, arrString);

// Generics can take multiple parameters
const makeArr = <X, Y=any>(x: X, y: Y): [X, Y] => {
  return [x, y];
};

const v = makeArr(5, 6);
const v2 = makeArr('Barry', 'Allen')
const v3 = makeArr<string|null, number>('Ben', 10)

console.log('>>>>>',v, v2, v3);

//Generics extends

const makeProfile = <T extends { firstName: string, lastName: string}>(obj: T)=>{
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
  }
}

const v4 = makeProfile({ firstName: 'Bruce', lastName: 'Wayne', alias: 'Batman'})

console.log('>>v4>>>',v4);

// Generics interface
interface Tab<T> {
  id: string;
  position: number;
  data: T;
}

type NumberTab = Tab<number>;
type StringTab = Tab<string>;

let numObj: NumberTab = {id: 'unique', position: 12, data: 8}

console.log('>>>gen Interface>>', numObj)