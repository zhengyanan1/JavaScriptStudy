var a = 1;
console.log(a);
function isFish(animal) {
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}
var cat = {
    name: "cat",
    run: function () {
        console.log("hello");
    }
};
console.log(cat instanceof Fish);
