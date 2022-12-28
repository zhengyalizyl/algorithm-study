// 给你二叉树的根节点 root ，返回其节点值 自底向上的层序遍历 。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

// https://leetcode.cn/problems/binary-tree-level-order-traversal-ii/
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
 * @return {number[][]}
 */

var order = function(root, ans, k) {
    if (!root) { return [] }
    if (k == ans.length) {
        ans[k] = [];
    }
    ans[k].push(root.val);
    order(root.left, ans, k + 1);
    order(root.right, ans, k + 1);
}
var levelOrderBottom = function(root) {
    //先从上到下循环
    let k = 0;
    let ans = [];
    order(root, ans, k);
    //进行倒序
    for (let i = 0, j = ans.length - 1; i < j; i += 1, j -= 1) {
        let temp = ans[i];
        ans[i] = ans[j];
        ans[j] = temp;
    }
    return ans
};