/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param matrix char字符型二维数组 
 * @param word string字符串 
 * @return bool布尔型
 */
export function hasPath(matrix: string[][], word: string): boolean {
    // write code here
    const rows = matrix.length, cols = matrix[0].length;
    const visited: boolean[][] = [];
    const result: boolean[] = [];

    for(let i = 0; i < rows; i++){
        visited[i] = [];
        for(let j = 0; j < cols; j++){
            visited[i][j] = false;
        }
    }


    let hasPath = false;
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){  
            visit(matrix,  visited, i, j, rows, cols,word, 0, result);
            hasPath = hasPath || result[0];

            if(hasPath){
                return hasPath;
            }
        }
    }

    return hasPath
    
}

function visit(matrix: string[][], visited: boolean[][], i:number, j: number, rows: number, cols: number, word: string, curIndex: number, result: boolean[] ){
    if(i < 0 || i >= rows || j < 0 || j >= cols || visited[i][j] || curIndex >= word.length || matrix[i][j] != word.charAt(curIndex)){
        return;
    }

    visited[i][j] = true;

    if(curIndex === word.length - 1){
        result[0] = true;
    }

    visit(matrix, visited, i + 1, j, rows, cols, word, curIndex + 1, result);
    visit(matrix, visited, i, j + 1, rows, cols, word, curIndex + 1, result);
    visit(matrix, visited, i - 1, j, rows, cols, word, curIndex + 1, result);
    visit(matrix, visited, i, j - 1, rows, cols, word, curIndex + 1, result);

    visited[i][j] = false;
}


// test case1:
console.log(hasPath([['a','b','c','e'],['s','f','c','s'],['a','d','e','e']],"abcced"));