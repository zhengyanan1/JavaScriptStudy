/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param matrix char字符型二维数组 
 * @param word string字符串 
 * @return bool布尔型
 */
 function hasPath( matrix ,  word ) {
    // write code here
    const rows = matrix.length
    if(rows == 0)   return false
    const columns = matrix[0].length
    
    let visited = new Array(rows).fill().map(()=> new Array(columns).fill(false))
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            if(dfs(matrix, visited, i, j, rows, columns, 0, word))   return true
        }
    }

    return false
}

const DIRECTIONS = [{x:-1, y: 0},{x:1, y: 0},{x:0, y: -1},{x:0, y: 1},]
function dfs(matrix, visited, curRow, curCol, rows, cols, currentIndex, word){
    if(curRow < 0 || curRow >= rows || curCol < 0 || curCol >= cols || visited[curRow][curCol])    return false
    if(matrix[curRow][curCol] != word[currentIndex])    return false

    //visit
    visited[curRow][curCol] = true
    if(currentIndex == word.length - 1) return true


    for(let i = 0; i < DIRECTIONS.length; i++){
        const direction = DIRECTIONS[i]
        if(dfs(matrix, visited, curRow + direction.x, curCol + direction.y, rows, cols, currentIndex + 1, word))    return true
    }
     
    visited[curRow][curCol] = false
    return false
    
}
module.exports = {
    hasPath : hasPath
};