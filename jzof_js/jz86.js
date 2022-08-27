function TreeNode(x) {
    this.val = x;
    this.left = null;
   this.right = null;
 }

function lowestCommonAncestor( root ,  p ,  q ) {
    let path1 = [], path2 = []
    findPath(root, p, path1, [false])
    findPath(root, q, path2, [false])

    let i = 0;
    while(i < path1.length && i < path2.length){
        if(path1[i] != path2[i])    break
        i++
    }

    if(i < path1.length && i < path2.length)    return path1[i - 1].val

    if(i === path1.length)  return path1[path1.length - 1].val
    return path2[path2.length - 1].val
}

function findPath(root, p, path, finish){
    if(root == null || finish[0])    return

    //visit root
    path.push(root.val)
    if(p == root.val){
        finish[0] = true
        return
    }

    if(root.left)   findPath(root.left, p, path, finish)
    if(root.right)  findPath(root.right, p, path, finish)

    path.pop()
}

module.exports = {
    lowestCommonAncestor : lowestCommonAncestor
};