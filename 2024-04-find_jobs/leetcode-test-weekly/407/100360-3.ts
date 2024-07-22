


function maxOperations(s: string): number {
    const parts = s.split(/0+/g);
    
    let maxCount = 0;
    for(let i = 0; i < parts.length; i++){
        maxCount += parts[i].length * (parts.length - 1 - i);
    }

    return maxCount;
};

console.log(maxOperations('1001101'));
console.log(maxOperations('1001110'));

