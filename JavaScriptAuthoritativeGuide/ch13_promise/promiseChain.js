const fetch = require('node-fetch');

fetch("http://www.baidu.com")
    .then(response =>{
        return "222" //response.text()       
    })
    .then(profile =>{
        console.log(profile)
    })



function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function downMovie(url){
    await sleep(1000)
    return "movie1"
}

downMovie("xiaohua1")                 