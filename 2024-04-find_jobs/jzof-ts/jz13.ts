
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param threshold int整型 
 * @param rows int整型 
 * @param cols int整型 
 * @return int整型
 */
export function movingCount(threshold: number, rows: number, cols: number): number {
    // write code here
    const visit: boolean[][] = [];

    for(let i = 0; i < rows; i++){
        visit[i] = [];

        for(let j = 0; j < cols; j++){
            visit[i][j] = false;
        }
    }

    tryVisit(visit, threshold, rows, cols, 0, 0);

    let countOfCanVisit = 0;
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            countOfCanVisit += visit[i][j] ? 1 : 0;
        }
    }

    return countOfCanVisit;
}

// 一个数字的各位之和
function cal(num: number): number{
    const nums = num.toString().split('').map(bit => parseInt(bit));

    return nums.reduce((accumulator, current) => accumulator + current)
}

function canVisit(i: number, j:number, threshold: number): boolean{
    const iNum = cal(i);
    const jNum = cal(j);

    return iNum + jNum <= threshold;
}

function tryVisit(visit: boolean[][], threshold: number, rows: number, cols: number, currentX: number, currentY: number): void{
    if(currentX < 0 || currentX >= rows || currentY < 0 || currentY >= cols 
            || visit[currentX][currentY] 
            || !canVisit(currentX, currentY, threshold)){
        return;
    }
    visit[currentX][currentY] = true;

    tryVisit(visit, threshold, rows, cols, currentX + 1, currentY);
    tryVisit(visit, threshold, rows, cols, currentX, currentY + 1);
    tryVisit(visit, threshold, rows, cols, currentX - 1, currentY);
    tryVisit(visit, threshold, rows, cols, currentX, currentY - 1);
}



// console.log(movingCount(1, 2, 3));
// console.log(movingCount(0, 1, 3));
// console.log(movingCount(10, 1, 100));
// console.log(movingCount(5, 10, 10));

