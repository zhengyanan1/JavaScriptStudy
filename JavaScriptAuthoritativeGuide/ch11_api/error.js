
let _error = new Error("bad position")
function hello(){
    inHello()
}

function inHello(){
    console.log("inHello")
    throw _error
}

hello()