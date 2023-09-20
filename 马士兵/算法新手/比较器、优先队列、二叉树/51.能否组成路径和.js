// https://leetcode.cn/problems/path-sum/

// 112. 路径总和

// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。

// 叶子节点 是指没有子节点的节点。

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
  if(root ==null){
      return  false
  }
  return process(root,targetSum)
};

function  process (root,rest){
   if(root.left===null&&root.right==null){//说明其叶子没有左边和右边的值
       return root.val ==rest; 
   }
   let ans= root.left!=null?process(root.left,rest-root.val):false;//说明有一个已经为null，另一个可能有可能没有
   let ans2= root.right!=null?process(root.right,rest-root.val):false;
   return ans||ans2
}


