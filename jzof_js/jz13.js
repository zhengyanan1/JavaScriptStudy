function movingCount(threshold, rows, cols)
{
    let visited = new Array(rows).fill().map(()=> new Array(cols).fill(false))
    let result = {count: 0}

    dfs(visited, result, 0, 0, rows, cols, threshold)
    return result.count
}

const DIRECTIONS = [{x:-1, y: 0},{x:1, y: 0},{x:0, y: -1},{x:0, y: 1},]

// result => { count: number}
function dfs(visited, result, curRow, curCol, rows, cols, sumLimit){
    if(curRow < 0 || curCol < 0 || curRow >= rows || curCol >= cols || visited[curRow][curCol])    return
    if(getDigitSum(curRow) + getDigitSum(curCol) > sumLimit)  return

    visited[curRow][curCol] = true
    result.count++

    for(let i = 0; i < DIRECTIONS.length; i++){
        const direction = DIRECTIONS[i]
        dfs(visited, result, curRow + direction.x, curCol + direction.y, rows, cols, sumLimit)
    }
}

function getDigitSum(num){
    let sum = 0
    while(num > 0){
        sum += num % 10
        num = Math.floor(num / 10)
    }
    return sum
}
module.exports = {
    movingCount : movingCount
};