function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}


/**
  * 
  * @param root TreeNode类 
  * @param sum int整型 
  * @return bool布尔型
  */
function hasPathSum( root ,  sum ) {
    let result = [false]

    searchByInOrder(root, 0, sum, result)

    return result[0]
}

function searchByInOrder(cur, currentSum, sum, result){
    if(cur == null || result[0]) return

    // visited root
    currentSum += cur.val

    if(cur.left == null && cur.right == null){
        if(currentSum === sum)  result[0] = true
        return
    }

    if(cur.left)    searchByInOrder(cur.left, currentSum, sum, result)
    if(cur.right)   searchByInOrder(cur.right, currentSum, sum, result)
}
module.exports = {
    hasPathSum : hasPathSum
};