// 给定一个 n 叉树的根节点  root ，返回 其节点值的 前序遍历 。

// n 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔（请参见示例）。



// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/n-ary-tree-preorder-traversal



/* @param {Node|null} root
 * @return {number[]}
 */

var order = function(root, ans) {
    if (!root) { return [] }
    ans.push(root.val)
        //先遍历根，再遍历左边，最后遍历右边
    for (let i in root.children) {
        order(root.children[i], ans)
    }
    return ans
}

var preorder = function(root) {
    let ans = [];
    ans = order(root, ans);
    return ans
};