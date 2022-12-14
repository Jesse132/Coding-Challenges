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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let result =[];
    if(root === null) return result;

    let traverse = function(root){
        if(root ===null){
            return;
        }
        traverse(root.left)
        result.push(root.val)
        traverse(root.right)
    }
    
    traverse(root)
    return result;
    
};