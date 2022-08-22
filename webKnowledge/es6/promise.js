const p = ()=>{ 
    return Promise.race([
        new Promise(function (resolve, reject) {
            setTimeout(() => resolve('response success'), 3000)
        }),

        new Promise(function (resolve, reject) {
            setTimeout(() => reject('request timeout'), 2000)
        })
    ]);
}
  

async function getRes(){
    try{
        let res = await p()
        console.log("1:", res)
    }
    catch(e){
        console.log("2:", e)
    }
}

getRes()

let a = async function(){
    return 1
}
a().then((v)=>{
    console.log("a", v)
})