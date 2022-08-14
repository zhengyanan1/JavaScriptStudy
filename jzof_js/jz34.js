function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function FindPath(root, expectNumber)
{
    if(expectNumber === 0)  return []
    if(root === null)   return []

    let path = []
    let result = []
    visitDepthFirst(root, path, 0, expectNumber, result)

    return result
}

function visitDepthFirst(root, path, sum, expectNumber, result){
    //visit root
    path.push(root.val)
    sum += root.val

    if(isLeaf(root)){
        if(sum === expectNumber){
            result.push(Array.from(path))
        }
    }
    else{
        visitDepthFirst(root.left, path, sum, expectNumber, result)

        visitDepthFirst(root.right, path, sum, expectNumber, result)
    }

    path.pop()
    sum -= root.val
}

function isLeaf(root){
    return root.left === null && root.right === null
}

module.exports = {
    FindPath : FindPath
};

console.log(12 && 2)