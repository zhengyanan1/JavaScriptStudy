function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function Convert(pRootOfTree)
{
    if(pRootOfTree === null)    return null

    let preNodes = [] // 存储最近访问的一个节点
    ConvertByInOrder(pRootOfTree, preNodes)

    let p = preNodes[0]
    while(p.left)   p = p.left
    return p //最右侧的头
}

function ConvertByInOrder(pRoot, preNodes){
    if(pRoot === null)  return

    ConvertByInOrder(pRoot.left, preNodes)

    // visited actions:
    if(preNodes.length > 0){ // len == 1
        preNodes[0].right = pRoot
        pRoot.left = preNodes[0]

    }
    preNodes[0] = pRoot

    ConvertByInOrder(pRoot.right, preNodes)
}

module.exports = {
    Convert : Convert
};

let root = new TreeNode(10)
let left = new TreeNode(6)
let right = new TreeNode(14)
root.left = left
root.right = right

let result = Convert(root)

let p = result
while(p){
    console.log(p.val)
    p = p.left
}

p = result
while(p.left)   p = p.left
while(p){
    console.log(p.val)
    p = p.right
}


