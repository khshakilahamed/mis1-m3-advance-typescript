
// Mocking
// json place holder
interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
const getTodo = async (): Promise<ITodo> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return await response.json()
}

const getTodoData = async (): Promise<void> => {
    const result = await getTodo();
    console.log(result);
}

getTodoData();


const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = 'Data is fetched'
        if (data) {
            resolve(data);
        }
        else {
            reject('Failed to fetch data!');
        }
    })
}


const makePromiseBoolean = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const data: boolean = true;
        if (data) {
            resolve(data);
        }
        else {
            reject('Failed to fetch data!');
        }
    })
}

type DataType = {
    data: string;
}
// interface dataInterface{
//     data: string;
// }
const makePromiseObject = (): Promise<DataType> => {
    return new Promise<DataType>((resolve, reject) => {
        const data: DataType = { data: 'Data is fetched' };
        if (data) {
            resolve(data);
        }
        else {
            reject('Failed to fetch data!');
        }
    })
}

// Promise<string>, Promise<boolean>, Promise<object>
// const result10 = makePromise

const getPromiseData = async (): Promise<void> => {
    const data = await makePromise();
    console.log(data);
}

const getPromiseDataBoolean = async (): Promise<boolean> => {
    const data = await makePromiseBoolean();
    return data;
}

const getPromiseDataObject = async (): Promise<DataType> => {
    const data = await makePromiseObject();
    return data;
}