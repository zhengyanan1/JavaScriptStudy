function Qie(name, age){
    this.name = name
    this.age = age

    // return {
    //     like: 'sports'
    // }
}

let harden = new Qie('harden', 29)
console.log(harden)
console.log(harden.__proto__.constructor)