// https://leetcode.cn/problems/binary-tree-level-order-traversal/

// 102. 二叉树的层序遍历
// 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。

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
 * @return {number[][]}
 */


var order = function(root, ans, k) {
  if (!root) { return [] }
  if (k == ans.length) { //当其长度等于数组的长度,即每一层的长度如果等于其数组的长度时
      ans[k] = [];
  }
  ans[k].push(root.val);
  order(root.left, ans, k + 1);
  order(root.right, ans, k + 1);
}
var levelOrder = function(root) {
  //先从上到下循环
  let k = 0;
  let ans = [];
  order(root, ans, k);
  return ans
};


var levelOrder =function(root){
  if(!root){return []};
  let queue =[root];
   let result =[];

    //开始循环
    while(queue.length){
      let tmpQueue =[];
      let tmpResult =[];
      let len =queue.length;
      for(let i=0;i<len;i+=1){
        let node =queue.shift();
        tmpResult.push(node.val);
        node.left &&tmpQueue.push(node.left);
        node.right && tmpQueue.push(node.right)
      }

      //循环完毕后
      result.push(tmpResult);
      tmpResult=[];
      queue = tmpQueue;
    }
    return result
}


