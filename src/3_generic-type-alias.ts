// tuple
type GenericTuple<X, Y> = [X, Y];

const relation: GenericTuple<string, string> = ['Kh. ', 'Don\'t know'];

type RelationWithSalaryType = {
    name: string,
    salary: number,
}

interface RelationWithSalaryTypeInterface{
    name: string;
    salary: number;
}

// using alias
const relationWithSalary: GenericTuple<RelationWithSalaryType, string> = [
    {
        name: 'Kh. Shakil',
        salary: 1000000000,
    },
    'Don\'t know'
]

// using interface
const relationWithSalary2: GenericTuple<RelationWithSalaryTypeInterface, string> = [
    {
        name: 'Kh. Shakil',
        salary: 1000000000,
    },
    'Don\'t know'
]




type GenericArray<T> = Array<T>

//  ------------------- number type ------------------- 
// const anyNumbers: number[] = [33, 4, 2, 3];
// const anyNumbers: Array<number> = [33, 4, 2, 3]; // Generic
const anyNumbers: GenericArray<number> = [33, 4, 2, 3]; // Generic

// String type
// const anyNumbers2: string[] = ['33', '4', '2', '3'];
// const anyNumbers2: Array<string> = ['33', '4', '2', '3']; // Generic
const anyNumbers2: GenericArray<string> = ['33', '4', '2', '3']; // Generic

//  ------------------- Boolean Type ------------------- 
// const anyNumbers3: Array<boolean> = [true, false]; // Generic
const anyNumbers3: GenericArray<boolean> = [true, false]; // Generic


//  ------------------- Object ------------------- 
const userNameAndRollNumbers: Array<{ name: string, roll: number }> = [
    {
        name: 'Mr. X',
        roll: 1
    },
    {
        name: 'Mr. Y',
        roll: 2
    }
]

const userNameAndRollNumbers2: GenericArray<{ name: string, roll: number }> = [
    {
        name: 'Mr. X',
        roll: 1
    },
    {
        name: 'Mr. Y',
        roll: 2
    }
]


type NameRollType = {
    name: string,
    roll: number
}
const userNameAndRollNumbers3: GenericArray<NameRollType> = [
    {
        name: 'Mr. X',
        roll: 1
    },
    {
        name: 'Mr. Y',
        roll: 2
    }
]