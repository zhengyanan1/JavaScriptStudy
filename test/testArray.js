let point = {
    x: 1,
    y: 2
}

let points = [point, point]
console.log(points)

point.x = 3
console.log(points)

let newPoints = points.filter( (v, index)=> index < 1)
console.log(newPoints)

newPoints[0].y = 100
console.log(points)

let a = 1 || "aa"
console.log(a)
