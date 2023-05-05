// a type is dependent on another type
type a1 = null;
type a2 = undefined;
type a3 = number;
type a4 = a1 extends string ? string : null;

// nested conditional type
type d = a1 extends null ? null : a3 extends number ? number : a4 extends null ? null : never;


type Sheikh = {
    wife1: string;
    wife2: string;
};

// check korbe ei Sheikh Type e wife1 ase ki na ? true : false

// type A = keyof Sheikh; // 'wife1' | 'wife2'
// type CheckProperty<T> = T extends {wife1: string} ? true : false;
// type CheckProperty<T, K> = K extends keyof Sheikh ? true : false;
type CheckProperty<T, K> = K extends keyof T ? true : false;

type CheckWife1 = CheckProperty<Sheikh, 'wife2'>;


// Matha khrap example
type Bandhubi = 'Monika' | 'Rechel' | 'Pheobe';

// type RemoveBandhubi<T> = T extends 'Rechel' ? never : T;
type RemoveBandhubi<T, K> = T extends K ? never : T;

type CurrentBandhubi = RemoveBandhubi<Bandhubi, 'Rechel'>;