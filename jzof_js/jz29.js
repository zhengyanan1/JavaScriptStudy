
const DIRECTIONS = {
    GoRight : 0, 
    GoBottom: 1, 
    GoLeft: 2,
    GoTop: 3
}
function printMatrix(matrix)
{
    if(matrix.length === 0) return []
    if(matrix.length === 1) return matrix[0]

    const rows = matrix.length, cols = matrix[0].length
    let left = 0, right = cols - 1, top = 0, bottom = rows - 1
    
    let result = []
    let direction = GoRight
    while(left <= right && top <= bottom){
        switch(direction){
            case DIRECTIONS.GoRight:
                for(let i = left; i <= right; i++){
                    result.push(matrix[top][i])
                }    
                top++;
                direction = DIRECTIONS.GoBottom
                break;
            case DIRECTIONS.GoBottom:
                for(let i = top; i <= bottom; i++){
                    result.push(matrix[i][right])
                } 
                right--;
                direction = DIRECTIONS.GoLeft
                break;
            case DIRECTIONS.GoLeft:
                for(let i = right; i >= left; i--){
                    result.push(matrix[bottom][i])
                }   
                bottom--;
                direction = DIRECTIONS.GoTop
                break;
            case DIRECTIONS.GoTop:
                for(let i = bottom; i >= top; i--){
                    result.push(matrix[i][left])
                } 
                left++;
                direction = DIRECTIONS.GoRight
                break;
        }
    }

    return result;
    // write code here
}
module.exports = {
    printMatrix : printMatrix
};