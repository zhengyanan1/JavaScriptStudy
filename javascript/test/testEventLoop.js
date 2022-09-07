console.log("log1")

setTimeout(()=>{
    console.log("timeout1")
}, 0)

new Promise((resolve)=>{
    console.log("promise1")
    resolve()
}).then(()=>{
    console.log("then1")
    Promise.resolve()
            .then(()=>{
                console.log('then11')
                Promise.resolve().then(()=>{console.log("then111")})
                            .then(()=>{console.log("then112")})
            })
            .then(()=>{console.log("then12")})
            .then(()=>{console.log("then13")})
}).then(()=>{
    console.log("then2")
}).then(()=>{
    console.log("then3")
}).then(()=>{
    console.log('then4')
})

Promise.resolve(222).then((c)=>{
    console.log(c)
})


setTimeout(()=>{
    console.log("timeout2")
}, 0)

console.log("log2")
