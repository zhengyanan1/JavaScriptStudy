
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
async function GetNameFromNet(){
    await sleep(1000)
    // throw new Error("net error")
    return "Harden"
}


// throw new Error("main error")

// method1: catch 中捕获异常...
let _err = new Error("postion error")
GetNameFromNet().then(
    (v)=>{
        console.warn(v, "---")
        throw new Error("then error")
    }).catch(
    ((e)=>{
        console.warn(e)
    }))

// GetNameFromNet().then(
//     (v)=>{
//         console.warn(v)
//         throw new Error("then error")
//     },
//     (e)=>{
//         console.warn(e)
//     }
// )

async function test(){
    await GetNameFromNet().then( (v)=>{console.warn("test ", v)})
    console.warn("test")
}
console.warn("hello promise")
test()