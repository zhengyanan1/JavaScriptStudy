function displayTIme(){
    let clock = document.querySelector("#clock")
    let now = new Date()
    clock.textContent = now.toLocaleTimeString()
}

displayTIme()
setInterval(displayTIme, 1000)