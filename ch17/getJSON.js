
module.exports = async function getJSON(url){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(url + "------")
        }, 1000)
    })
}