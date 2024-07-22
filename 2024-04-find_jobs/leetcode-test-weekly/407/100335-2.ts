


function doesAliceWin(s: string): boolean {
    const KEYS = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true
    };

    let count = 0;
    for(let one of s){
        if(one in KEYS){
            count++;
        }
    }
    if(count === 0) return false;
    return true;
};

console.log(doesAliceWin('bbcd'));
console.log(doesAliceWin("ifld"));

