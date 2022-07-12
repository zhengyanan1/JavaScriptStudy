let x = 0, y = 2;

let o = {x, y}
console.log(o)

console.log(NaN !== NaN)

let p = {
    area(){
        return this.x * this.x;
    },
    x: 10,
}

console.log(p.area())



const InCreaseNum = {
    _n: 0,

    get next(){
        return this._n++;
    },
}

console.log(InCreaseNum.next)
console.log(InCreaseNum.next)
console.log(InCreaseNum.next)
console.log(InCreaseNum.next)
console.log(InCreaseNum.next)
InCreaseNum.next = 10
console.log(InCreaseNum.next)

console.log(typeof undefined)
console.log(typeof 1)
console.log(typeof true)
console.log(typeof "678")
console.log(typeof p.area)
console.log(typeof Symbol(1))


console.log(typeof [])
console.log(typeof {})
console.log(typeof null)
console.log(typeof /aa/g)

console.log(Function instanceof Object)
console.log(Object instanceof Function)
