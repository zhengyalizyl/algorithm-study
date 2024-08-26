//https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/

// 106. 从中序与后序遍历序列构造二叉树

// 给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

var buildTree = function(inorder, postorder) {
    return build(inorder,0,inorder.length-1,postorder,0,postorder.length-1)
};
//inorder = [15, 9, 10, 3, 20, 5, 7, 8, 4]
//postorder = [15, 10, 9, 5, 4, 8, 7, 20, 3]
//通过第一轮instart=0,index=3,leftTreeSize=3
//通过个数来划分
//inorder leftTree 15, 9, 10, rightTree 20, 5, 7, 8, 4
// postorder  lefttree 15, 10, 9 rightTree 4, 8, 7, 20
function build(inorder,instart,inEnd,postorder,poststart,postEnd){
     if(instart>inEnd){
        return null
     }
     const rootVal=postorder[postEnd];
     const index = inorder.indexOf(rootVal)       // 获取到它在inorder数组中的位置
     
     const leftTreeSize = index-instart;//instart=0;index=3,leftTreeSize=3
     const leftTree=build(inorder,instart,index-1,postorder,poststart,poststart+leftTreeSize-1);
     const rightTree=build(inorder,index+1,inEnd,postorder,poststart+leftTreeSize,postEnd-1);
     return new TreeNode(rootVal,leftTree,rightTree)
}