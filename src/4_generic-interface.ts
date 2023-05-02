
// Generic Interface
interface CrushInterface<T> {
    name: string
    husband: T
}

// interface CrushInterface2<T, U> {
//     name: string;
//     husband: T;
//     wife?: U
// }

interface CrushInterface2<T, U = null> {
    name: string;
    husband: T;
    wife?: U
}

const crush1: CrushInterface<boolean> = {
    name: 'Don\'t know',
    husband: true
}


const crush2: CrushInterface<string> = {
    name: 'Don\'t know',
    husband: "kh. Shakil"
}

const crush3: CrushInterface<object> = {
    name: 'Don\'t know',
    husband: {
        name: 'Kh. Shakil',
        salary: 10000000,
    }
}

const crush4: CrushInterface<{ name: string, salary: number }> = {
    name: 'Don\'t know',
    husband: {
        name: 'Kh. Shakil',
        salary: 10000000,
    }
}


interface HusbandInterface {
    name: string,
    salary: number
};

const crush5: CrushInterface<HusbandInterface> = {
    name: 'Don\'t know',
    husband: {
        name: 'Kh. Shakil',
        salary: 10000000,
    }
}


// -------- multiple parameter

const crush6: CrushInterface2<boolean, string> = {
    name: 'Don\'t know',
    husband: true,
    wife: 'Sabana'
}


interface PersonInterface {
    name: string,
    age: number
}

const crush7: CrushInterface2<PersonInterface, PersonInterface> = {
    name: 'Don\'t know',
    husband: {
        name: 'kh. Shakil',
        age: 24
    },
    wife: {
        name: 'Sabana',
        age: 22
    }
}