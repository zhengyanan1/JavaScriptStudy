const getJSON = require("./getJSON.js")

// getJSON("www.baidu.com")
//     .then(v => console.log(v))
//     .catch((e)=>{
//         console.log(e)
//     })

module.exports = async function getTemperature(url){
    let c = await getJSON(url)
    return c.length
}
