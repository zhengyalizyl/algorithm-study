// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。

// 叶子节点 是指没有子节点的节点。

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/path-sum


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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) { return false }
    //先从左边找，然后从右边找，看有没有满足targetSum的
    let k = targetSum - root.val;
    //假设刚好是根结点
    if (!root.left && !root.right) {
        return k == 0
    }
    if (hasPathSum(root.left, k) != 0) { //如果左边从根到叶子结点(从根到首层)已经满足了，如果为0,说明还未循环到也节点的末尾
        return true
    }

    if (hasPathSum(root.right, k) != 0) { //如果右边从根到叶子结点(从根到首层)已经满足了，如果为0,说明还未循环到也节点的末尾
        return true
    }

    return false
};