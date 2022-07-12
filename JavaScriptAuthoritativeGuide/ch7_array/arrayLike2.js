var data = [];

var aa = 1

function generate(){
    var b = 1
    for (var i = 0; i < 3; i++) {
        // (data[i] = function () {
        //    console.log(arguments.callee.i) 
        // }).i = i;
        let out = i
        data[i] = function(){
            console.log(i)
        }
    }
}
// console.log(b)

var aa = 3




generate()
data[0]();
data[1]();
data[2]();



// console.log(greeter);
// let greeter = 'say hello';

(function(){
    console.log("123456!")
})()