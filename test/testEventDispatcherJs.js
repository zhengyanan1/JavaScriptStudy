class Name{
    name = 1
    showName(){
        console.log("hello, ", this.name)
    }
}

let harden = new Name()
harden.name = "harden"
harden.showName()

console.log(Object.keys(harden))
console.log(Reflect.has(harden, "showName"))
console.log(Reflect.getOwnPropertyDescriptor(harden, "name"))
console.log(Reflect.getPrototypeOf(harden))


console.log(Name.prototype, "____")
console.log(Object.keys(Name.prototype))
console.log(Reflect.getOwnPropertyDescriptor(Name.prototype, "showName"))
