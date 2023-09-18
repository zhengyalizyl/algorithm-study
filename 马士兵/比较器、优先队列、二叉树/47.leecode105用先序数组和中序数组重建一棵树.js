// https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

// 105. 从前序与中序遍历序列构造二叉树


// 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if(preorder ===null||inorder==null||preorder.length!==inorder.length){
      return null;
  }
  return f(preorder,0,preorder.length-1,inorder,0,inorder.length-1)
};

//有一棵树，先序的结果是pre[l1...r1],中序的结果是inorder[l2...r2]
//请柬出整棵树返回节点
function f(pre,l1,r1,inorder,l2,r2){
 if(l1>r1){
     return null;
 }
let head =new TreeNode(pre[l1])
 if(l1===r1){
     return head;
 }

 let find =0;
  for(let i=l2;i<=r2;i+=1){
      if(inorder[i]===pre[l1]){
          find =i;
          break;
      }
  }

  head.left=f(pre,l1+1,l1+(find-l2),inorder,l2,find-1);
  head.right =f(pre,l1+(find-l2)+1,r1,inorder,find+1,r2);
  return  head
} 