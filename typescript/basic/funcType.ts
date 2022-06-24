function sum(x: number, y:number): number{
    return x + y
}
sum(1, 2, 3)
sum(1)


let mySum = function(x: number, y:number):number{
    return x + y
}


interface SearchFunc{
    (source: string, subString: string): boolean;
}
let mySearch:SearchFunc;
mySearch = function(source: string, subString: string){
    return source.search(subString) !== -1
}


function buildName(firstName?: string, lastName?: string) {
    if (firstName) {
        return firstName + ' ' + lastName;
    } else {
        return lastName;
    }
}


function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

console.log(reverse(123))
console.log(reverse("abcd"))