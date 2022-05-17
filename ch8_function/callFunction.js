// "use strict"

// 1 函数调用
const strict = (function(){
    // console.log(this)
    return !this}())
console.log(strict)



// 2 方法调用
let o = {
    m: function(){
        const f2 = ()=>{
            console.log(this, "###")
        }

        const f3 = (function(){
            console.log(this, "$$$")
        }).bind(this)

        let self = this
        console.log(this)
        f()
        f2()
        f3()


        function f(){
            console.log(this, "***")
        }
    }
}
o.m()


// 3. 构造函数调用

// 4. 间接调用 call 和 apply