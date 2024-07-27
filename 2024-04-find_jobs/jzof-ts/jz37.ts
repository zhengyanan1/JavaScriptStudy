class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
 }


/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param root TreeNode类 
 * @return TreeNode类
 */

function getDepth(root: TreeNode): number{
    if(!root){
        return 0;
    }

    return 1 + Math.max(getDepth(root.left), getDepth(root.right));
}

function setData(root: TreeNode, index:number, data: any[]){
    data[index] = root.val;

    root.left && setData(root.left, 2 * index + 1, data);
    root.right && setData(root.right, 2* index + 2, data);
}


export function Serialize(root: TreeNode): string {
    // write code here
    if(root === null)   return ""

    const depth = getDepth(root);
    const data = new Array(Math.pow(2, depth)).fill('#');
    setData(root, 0, data);
    
    return data.join(',');
}

function genTreeNode(index: number, data: any[]): TreeNode{
    if(index >= data.length || data[index] == '#' || data[index] == ''){
        return null;
    }

    const root = new TreeNode(data[index]);
    root.left = genTreeNode(index * 2 + 1, data);
    root.right = genTreeNode(index * 2 + 2, data);
    return root;
}

export function Deserialize(str: string): TreeNode {
  // write code here
  const data = str.split(',');
  
  const root = genTreeNode(0, data);
  return root;
}

/**
 * test case1
 */
let root = new TreeNode(1);
let root2 = new TreeNode(2);
let root3 = new TreeNode(3);
let root4 = new TreeNode(4);
let root5 = new TreeNode(5);

root.left = root2;
root.right = root3;
root2.left = root4;
root4.left = root5;


const str = Serialize(null)
console.log(`***${str}***`);
console.log(Deserialize(str));