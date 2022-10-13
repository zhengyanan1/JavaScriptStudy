var color = 'red'
color = 'orange'

var myObject = {
    color: 'green',
    showColor: function(){
        console.log(this)
        console.log(this.color)
    }
}

let showColor = myObject.showColor

showColor()
// myObject.showColor()
console.log(this)

console.log([4,16].reduce((a,b)=> a + b))