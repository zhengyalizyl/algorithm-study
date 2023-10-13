// https://leetcode.cn/problems/balanced-binary-tree/

// 110. 平衡二叉树
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
 //这个题目的关键还是求其一棵树的最大深度
 var isBalanced = function(root) {
  if(root===null){
      return true
  }
  //只有左右个平衡了，并且高度的绝对值不超过1
  return  isBalanced(root.left)&&isBalanced(root.right)&&Math.abs(getHeight(root.left)-getHeight(root.right))<=1
};

function getHeight(root){
   if(root==null){return 0}
   return Math.max(getHeight(root.left),getHeight(root.right))+1
}



// 方法二：基于递归套路
// 【思路分析】针对任意一棵子树X，判断是否平衡二叉树，需要从左右子树收集以下信息：

// ① 是否平衡二叉树——首先，左右子树需要保证是平衡的
// ② 树高——其次，左右子树树高差绝对值小于等于1

function isBalancedByDef(root) {
  if (root == null) {
    return true;
  }
  return process(root).is
}

function process(root) {
  if (root == null) {
    return {
      is: true,
      height: 0
    }
  }
  let leftInfo = process(root.left);
  let rightInfo = process(root.right);

  let is = leftInfo.is && rightInfo.is && Math.abs((leftInfo.height - rightInfo.height)) <= 1;
  let height = Math.max(leftInfo.height, rightInfo.height) + 1;
  return {
    is,
    height,
  }
}




