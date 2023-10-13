//方法一：基于队列 -按层遍历
function isCbt(root){
  if(root==null){
    return true
  }

 let queue = [];
 queue.push(root);
  // 是否遇到过左右两个孩子不双全的节点，即只有左子树、或右子树、或都没有
  let leaf =false;
  while(queue.length>0){
     let node = queue.shift();
     let left= node.left;
     let right = node.right;
     // 1. 如果遇到了不双全的节点之后，又发现当前节点不是叶节点 
     // if (leaf && !(left == null && right == null) 
     // 2. 发现了只有右子树的节点 
     // || (left == null && right != null)) return false;
     if((leaf&&(left!=null||right!=null))||(left==null&&right!=null)){
      return false;
     }
     if (left == null || right == null) leaf = true;
     if(left!=null){
      queue.push(left);
     }
     if(right!=null){
      queue.push(right);
     }

  }
  return true;
}


//方法二：基于递归套路