/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxSum = function(grid) {
    const ROWS = grid.length
    const COLS = grid[0].length

    let result = 0
    for(let i = 0;  i <= ROWS - 3; i++){
        for(let j = 0; j <= COLS - 3; j++){
            let curSum = calculateSum(grid, i ,j)
            result = Math.max(result, curSum)
        }
    }

    return result
};

function calculateSum(grid, startRow, startCol){
    let sum = 0
    for(let i = startRow; i < startRow + 3; i++){
        for(let j = startCol; j < startCol + 3; j++){
            sum += grid[i][j]
        }
    }
    sum -= grid[startRow + 1][startCol]
    sum -= grid[startRow + 1][startCol + 2]
    
    return sum
}

// grid = [[6,2,1,3],[4,2,1,5],[9,2,8,7],[4,1,2,9]]
grid = [[1,2,3],[4,5,6],[7,8,9]]
var name = 'harden'
console.log(maxSum(grid))