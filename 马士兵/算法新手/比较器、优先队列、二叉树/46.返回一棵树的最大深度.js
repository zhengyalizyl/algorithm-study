// https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/

// 104. 二叉树的最大深度


// 给定一个二叉树 root ，返回其最大深度。

// 二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。


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
  if(root===null){
    return 0
  }
  let left =maxDepth(root.left);
  let right=maxDepth(root.right);
  return Math.max(left,right)+1
 };