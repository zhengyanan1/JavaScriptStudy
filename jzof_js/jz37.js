function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function Serialize(pRoot)
{
    if(pRoot === null)  return ""

    let depth = getDepth(pRoot)
    let data = new Array(Math.pow(2, depth)).fill(-1)
    generateArrayData(pRoot, 0, data)    

    return data.join(",")
}

function generateArrayData(pRoot, index, data){
    if(pRoot === null)  return

    data[index] = pRoot.val
    generateArrayData(pRoot.left, index * 2 + 1, data)
    generateArrayData(pRoot.right, index * 2 + 2, data)
}

function getDepth(pRoot){
    if(pRoot === null)          return 0;
    return 1 + Math.max(getDepth(pRoot.left), getDepth(pRoot.right))
}


function Deserialize(s)
{
    if(s === "")    return null
    let data = s.split(',').map((v)=> parseInt(v))

    return generateRoot(data, 0)
}

function generateRoot(data, rootIndex){
    if(rootIndex >= data.length || data[rootIndex] < 0) return null

    let rootNode = new TreeNode(data[rootIndex])

    rootNode.left = generateRoot(data, rootIndex * 2 + 1)
    rootNode.right = generateRoot(data, rootIndex * 2 + 2)
    
    return rootNode
}

module.exports = {
    Serialize : Serialize,
    Deserialize : Deserialize
};

let root = new TreeNode(10)
let left = new TreeNode(6)
let right = new TreeNode(14)
root.left = left
root.right = right


console.log(Deserialize(Serialize(root)))
