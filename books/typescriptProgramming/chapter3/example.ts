let a = 1234
const b = 1234


let h:bigint = 100n


let o: object = {
    b: 1
}
// console.log(o.b)


const o1: {b:number} ={
    b:12
}

// let i: object = {
//     a: 1
// }
// console.log(i.a)


type Cat = {name:string, purrs: boolean}
type Dog = {name:string, barks: boolean, wags: boolean}

let cOrD: Cat | Dog = {
    name: 'aa',
    purrs: true,
    barks: false,
    wags: true
}

console.log(typeof undefined)


const enum Flippable{
    Burger,
    Chair,
    Table
}

function flip(f: Flippable){
    console.log(f)
    return "flippable it"
}

flip(Flippable.Burger)
flip(12)

console.log(typeof flip)


let t1: {
    a: number,
    b?: number,
    [key: number]: string
}

t1 = {
    a: 4,
    b: 3,
    3: "1"
}

