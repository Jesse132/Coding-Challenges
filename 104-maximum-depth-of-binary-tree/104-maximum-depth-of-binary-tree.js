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
var maxDepth = function(root) {
    if(root === null) return 0;
    let length=0;
    let traverse=function(root,sum){
        sum++
        if(root.left === null && root.right === null){
            length=Math.max(length, sum)
            return;
        }
        if(root.left) traverse(root.left, sum)
        if(root.right) traverse(root.right, sum)
    }
    traverse(root, 0)
    return length;
};