class Buffer{
    name = "Buffer"
    #size = 0
    get sizeeee(){return this.#size}

    static #type = "Buffer"
}

let buffer = new Buffer()
console.log(buffer.name, buffer.size)
console.log(Buffer.prototype.constructor)

