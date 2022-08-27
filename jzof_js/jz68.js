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
 * @param p int整型 
 * @param q int整型 
 * @return int整型
 */
function lowestCommonAncestor( root ,  p ,  q ) {
    let path1 = findPath(root, p)
    let path2 = findPath(root, q)

    let i = 0;
    while(i < path1.length && i < path2.length){
        if(path1[i] != path2[i])    break
        i++
    }

    if(i < path1.length && i < path2.length)    return path1[i - 1].val

    if(i === path1.length)  return path1[path1.length - 1].val
    return path2[path2.length - 1].val
}

function findPath(root, p){
    let path = []
    let cur = root

    while(cur){
        path.push(cur)

        if(p < cur.val)         cur = cur.left
        else if(p.val === cur.val)  break
        else                        cur = cur.right
    }

    return path
}


module.exports = {
    lowestCommonAncestor : lowestCommonAncestor
};