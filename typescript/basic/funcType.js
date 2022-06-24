function sum(x, y) {
    return x + y;
}
sum(1, 2, 3);
sum(1);
var mySum = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
function buildName(firstName, lastName) {
    if (firstName) {
        return firstName + ' ' + lastName;
    }
    else {
        return lastName;
    }
}
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
console.log(reverse(123));
console.log(reverse("abcd"));
