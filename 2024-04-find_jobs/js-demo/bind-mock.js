let value = 2;
let foo = {
    value: 1
};
function bar(name, age) {
    console.log('init************************ name && age:', name, age);
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}
bar.prototype.friend = 'kevin';

let bindFoo = bar.bind(foo, 'Jack');
let obj = new bindFoo(20);
console.log('===', obj);
// undefined
// Jack
// 20
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin

Function.prototype.myBind = function (context) {
    // 判断调用对象是否为函数
    if (typeof this !== "function") {
        throw new TypeError("Error");
    }

    // 获取参数
    const args = [...arguments].slice(1),
          fn = this;

    let Fn = function() {
        // 根据调用方式，传入不同绑定值
        return fn.apply( this instanceof Fn ? this : context, args.concat(...arguments)); 
    }
    Fn.prototype = fn.prototype;

    return Fn
}

let bindFoo2 = bar.myBind(foo, 'Jack');
let obj2 = new bindFoo2(20);
console.log('====******', obj2);

console.log(obj2.habit);
console.log(obj2.friend);

// console.log(bar.prototype)
// console.log(bindFoo2(30), foo);