function* fibonacciSequence(){
    let x = 0, y = 1;
    for(;;){
        yield y;
        [x, y] = [y, x+y];
    }
}

function fibonacci(n){
    for(let f of fibonacciSequence()){
        // console.log(n, "***" + f)
        if(n-- <= 0)    return f
    }
}

console.log(fibonacci(20))


function* sequence(...iterables){
    for(let iterable of iterables){
        for(let item of iterable){
            yield item
        }
    }
}

console.log([...sequence("111", "abc")])

console.log([1, 2].forEach((v) =>{yield v}))