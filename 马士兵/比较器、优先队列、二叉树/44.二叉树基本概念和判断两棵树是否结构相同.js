// https://leetcode.cn/problems/same-tree/
// 100. 相同的树
// 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。

// 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

function isSameTree(p,q){
  if(p===null&&q!==null||p!==null&&q===null){
    return false;
  }

  if(p===null&&q===null){
    return true;
  }

  return p.val===q.val&&isSameTree(p.left,q.left)&&isSameTree(p.right,q.right);
}