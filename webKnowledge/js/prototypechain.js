// function Parent() {
//     this.name = 'parent1';
//     this.play = [1, 2, 3]
//   }
//   function Child() {
//     this.type = 'child2';
//   }
//   Child.prototype = new Parent();
//   console.log(new Child())

// var s1 = new Child();
// var s2 = new Child();
// s1.play.push(4);
// console.log(s1.play, s2.play);
// console.log(s1.__proto__)


function Parent(){
    this.name = 'parent1';
}

Parent.prototype.getName = function () {
    return this.name;
}

function Child(){
    Parent.call(this);
    this.type = 'child'
}
Child.prototype.__proto__ = Parent.prototype

let child = new Child();
console.log(child);  // 没问题
console.log(child.getName());  // 会报错