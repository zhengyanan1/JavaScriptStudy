function TreeNode(x) {
   this.val = x;
   this.left = null;
   this.right = null;
}

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param proot TreeNode类 
 * @param k int整型 
 * @return int整型
 */
 function KthNode( proot ,  k ) {
    
    let helper = [0, -1]  // [0] visitCount; [1] target
    searchInOrder(proot, k, helper)

    return helper[1]
}

function searchInOrder(proot, k, helper){
    if(proot == null)       return
    if(helper[1] != -1)     return

    if(proot.left)  searchInOrder(proot.left, k, helper)

    //visit proot
    helper[0]++
    if(helper[0] === k){
        helper[1] = proot.val
        return
    }

    if(proot.right) searchInOrder(proot.right, k, helper)
}


module.exports = {
    KthNode : KthNode
};

