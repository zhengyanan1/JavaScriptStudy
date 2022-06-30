// declare const jQuery = function(selector) {
//     return document.querySelector(selector);
// }

class Animal {
    name: string;
    constructor(name: string){
        this.name = name
    }
    // sayHi() {
    //     return `My name is ${this.name}`;
    // };
    // ERROR: An implementation cannot be declared in ambient contexts.
}

function showName(){
    console.log("harden")
}
