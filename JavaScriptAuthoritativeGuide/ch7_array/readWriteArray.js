let o = {}
o[1] = "one"
console.log(o["1"])

let a = [2]
a[-1] = 100
console.log(a[0], a["-1"], a.length)
a[1.00000] = 888
a[1.0000009] = 99
console.log(a)