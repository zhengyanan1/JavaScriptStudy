const EventEmitter = require("events")
const net = require("net")

let server = new net.Server()
console.log(server instanceof EventEmitter)