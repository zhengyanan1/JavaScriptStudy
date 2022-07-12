const threads = require('worker_threads')

console.log(process.cwd(), __dirname)

Atomics.add()

let worker = new threads.Worker("jjj")
worker.on('online')