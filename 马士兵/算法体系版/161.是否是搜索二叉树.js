// !!!必须: 左边 < 根 < 右边，等于都不是搜索二叉树

// https://leetcode.cn/problems/validate-binary-search-tree/submissions/

// 98. 验证二叉搜索树

/**
 * 
 * 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

*  有效 二叉搜索树定义如下：
* 节点的左子树只包含 小于 当前节点的数。
* 节点的右子树只包含 大于 当前节点的数。
* 所有左子树和右子树自身必须也是二叉搜索树。
 */

//方法一：基于中序遍历，中序收集所有值，判断是否升序
function isBstByInOrder(root) {
  if (root == null) {
    return true
  }
  let ans = [];
  inorder(root, ans);
  for (let i = 1; i < ans.length; i += 1) {
    if (ans[i] <= ans[i - 1]) {
      return false;
    }
  }
  return true;
}


// 中序打印所有节点 
function inorder(root, ans) {
  if (root == null) return;
  //1
  inorder(root.left, ans);
  //2.
  // console.log(root.val);
  ans.push(root.val)
  //3.
  inorder(root.right, ans);
}



// 方法二： 基于递归套路
/**
 * 【思路分析】针对任意一棵子树X，判断是否搜索二叉树，需要从左右子树收集以下信息：
  1. x左子树是搜索二叉树
  2. x右子树是搜索二叉树
  3. x左子树的最大值<x
  4. x右子树的最小值>x

 信息整理
 左右树的要求不一样，那么求左边和右边做全集合
 */

function isBstByInOrder(root) {
  if (root == null) {
    return true;
  }

  return process(root).bst
}

function process(root) {
  if (root == null) {
    return null //如果不知道返回什么，暂时将其设置为null,然后对null进行处理
  }

  let leftInfo = process(root.left);
  let rightInfo = process(root.right);
  let min = root.val;
  let max = root.val;
  if (leftInfo != null) {
    min = Math.min(min, leftInfo.min);
    max = Math.max(max, leftInfo.max);
  }
  if (rightInfo != null) {
    min = Math.min(min, rightInfo.min);
    max = Math.max(max, rightInfo.max);
  }
  let bst = true;//先默认是搜索二叉树
  if (leftInfo != null && !leftInfo.bst) {
    bst = false;
  }
  if (rightInfo != null && !rightInfo.bst) {
    bst = false;
  }

  if (leftInfo != null && leftInfo.max >= root.val) {
    bst = false;
  }
  if (rightInfo != null && rightInfo.min <= root.val) {
    bst = false;
  }
  return {
    bst,
    min,
    max,
  }
}




// 方法三：基于方法二整理来的
/**
 * 【思路分析】针对任意一棵子树X，判断是否搜索二叉树，需要从左右子树收集以下信息：
① 是否是二叉搜索树——首先，左右子树需要保证是二叉搜索树
② 最大值和最小值——其次，左子树最大值 < X节点值 < 右子树最小值
 */

function isBstByInOrder(root) {
  if (root == null) {
    return true;
  }

  return process(root).bst
}

function process(root) {
  if (root == null) {
    return null //如果不知道返回什么，暂时将其设置为null,然后对null进行处理
  }

  let leftInfo = process(root.left);
  let rightInfo = process(root.right);
  let bst = true;//先默认是搜索二叉树
  let min = root.val;
  let max = root.val;
  if (leftInfo != null) {
    min = Math.min(min, leftInfo.min);
    max = Math.max(max, leftInfo.max);
    bst = bst && leftInfo.bst && leftInfo.max < root.val;
  }
  if (rightInfo != null) {
    min = Math.min(min, rightInfo.min);
    max = Math.max(max, rightInfo.max);
    bst = bst & (rightInfo.bst && rightInfo.min > root.val);
  }

  return {
    bst,
    min,
    max,
  }
}
