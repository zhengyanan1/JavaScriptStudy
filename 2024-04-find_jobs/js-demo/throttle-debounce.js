function throttled1(fn, delay = 500) {
    let oldtime = -1
    return function (...args) {
        let newtime = Date.now()
        if (newtime - oldtime >= delay) {
            fn.apply(null, args)
            oldtime = Date.now()
        }
    }
}

const hello = ()=>{ console.log("hello");}
// const throttledHello1 = throttled1(hello);
// throttledHello1();
// throttledHello1();
// setTimeout(throttledHello1, 1000);


function throttled2(fn, delay = 500) {
    let timer = null
    return function (...args) {
        console.log('========timer:', timer);
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, args)
                timer = null
            }, delay);
        }
    }
}
const throttledHello2 = throttled2(hello);
throttledHello2();
throttledHello2();
setTimeout(throttledHello2, 1000);

