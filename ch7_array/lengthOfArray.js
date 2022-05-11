let  a = [1, 2, 3, 4, 5]
console.log(a.length)

a[10] = 11
console.log(a, a.length)


a.length = 3
console.log(a)
a.length = 10
console.log(a, a[4] == undefined, a[5] === undefined)

a.length = 0
console.log(a)
a.push(1)
a.push(2)
console.log(a)