const os = require("os")
const fs = require("fs")

console.log(process.cwd())
console.log(__filename)
console.log(__dirname)
console.log(os.homedir())


fs.createReadStream("./processCPU.js", 'utf8').pipe(process.stdout)
// fs.readFile()
console.log(String(2).padEnd(10) + "***")