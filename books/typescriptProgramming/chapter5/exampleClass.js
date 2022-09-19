"use strict";
// abstract class Piece{
//     private age: number
//     constructor(age: number){
//         this.age = age
//     }
// }
// let p = new Piece()
class MySet {
    has(value) {
        return true;
    }
    add(value) {
        return this;
    }
}
let mySet = new MySet();
mySet.add(1);
class MyClass {
}
class StringDatabase {
    constructor() {
        this.state = {};
    }
    get(key) {
        return key in this.state ? this.state[key] : null;
    }
    set(key, value) {
        this.state[key] = value;
    }
    static from(state) {
        let db = new StringDatabase();
        for (let key in state) {
            db.set(key, state[key]);
        }
        return db;
    }
}
