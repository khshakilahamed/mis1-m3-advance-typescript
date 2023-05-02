// Arrow Function
const createArray = (param: string): string[] => {
    return [param];
};

const createArray2 = <T>(param: T): T[] => {
    return [param];
};



// Generic Tuple
const createArray3 = <X, Y>(param1: X, param2: Y): [X, Y] => {
    return [param1, param2];
};

// Generic Tuple with normal function
function createArray4<X, Y>(param1: X, param2: Y): [X, Y] {
    return [param1, param2];
};


const result = createArray('Bangladesh');
const result2 = createArray2<string>('Bangladesh');
const result3 = createArray2<boolean>(true);


type NameType = { name: string, age: number };
const result4 = createArray2<NameType>({ name: 'Kh. Shakil', age: 22 });

// Generic Tuple
const result5 = createArray3<string, string>('Bangladesh', "I love my country");
const result6 = createArray3<boolean, Array<string>>(true, ['USA']);


// Spread Operator
const myCrush = 'Don\'t know';
const myInfo = {
    name: 'Kh. Shakil',
    age: 27,
    salary: 10000000,
}

// const newData = { ...myInfo, myCrush };

const addMeInMyCrushMind = <T>(myInfo: T) => {
    const newData = { ...myInfo, myCrush };
    return newData;
}

const result7 = addMeInMyCrushMind(myInfo);
// result7.