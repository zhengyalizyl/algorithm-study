/**
 * N叉树如何通过二叉树来序列化、并完成反序列化，测试链接：https://leetcode.cn/problems/encode-n-ary-tree-to-binary-tree/
 */

function Node(val, children) {
  this.val = val;
  this.children = children;
};
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

// 编码方案：让每个节点的子节点，都挂在左子树的右边界上

