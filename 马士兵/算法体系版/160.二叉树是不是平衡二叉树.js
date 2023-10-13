// https://leetcode.cn/problems/balanced-binary-tree/

// 方法一：普通递归方式- 基本平衡树定义
function isBalancedByDef(root) {
  if (root == null) {
    return true;
  }
  // 任何左右子树都是平衡树，且左右子树高度差小于等于1
  return isBalancedByDef(root.left) && isBalancedByDef(root.right) && Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1;
}

function getHeight(root) {
  return root == null ? 0 : Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}


// 方法二：基于递归套路
// 【思路分析】针对任意一棵子树X，判断是否平衡二叉树，需要从左右子树收集以下信息：

// 1. 左子树是平衡的
// 2.右子树是平衡的
// 3.左子树的高度 减右子树的高度的绝对值小于2

function isBalancedByDef(root) {
  if (root == null) {
    return true;
  }
  return process(root).is
}

function process(root) {
  if (root == null) {
    return { 
      is: true,
      height: 0
    }
  }
  let leftInfo = process(root.left);
  let rightInfo = process(root.right);
  let  is = true;
  if(!leftInfo.is){
    is =false;
  }
  if(!leftInfo.is){
    is =false;
  }

  if(Math.abs((leftInfo.height - rightInfo.height))>1){
     is=false
  };
  let height = Math.max(leftInfo.height, rightInfo.height) + 1;
  return {
    is,
    height,
  }
}



// 方法三：基于方法二来整理
// 【思路分析】针对任意一棵子树X，判断是否平衡二叉树，需要从左右子树收集以下信息：

// ① 是否平衡二叉树——首先，左右子树需要保证是平衡的
// ② 树高——其次，左右子树树高差绝对值小于等于1

function isBalancedByDef(root) {
  if (root == null) {
    return true;
  }
  return process(root).is
}

function process(root) {
  if (root == null) {
    return { 
      is: true,
      height: 0
    }
  }
  let leftInfo = process(root.left);
  let rightInfo = process(root.right);

  let is = leftInfo.is && rightInfo.is && Math.abs((leftInfo.height - rightInfo.height)) <= 1;
  let height = Math.max(leftInfo.height, rightInfo.height) + 1;
  return {
    is,
    height,
  }
}

