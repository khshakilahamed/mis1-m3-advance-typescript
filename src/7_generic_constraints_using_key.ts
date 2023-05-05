type PersonType = {
    name: string,
    age: number,
    address: string
}


type newType = 'name' | 'age' | 'address'; // manually

type newTypeUsingKeyOf = keyof PersonType;

// const a: newType = 'age';
// const b: newTypeUsingKeyOf = 'name';


function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
    obj[key];
}

const property = getProperty({ name: 'kh. Shakil', age: 100 }, 'age');