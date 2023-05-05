const arrayOfNumbers = [1, 2, 3]; // ['1', '2', '3']
const arrayOfStrings = arrayOfNumbers.map((number) => number.toString());
console.log(arrayOfStrings);


type Volume = {
    height: number;
    width: number;
    depth: number;
};

// type Area = {
//     [key in 'height' | 'width']: string;
// }
type Area<T> = {
    // [key in keyof Volume]: string;
    // [key in keyof Volume]: boolean;
    // [key in keyof Volume]: Volume[key];
    readonly [key in keyof T]: T[key];
}

const area1: Area<{height: number, width: string}> = {height:10, width: '20'};

// area1.height = 70; // got error

type AreaString = {
    height: number;
    width: number;
};

type AreaReadOnly = {
    readonly height: number;
    readonly width: number;
}

const rectangularArea: AreaReadOnly = {
    height: 10,
    width: 12,
};

// rectangularArea.width = 10;


// type heightType = AreaNumber['height']; // look up types
// type B = keyof AreaNumber; // 'width' | 'height'