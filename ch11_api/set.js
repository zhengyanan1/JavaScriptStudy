let s = new Set("hello")

console.log(s)

console.log(s.delete('h'))
s.add(88)

console.log(s)

s.forEach((v1, v2, set) =>{
    console.log(v1, "******")
    console.log(v2)
    console.log(set)
})