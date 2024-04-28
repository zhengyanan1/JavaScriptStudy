async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}
async function async2() {
    console.log('async2')
}
console.log('script start')
setTimeout(function () {
    console.log('settimeout')
}, 0)
async1()
new Promise(function (resolve) {
    console.log('promise1')
    resolve()
}).then(function () {
    console.log('promise2')
    for(let i = 0; i < 10000000000; i++){
        const a = i * i;
    }
    return Promise.resolve(3);
}).then(function(res){
    console.log('promise3', res)
})
console.log('script end')