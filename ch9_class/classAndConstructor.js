function Range(from, to){
    this.from = from
    this.to = to
}
Range.prototype = {
    includes: function(x){
        return this.from <= x && x <= this.to 
    }, 
    constructor: Range
}
let r2 = new Range(1, 3)
console.log(r2.includes(4), r2.constructor, Range.prototype)



function range(from ,to){
    let r = Object.create(range.methods)

    r.from = from
    r.to = to

    return r
}

range.methods = {
    includes(x){ return this.from <= x && x <= this.to}
}

let r = range(1, 3)
console.log(r.constructor, range.methods.isPrototypeOf(r), "******")



let F = function(){}
let p = F.prototype
let c = p.constructor
console.log(c === F, c, p)



let o = new F()
console.log(o.constructor)