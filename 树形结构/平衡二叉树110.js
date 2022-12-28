// 给定一个二叉树，判断它是否是高度平衡的二叉树。

// 本题中，一棵高度平衡二叉树定义为：

// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。


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
var getHeight = function(root, ) {
    //获取树高，并且判断是不是平衡树
    if (!root) { return 0 }
    let left = getHeight(root.left);
    let right = getHeight(root.right);
    console.log(left, right);
    //因为不平衡树是返回-2,如果左边是不平衡，则返回的数为-2
    if (left < 0 || right < 0) { return -2 }
    if (Math.abs(left - right) > 1) { return -2 }
    return Math.max(left, right) + 1; //这里需要计算其树的高度=左边或者右边的高度+root(根结点)
}

var isBalanced = function(root) {
    return getHeight(root) >= 0
};