
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function downMovie(url){
    await sleep(1000)
    return "" + url
}

function downSmallMovie(){
    return downMovie("smallMovie")
}             

downSmallMovie().then(s => console.log(s))


/** */
Promise.all()
Promise.resolve()
