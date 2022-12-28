// 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
// 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
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
    order(root.right, ans, k + 1)

}
var levelOrder = function(root) {
    let k = 0; //代表层级,表示从第一层级开始，即是根结点开始
    let ans = [];
    order(root, ans, k)
    return ans
};