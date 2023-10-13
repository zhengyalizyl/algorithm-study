// 层序遍历，其实就是图的宽度优先遍历
var levelOrder = function(root) {
  if(root==null){
      return []
  }
  let res=[];
  res.push(root);
  while(res.length>0){
      let node=res.shift();
       console.log(node.val);//缺点但是不知道怎么哪一层结束了
      if(node.left!=null){
          res.push(node.left);
      }
        if(node.right!=null){
          res.push(node.right);
      }
  }
}


// 层序遍历-基于递归
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


// https://leetcode.cn/problems/binary-tree-level-order-traversal/description/
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
var levelOrder1 = function(root) {
  //先从上到下循环
  let k = 0;
  let ans = [];
  order(root, ans, k);
  return ans
};


var levelOrder =function(root){
if(!root){return []};
let queue=[];
  queue.push(root);
 let result =[];

  //开始循环
  while(queue.length){
    let tmpQueue =[];
    let tmpResult =[];
    let len =queue.length;//必须在循环前先获取其值，因为后面的是queue会发生变化，其长度会发生变化
    for(let i=0;i<len;i+=1){
      let node =queue.shift();
      tmpResult.push(node.val);
      node.left&&tmpQueue.push(node.left);
      node.right && tmpQueue.push(node.right)
    }

    //循环完毕后
    result.push(tmpResult);
    tmpResult=[];
    queue = tmpQueue;
  }
  return result
}
