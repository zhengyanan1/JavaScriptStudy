// const http = require('http')


console.log("Hello World!")

let book = {
    topic: "JaveScript",
    edition: 7
}

book.contents = {}
console.log(book?.edition2)

let primes = [2, 3, 5, 7]
console.log(primes.length)
primes["aa"] = 11
console.log(primes.length)


async function getInputFromStdin(){
    process.stdin.setEncoding('utf-8')

    for await(let chunk of process.stdin){
        console.log("line:***", chunk)
    }
}

getInputFromStdin()