let emni: any;

emni = "Next level web development";

// (emni as string).length; // first way to define type assertion
<string>emni.length; // second way to define type assertion


function kgToGram(param: string | number): string | number | undefined {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `The Converted result is: ${value} gram`;
    }
    if (typeof param === 'number') {
        const value = param * 1000;
        return value;
    }
}

const resultToBeNumber = kgToGram(1000) as number; // first way to define type assertion
const resultToBeString = <string>kgToGram('1000'); // second way to define type assertion

// console.log(resultToBeNumber);
// console.log(resultToBeString);


type CustomErrorType = {
    message: string;
}
try {

} catch (error) {
    console.log((error as CustomErrorType).message)
}