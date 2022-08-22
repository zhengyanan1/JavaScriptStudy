function doSomething(){}
// console.log(doSomething.prototype.constructor);


function Person(name) {
    this.name = name;
    this.age = 18;
    this.sayName = function() {
        console.log(this.name);
    }
}
Person.prototype.nameI = 'HARDEN'
// 第二步 创建实例
// var person = new Person('person')
// console.log(person.nameI)


function Man(name){
    this.sex = 'man'
}
Man.prototype.__proto__ = Person.prototype
let man = new Man()
console.log(man.nameI)
console.log(man.__proto__)

// console.log(person.__proto__.constructor)
// console.log(person.__proto__.__proto__.__proto__)
// console.log(typeof(Person.__proto__))
console.log(Person.prototype)
// console.log({}.__proto__)