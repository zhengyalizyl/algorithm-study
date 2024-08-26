// https://leetcode.cn/problems/binary-tree-maximum-path-sum/description/
// 二叉树中的 路径 被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。

// 路径和 是路径中各节点值的总和。

// 给你一个二叉树的根节点 root ，返回其 最大路径和 。

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
 * @return {number}
 */
let res=Number.MIN_SAFE_INTEGER; // 最大路径和
var maxPathSum = function(root) {
  res=Number.MIN_SAFE_INTEGER; 
  help(root);
  return res
};

function help(root){
    if(root==null){
        return 0;
    }
    const left=help(root.left);//// 左子树提供的最大路径和
    const right=help(root.right);//// 右子树提供的最大路径和
    const sum=left+root.val+right;
    res=Math.max(sum,res);
    const temp= root.val+Math.max(0,left,right)//// 当前子树对外提供的最大和
     return Math.max(0,temp)
}

