console.log(1)

setTimeout(()=>{
    console.log(10)
})

new Promise((resolve, reject)=>{
    console.log(2)
    reject()
    console.log(3)
}).then(()=>{
    console.log(4)
}).catch(()=>{
    console.log(5)
})

