// length
function hello(args, h){
}
console.log(hello.length)



// call apply
function f(o){
    console.log(this)
}
let _o = {name: 'harden'}

f()
f.apply(_o)
f.call(_o)
console.log(Math.max(1, 2, 3))


let o = {
    extra: 1,
    m: function(num){
        let sum = 0
        for(let i = 1; i <= num; i++){ sum += i}
        sum += this.extra == undefined ? 0 : this.extra
        console.log(sum)
        return sum
    }
}

function trace(o, m){
    let original = o[m]
    o[m] = function(...args){
        console.log( new Date(), "Entering:", m)
        let result = original.apply(this, args) // this === o
        console.log( new Date(), "Exiting:", m)
        return result
    }
}

o.m(1000000)
trace(o, "m")
o.m(1000000)


o["name"] = function(){
    console.log("name===========")
    console.log(this)
}
o.name()