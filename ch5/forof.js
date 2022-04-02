
let s = "I🐶"

for(let letter of s){
    console.log(letter)
}
console.log(s.length, "*".repeat(40))
for(let i = 0; i < s.length; i++){
    console.log(s[i])
}

class Harden{
    name;

    constructor(name){
        this.name = name
    }

    swim(){
        console.log(this.name , "go swiming~")
    }
};

let harden = new Harden("harden")
harden.swim()

console.log(Object.keys(harden))