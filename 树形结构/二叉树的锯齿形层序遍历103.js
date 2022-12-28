// 给你二叉树的根节点 root ，返回其节点值的 锯齿形层序遍历 。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
//https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/给你二叉树的根节点 root ，返回其节点值 自底向上的层序遍历 。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

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
var zigzagLevelOrder = function(root) {
    let k = 0;
    let ans = [];
    order(root, ans, k);
    //1,3,5是倒序
    for (let i = 1; i < ans.length; i += 2) {
        let temp = ans[i];
        for (let j = 0, k = temp.length - 1; j < k; j += 1, k -= 1) {
            let temp2 = temp[j];
            temp[j] = temp[k];
            temp[k] = temp2;
        }
    }
    return ans
};