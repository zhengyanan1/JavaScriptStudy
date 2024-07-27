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
 * 
 * @param root TreeNode类 
 * @param sum int整型 
 * @return int整型
 */
export function FindPath(root: TreeNode, sum: number): number {
    if(!root)   return 0;
    // write code here
    const map: Map<TreeNode, Map<number, number>> = new Map<TreeNode, Map<number, number>>();
    const path: TreeNode[] = [];

    const result = [0];
    // version1:遍历两遍：先计算以每个结点为终点的countMap，再计算==sum的有多少
    // prefixVisit(root, path, map);
    // calculateTargetCount(root, map, sum,result);
    
    // version2:一遍
    prefixVisit2(root, path, map, sum, result);

    return result[0];
}

function prefixVisit2(root: TreeNode, path: TreeNode[],  map: Map<TreeNode, Map<number, number>>, sum: number, result: number[]):void{
    if(!root)   return;

    const countMap = new Map<number, number>();
    if(path.length === 0){
        countMap.set(root.val, 1);
    }
    else{
        const parentCountMap = map.get(path[path.length - 1]);
        parentCountMap.forEach((value, key)=>{
            countMap.set(key + root.val, value);
        });
        const countEqualsRoot = countMap.get(root.val) || 0;
        countMap.set(root.val, countEqualsRoot + 1);
    }
    result[0] += countMap.get(sum) || 0;
    map.set(root, countMap);

    path.push(root);
    root.left && prefixVisit2(root.left, path, map, sum, result);
    root.right && prefixVisit2(root.right, path, map, sum, result);
    path.pop();
}

function prefixVisit(root: TreeNode, path: TreeNode[],  map: Map<TreeNode, Map<number, number>>):void{
    if(!root)   return;

    const countMap = new Map<number, number>();
    if(path.length === 0){
        countMap.set(root.val, 1);
    }
    else{
        const parentCountMap = map.get(path[path.length - 1]);
        parentCountMap.forEach((value, key)=>{
            countMap.set(key + root.val, value);
        });
        const countEqualsRoot = countMap.get(root.val) || 0;
        countMap.set(root.val, countEqualsRoot + 1);
    }
    map.set(root, countMap);

    path.push(root);
    root.left && prefixVisit(root.left, path, map);
    root.right && prefixVisit(root.right, path, map);
    path.pop();
}

function calculateTargetCount(root: TreeNode, map: Map<TreeNode, Map<number, number>>, sum:number, result: number[]){
    const countMap = map.get(root);
    countMap.forEach((value, key)=>{
        if(key === sum){
            result[0] += value;
        }
    });

    root.left && calculateTargetCount(root.left, map, sum, result);
    root.right && calculateTargetCount(root.right, map, sum, result);
}
