/**
 * 给定两棵二叉树的头节点head1和head2，返回head1中是否有某个子树的结构和head2完全一样
 */
//方法一：暴力递归
function containsTree(big,small){
  if(small==null){
    return true
  }

  if(big==null){
    return false
  }

  if(isSame(big,small)){
    return true;
  }

  return containsTree(big.left,small)||containsTree(big.right,small)
}

function isSame(root1,root2){
  if(root1==null&&root2==null){
    return true;
  }
  if(root1==null||root2==null){
    return false
  }

  return root1.val==root2.val&&isSame(root1.left,root2.left)&&isSame(root1.right,root2.right);
}


//方法二：序列化二叉树+KMP匹配算法
function containsTreeByKmp(big,small){
  if(small==null){
    return true
  }

  if(big==null){
    return false
  }
  let s=[];
  let m=[];
  preOrder(big,s);
  preOrder(small,m);
  return indexOf(s)
}

function preOrder(root,pre){
   if(root==null){
     pre.push(null);
     return 
   }
   pre.push(root.val);
   preOrder(root.left,pre);
   preOrder(root.right,pre);
}

function indexOf(ss,ms){
   let next=getNext(ms)
}

function getNext(ms){
  let next=new Array(ms.length).fill(0)
}


