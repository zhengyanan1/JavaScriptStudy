// 多参数柯里化；
const curry = function(fn){
    return function curriedFn(...args){
        console.log(args.length, fn.length);
        if(args.length<fn.length){
            return function(){
                return curriedFn(...args.concat([...arguments]));
            }
        }
        return fn(...args);
    }
}
const fn = (x,y,z,a)=>x+y+z+a;
const myfn = curry(fn);
console.log(myfn(1)(2)(3)(1));


const compose = (...fns)=> val=>fns.reverse().reduce((acc,fn)=>fn(acc),val);

let a = compose((a)=> 9+a, (b)=> 2*b)(1);
console.log('a::', a);
