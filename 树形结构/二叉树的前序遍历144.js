// 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
// https://leetcode.cn/problems/binary-tree-preorder-traversal/

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

var order = function(root, ans) {
    if (!root) { return [] };
    ans.push(root.val)
    order(root.left, ans);
    order(root.right, ans);
}

var preorderTraversal = function(root) {
    //先遍历根，左，右
    let ans = [];
    order(root, ans)
    return ans
};