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
var preorderTraversal = function(root) {
    let result = [];
    
    let bfs=function(root){
            if(root === null){
                return;
            }
            result.push(root.val)
            if(root.left !==null) bfs(root.left)
            if(root.right !==null) bfs(root.right)  
    }
    bfs(root)
    return result;
};