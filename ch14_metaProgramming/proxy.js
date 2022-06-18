let t = {
    x: 1,
    y: 2
}
let p = new Proxy(t, {})
console.log(p)

delete p.y
console.log(p)

p.z = 3
console.log(t)


Proxy.revocable()

