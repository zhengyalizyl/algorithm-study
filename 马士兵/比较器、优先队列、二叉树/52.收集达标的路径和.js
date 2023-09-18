// https://leetcode.cn/problems/path-sum-ii/description/
// 113. 路径总和 II
// 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

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
 * @return {number[][]}
 */
let i=0
var pathSum = function(root, targetSum) {
    if(root==null){
        return []
    }
    let arr=[];
    let path=[];
     process(root,targetSum,arr,path);
     return arr;
};

function process(root,rest,arr,path){
     path.push(root.val);//首先将路径放过去
    if(root.left==null&& root.right===null){
        if(root.val===rest){
         arr.push([...path]); //这里为什么要深拷贝？
          return;
        }
       
    }
    if( root.left!=null){
        process(root.left,rest-root.val,arr,path);
        //去掉path,这里要回到节点的上一个节点上去
        path.pop() ;// 回溯
    }
       if( root.right!=null){
        process(root.right,rest-root.val,arr,path);
        //去掉path
        path.pop();// 回溯
    }
}