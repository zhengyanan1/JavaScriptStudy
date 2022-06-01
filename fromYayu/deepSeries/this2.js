value = 1;

var foo = {
  value: 2,
  bar: function () {
    return this.value;
  }
}


console.log((false || foo.bar)()); // 1


function showThis(){
    console.log(this === globalThis, this)
}
showThis()