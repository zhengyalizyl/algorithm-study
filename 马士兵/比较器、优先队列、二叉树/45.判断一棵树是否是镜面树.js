// https://leetcode.cn/problems/symmetric-tree/
// 101. 对称二叉树
// 给你一个二叉树的根节点 root ， 检查它是否轴对称。

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
  return isMirror(root,root)
};

function isMirror(h1,h2){
 if(h1===null&&h2===null){
     return true;
 }
 if(h1===null||h2===null){
     return false
 }

 return h1.val===h2.val&&isMirror(h1.left,h2.right)&&isMirror(h1.right,h2.left)
}