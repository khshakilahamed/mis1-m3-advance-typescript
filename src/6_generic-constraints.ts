const myCrush2 = 'Don\'t know';

// const newData = { ...myInfo, myCrush };

type MandatoryTypes = { name: string, age: number, salary: number };

interface MandatoryInterface{
    name: string, age: number, salary: number 
}

// Constrains using type Alias
const addMeInMyCrushMind2 = <T extends MandatoryTypes>(myInfo: T) => {
    const newData = { ...myInfo, myCrush2 };
    return newData;
}

// Constrains using Interface
const addMeInMyCrushMind3 = <T extends MandatoryInterface>(myInfo: T) => {
    const newData = { ...myInfo, myCrush2 };
    return newData;
}

type MyInfoType2 = {
    name: string;
    age: number;
    salary: number;
    other1: boolean;
    other2: null;
}

const myInfo2: MyInfoType2 = {
    name: 'Kh. Shakil',
    age: 27,
    salary: 10000000,
    other1: false,
    other2: null,
}

const result8 = addMeInMyCrushMind2<MyInfoType2>(myInfo2);
// result8. 


const extra = {
    roll: 3,
    address: "Dhaka",
}

// const result9 = addMeInMyCrushMind2(extra); // it will show error for 'Constraints'