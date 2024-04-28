name = "lucy";
var obj = {
    name: "martin",
    say: function () {
        console.log(this);
        console.log(this.name);
    }
};
obj.say(); // martin，this 指向 obj 对象
setTimeout(obj.say, 1); // lucy，this 指向 window 对象