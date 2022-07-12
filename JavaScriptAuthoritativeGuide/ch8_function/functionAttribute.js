
uniqueInteger.counter = 0

function uniqueInteger(){
    return uniqueInteger.counter++;
}

console.log(uniqueInteger())
console.log(uniqueInteger())
console.log(uniqueInteger())

uniqueInteger.counter = 0

console.log(uniqueInteger())
console.log(uniqueInteger())
console.log(uniqueInteger())
