function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function downMovie(url){
    await sleep(1000)
    return "" + url
}

async function testPromist(){
    
    return 1
}

testPromist().then(v => console.log(v))

sleep(2000).then(v => console.log(v))


let myPromise = new Promise((resolve, reject) =>{
    let isResolve = Math.random() > 0.5
    isResolve ? resolve("Hello") : reject("little then 0.5")
})

async function testMyPromise(){
    let result = null
    try{
        result = await myPromise
    }catch(error){
        result = error
    }finally{
        console.log("**********", result)
    }
}  


testMyPromise()
