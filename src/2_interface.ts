type User = {
    name: string;
    age: number;
};

type extendedUser = User & {
    role: string;
}

// we will use Interface with Object only. [Object, function, array are Object]
interface IUser {
    name: string;
    age: number;
}

interface IExtendedUser extends IUser {
    role: string;
}

// const user: extendedUser = {
//     name: 'Omanush',
//     age: 2000,
//     role: 'unknown'
// }

const user: IExtendedUser = {
    name: 'Omanush',
    age: 2000,
    role: 'unknown'
}


// const userWithTypeAlias: User = {
//     name: 'Type Alias',
//     age: 100,
// }

// const userWithInterface: IUser = {
//     name: 'Interface',
//     age: 200,
// }

type rollNumber = number;

//----------- interface & Type Alias in  Object, Function , Array-----------
// with function
type addNumbersType = (num1: number, num2: number) => number

interface IAddNumbers {
    (num1: number, num2: number): number
}

// const addNumbers: addNumbersType = (num1, num2) => {
//     return num1 + num2;
// }
const addNumbers: IAddNumbers = (num1, num2) => {
    return num1 + num2;
}

// with Array
type rollNumbersType = number[];
interface IRollNumbers {
    // [index:number]:string;
    [index: number]: number;
};

// const rollNumbers: rollNumbersType = [1, 4, 5];
const rollNumbers: IRollNumbers = [1, 4, 5];

