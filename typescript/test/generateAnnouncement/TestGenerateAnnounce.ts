export class Harden{
    name: string
    age: number

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
    
    showName(){
        console.log(this.name)
    }
}