
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param matrix int整型二维数组 
 * @return int整型一维数组
 */
export function printMatrix(matrix: number[][]): number[] {
    let rows = matrix.length;
    if(rows == 0)   return []
    let cols = matrix[0].length;
    if(cols == 0)   return [];
    
    const result = [];
    // 0:左=>右；1上=>下；2右=>左；3:下到上
    let FLAG = 0;
    let left = 0, right = cols - 1, top = 0, bottom = rows - 1;
    while(left <= right && top <= bottom){
        switch(FLAG){
            case 0:
                for(let i = left; i <= right; i++){
                    result.push(matrix[top][i]);
                }
                top++;
                break;
            case 1:
                for(let i = top; i <= bottom; i++){
                    result.push(matrix[i][right]);
                }
                right--;
                break;
            case 2:
                for(let i = right; i >= left; i--){
                    result.push(matrix[bottom][i]);
                }
                bottom--;
                break;
            case 3:
                for(let i = bottom; i >= top; i--){
                    result.push(matrix[i][left]);
                }
                left++;
                break;
        }
        FLAG = (FLAG + 1) % 4;
    }

    return result;

}

console.log(printMatrix([[1,2,3,1],[4,5,6,1],[4,5,6,1]]))