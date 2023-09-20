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
// DFS，深度遍历一般伴随着回溯
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
         arr.push([...path]); //这里为什么要深拷贝？如果浅拷贝，这里的arr加入的是的最后的path，会把前面的arr里面的数据覆盖掉
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



// https://leetcode.cn/problems/path-sum-iii/
// 437. 路径总和 III
// 给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。

// 路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

var pathSum = function(root, targetSum) {
  if(root==null){
      return 0;
  }
  let arr=[];
  let path=[];
  process(root,targetSum,arr,path);
  return arr.length + pathSum(root.left, targetSum) + pathSum(root.right, targetSum);
};
function process(root,rest,arr,path){
  if(root===null) return
  path.push(root.val);//首先将路径放过去，不管满不满足
  if(root.val===rest){
      //此时，如果满足，则就将数据放在arr上
      arr.push([...path]); //这里为什么要深拷贝？防止后面的path改变，导致arr其它的数据发生改变
  }
  if(root.left!==null){
      process(root.left,rest-root.val,arr,path);
      //去掉path,这里要回到节点的上一个节点上去
      path.pop() ;// 回溯,
  }

  if(root.right!==null){
      process(root.right,rest-root.val,arr,path);
      //去掉path
      path.pop();// 回溯
  }
}
