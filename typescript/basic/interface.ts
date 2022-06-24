// interface Person{
//     name: string;
//     age: number
// }

// let tom :Person = {
//     name: 'harden',
//     age: 1,
//     like: 'apple'
// }


// interface Person2{
//     name: string;
//     age?: number;
// }

// let tom2: Person2 = {
//     name: 'harden'
// }


// interface Person3{
//     name: string,
//     age?:number,
//     [proName: string]: string;
// }

// let tom3: Person3 = {
//     name: 'Tom',
//     gender: "male",
//     age: 3
// }

interface Person4{
    name: string;
    age?: number;
    [propName: string]: string | number;
}
let tom4 = {
    name: 'hardne',
    age: 5,
    gender:'male'
}

interface Person5{
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom5:Person5 = {
    name: 'harden',
    gender: 'male'
}
tom5.id = 3