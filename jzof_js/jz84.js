function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}


/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param root TreeNode类 
 * @param sum int整型 
 * @return int整型
 */
 function FindPath( root ,  sum ) {
    if(root == null)    return 0

    let result = [0]
    let currentSums = []
    searchByInOrder(root, currentSums, sum, result)

    return result[0]
}

function searchByInOrder(cur, currentSums, sum, count){
    // visited root
    for(let i = 0; i < currentSums.length; i++){
        currentSums[i] += cur.val
        if(currentSums[i] === sum)  count[0]++
    }
    currentSums.push(cur.val)
    // if(cur.val === sum) count[0]++

    if(cur.left)    searchByInOrder(cur.left, currentSums, sum, count)
    if(cur.right)   searchByInOrder(cur.right, currentSums, sum, count)

    // undo visit
    currentSums.pop()
    for(let i = 0; i < currentSums.length; i++){
        currentSums[i] -= cur.val
    }
}

module.exports = {
    FindPath : FindPath
};