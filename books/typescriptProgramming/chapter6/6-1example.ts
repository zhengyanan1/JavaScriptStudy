let a : number = 1
let b : any = "23"

a = b

type A = {
    type: "A",
    name: string,
    age: number
}
type B = {
    type: 'B',
    name: number
    age: string
}
type C = A | B
function Test(c: C){
    if(c.type === 'A'){
        c.age
    }
    if(typeof c.name === 'string'){
        c.age
    }
}

// console.log( c instanceof C) // error!!!

type UsetTextEvent = {
    value: string,
    target: HTMLInputElement
}
type UserMouseEvent = {
    value: [number, number],
    target: HTMLElement
}
type UserEvent = UsetTextEvent | UserMouseEvent

function handle(event: UserEvent){
    if(typeof event.value === 'string'){
        event.value
        event.target
    }
}