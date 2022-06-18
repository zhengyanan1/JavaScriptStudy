let o = {
    x : 1
}

console.log(Object.isExtensible(o))
console.log(Object.preventExtensions(o))
console.log(Object.isExtensible(o))
