






function minChanges(n: number, k: number): number {
    const target = n ^ k;

    let count = 0;
    for(let i = 0; i < 32; i++){
        const cur = 1 << i;
        if((cur & target) !== 0){
            if( (cur & n) !== 0){
                count++;
            }else{
                return -1;
            }
        } 
    }

    return count;
};

console.log(minChanges(13, 4));
console.log(minChanges(21, 21));
console.log(minChanges(14, 13));
