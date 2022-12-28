// 给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。
// https://leetcode.cn/problems/binary-tree-postorder-traversal/

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

var postOrder = function(root, ans) {
    if (!root) return []
    postOrder(root.left, ans);
    postOrder(root.right, ans);
    ans.push(root.val);
}

var postorderTraversal = function(root) {
    //第一种方法，采用递归，后序遍历是根结点在最后，左右根，先递归左边，再递归右边，最后递归根
    let ans = [];
    postOrder(root, ans);
    return ans
};