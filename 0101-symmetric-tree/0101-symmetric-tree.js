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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let checkMirror=function(left, right){
        if(left === null && right === null) return true
        if(left === null || right === null ) return false
        return(left.val === right.val)&&checkMirror(left.left, right.right)&&checkMirror(left.right, right.left)
    }
    return checkMirror(root.left, root.right)
};