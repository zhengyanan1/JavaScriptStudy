let o = {
    x: 1
}

console.log(Object.getOwnPropertyDescriptor(o, "x"))

console.log( "x" in o)
console.log( "y" in o)
console.log( "toString" in o)


console.log(o.hasOwnProperty("toString"))




console.log(o.propertyIsEnumerable("x"))
