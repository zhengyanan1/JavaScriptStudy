let channel = new MessageChannel()

let myPort = channel.port1
let yourPort = channel.port2
console.log(myPort, yourPort)

myPort.postMessage("Can you hear me")
yourPort.onmessage = (e)=> console.log(e.data, "---")