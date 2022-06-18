console.log({}.toString())

class Harden{
    [Symbol.toPrimitive](type){
        console.log("***", type)
        return 1
    }
}

console.log(`&&${new Harden()}`)