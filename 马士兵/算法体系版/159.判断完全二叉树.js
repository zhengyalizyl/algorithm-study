//方法一：基于队列 -按层遍历
function isCbt(root) {
  if (root == null) {
    return true
  }

  let queue = [];
  queue.push(root);
  // 是否遇到过左右两个孩子不双全的节点，即只有左子树、或右子树、或都没有
  let leaf = false;
  while (queue.length > 0) {
    let node = queue.shift();
    let left = node.left;
    let right = node.right;
    // 1. 如果遇到了不双全的节点之后，又发现当前节点不是叶节点 
    // if (leaf && !(left == null && right == null) 
    // 2. 发现了只有右子树的节点 
    // || (left == null && right != null)) return false;
    if ((leaf && (left != null || right != null)) || (left == null && right != null)) {
      return false;
    }
    if (left == null || right == null) leaf = true;
    if (left != null) {
      queue.push(left);
    }
    if (right != null) {
      queue.push(right);
    }

  }
  return true;
}


//方法二：基于递归套路
/**
 *  思路分析:以x为节点进行分析
 *  1. 左子树是满二叉树，右子树是满二叉树，左子树的高度等于右子树的高度
 *  2. 左子树是完全二叉树，右子树是满二叉树，左子树高度等于右子树高度+1
 *  3. 左子树是满二叉树，右子树是满二叉树，左子树的高度等于右子树的高度+1
 *  4.左子树是满二叉树，右子树是完全二叉树，左子树的高度等于右子树的高度
 * 
 */

function isCbt(root) {
  if (root == null) {
    return true
  }
  process(root).isCbt
}

function process(root) {
  if (root == null) {
    return {
      isFull: true,
      isCbt: true,
      height: 0
    }
  }

  let leftInfo = process(root.left);
  let rightInfo = process(root.right);
  let height = Math.max(leftInfo.height, rightInfo.height) + 1;
  let isFull = leftInfo.isFull && rightInfo.isFull && leftInfo.height == rightInfo.height;
  let isCbt = false;
  if (leftInfo.isFull && rightInfo.isFull && leftInfo.height == rightInfo.height) {
        isCbt =true;
  }
  if(leftInfo.isCbt&&rightInfo.isFull&&(leftInfo.height==rightInfo.height+1)){
    isCbt=true
  }

  if(leftInfo.isFull&&rightInfo.isFull&& (leftInfo.height == rightInfo.height+1)){
    isCbt =true;
  }
  if(leftInfo.isFull&&rightInfo.isCbt&&leftInfo.height==rightInfo.height){
    isCbt =true;
  }
  return {
    isFull,
    isCbt,
    height,
  }
}