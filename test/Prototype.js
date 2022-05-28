function Person(){

}
Person.prototype.name = "harden"

let person = new Person()

console.log(typeof Person, typeof person)
console.log(person.__proto__ === Person.prototype, Person.prototype, person.__proto__)
console.log(Person === Person.prototype.constructor, Person.prototype.constructor)


console.log(Object.prototype)
console.log(Person.prototype.__proto__ === Object.prototype, Object.prototype.__proto__)



console.log(Person.__proto__ === Person.prototype, Person.__proto__, Person.prototype)
console.log(Function.__proto__ === Function.prototype, Function.prototype)