type Name = string | number
let a: Name = 1
console.log(typeof a)


type EventNames = "click" | "scroll" | "mousemove"
let myEvent:EventNames = 'click'
console.log(myEvent)


let tom: [string, number]
tom = ['Tom', 35]
tom.push(true)