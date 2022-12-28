// 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。

// https://leetcode.cn/problems/invert-binary-tree/

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
 * @return {TreeNode}
 */

var invert = function(root) {
    if (!root) { return root };
    let temp = root.left;
    root.left = root.right;
    root.right = temp
    invert(root.right, );
    invert(root.left)
}
var invertTree = function(root) {
    invert(root)
    return root
};