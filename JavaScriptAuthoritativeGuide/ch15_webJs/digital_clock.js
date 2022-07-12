function displayTIme(){
    let clock = document.querySelector("#clock")
    let now = new Date()
    clock.textContent = now.toLocaleTimeString()
    // console.log(screen)
}

displayTIme()
setInterval(displayTIme, 1000)
console.log("readyState:", document.readyState)