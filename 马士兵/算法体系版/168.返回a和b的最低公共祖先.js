// https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/
// 236. 二叉树的最近公共祖先

// 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

/**
 *  与x无关，也就是x不是最低汇聚点：
 *  1. 左子树有答案
 *  2. 右子树有答案
 *  3. 左子树和右子树的答案不全
 *  与x有关
 *  1. 左子树发现了一个，右子树发现一个
 *  2. x本身就是a节点，左右子树中有一个b
 *  3. x本身就是b节点，左右子树中有一个a
 */
function lowestCommonAncestor (root, a,b){
  return process(root,a,b).ans
}

function process(root,a,b){
   if(root==null){
     return {
       findA:false,
       findB:false,
       ans:null
     }
   }
   let leftInfo =process(root.left,a,b);
   let rightInfo =process(root.right,a,b);
   let findA =(root==a)||leftInfo.findA||rightInfo.findA;
   let findB=(root==b)||leftInfo.findB|| rightInfo.findB;
   let ans=null;
   if(leftInfo.ans!=null){
    ans =leftInfo.ans;
   }else if(rightInfo.ans!=null){
    ans=rightInfo.ans;
   }else{
     if(findA&&findB){
      ans =root;
     }
   } 

  return   {
     findA,
     findB,
     ans
  }
}
