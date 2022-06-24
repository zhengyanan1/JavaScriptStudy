let a = 1
console.log( a as unknown as string)






interface Cat {
    name: string;
    // run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function isFish(animal: Cat | Fish) {
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}
let cat : Cat = {
    name: "cat"
}

let fish: Fish = {
    name:"fish",
    swim: ()=>{}
}

class MyFish{

}
interface Dog{
    like: string
}
let dog: Dog = {
    like: 'bone'
}

console.log(cat as Fish)
console.log(fish as Cat)
console.log(dog as Fish)
