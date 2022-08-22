/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param str string字符串 
 * @param pattern string字符串 
 * @return bool布尔型
 */
 function match( str ,  pattern ) {
    // 添加辅助头，这样就不用处理空字符串的情况
    str = "a" + str
    pattern = "a" + pattern

    const rows = str.length, cols = pattern.length
    let dp = new Array(rows).fill(null).map(()=>{ return new Array(cols).fill(false)}) 
    // dp[i][j] => str[0, i] 和pattern[0, j] 是否match
    
    dp[0][0] = true
    for(let i = 1; i < rows; i++){
        dp[i][0] = false
    }
    for(let i = 1; i < cols; i++){
        const curChar = pattern[i]
        if(curChar === '*'){
            dp[0][i] = dp[0][i - 2]
        }
        else{ // a-z and .
            dp[0][i] = false
        }
    }

    for(let i = 1; i < rows; i++){
        for(let j = 1; j < cols; j++){
            if(pattern[j] === str[i]){// a-z
                dp[i][j] = dp[i - 1][j - 1]
            }
            else if(pattern[j] === '.'){
                dp[i][j] = dp[i - 1][j - 1]
            }
            else if(pattern[j] === '*'){
                const targetChar = pattern[j - 1]
                if(targetChar === str[i] || targetChar === '.'){ // 可以匹配0次 或 多次
                    dp[i][j] = dp[i - 1][j] || dp[i][j - 2]
                }
                else{ //  只能匹配0次
                    dp[i][j] = dp[i][j - 2]
                }
            }
            else{
                dp[i][j] = false
            }
        }
    }


    return dp[rows - 1][cols - 1]
}
module.exports = {
    match : match
};

console.log( new Array(5).fill(null).map(()=>{ return new Array(3).fill(false)}))
console.log(match("aaa", "aa*"))