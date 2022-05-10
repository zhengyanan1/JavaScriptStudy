
let book = {

}

book.edition = 7;
console.log(book)



let o = {}
o.x = 1
let p = Object.create(o)
p.y = 2;
let q = Object.create(p)
q.z = 3
console.log(q.x, q.y, q.z)
console.log(q)
for(let key in q){
    console.log(key)
}

q.x = 9
console.log(q)
for(let key in q){
    console.log(key)
}
