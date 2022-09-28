/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(root === null) return 0
   let min=Infinity;
    
    let dfs=function(root, sum){
        sum++
        if(root.left === null && root.right === null){
            min=Math.min(min, sum)
            return
        }
        if(root.left) dfs(root.left, sum)
        if(root.right) dfs(root.right, sum)
    }
    dfs(root, 0)
    return min;
};