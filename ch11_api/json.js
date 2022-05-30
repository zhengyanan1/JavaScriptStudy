s = {
    name: 'harden',
    age: 29,
    sex: 'man',
    like: [
        "tennis",
        "swimming",
    ],
    company:{
        name: 'tencent'
    }
}

console.log(JSON.parse(JSON.stringify(s), (key, value) =>{
    if (typeof value == "number")   return undefined
    return value
}))

console.log(JSON.parse(JSON.stringify(s, ["age", "name"])))

console.error("9999")
console.assert(true, "assert 1")
console.assert(false, "assert 2")
// console.clear()

console.table(Array.of(s, s))


console.trace("1")

console.group("group")
console.groupEnd()

console.time("Harden")
console.timeLog("Harden", "have a rest")
console.timeEnd("Harden")

console.log("%d-%s", 99, "sb", "000")