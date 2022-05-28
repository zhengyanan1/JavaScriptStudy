let s = "abcdefg"
String.prototype.hello = function(){
    console.log(this.substring(0))
}

// console.log(typeof s)
String.prototype.hello.call(s)

console.log(~128)