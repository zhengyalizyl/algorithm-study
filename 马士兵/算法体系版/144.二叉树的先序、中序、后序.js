// 先序打印所有节点 
function pre(root) {
  if (root == null) return;
  //1
  console.log(root.val);
  //2
  pre(root.left);
  //3
  pre(root.right);
}

// 中序打印所有节点 
function inorder(root) {
  if (root == null) return;
  //1
  inorder(root.left);
  //2.
  console.log(root.val);
  //3.
  inorder(root.right);
}


// 后序打印所有节点 
function pos(root) {
  if (root == null) return;
  //1.
  pos(root.left);
  // 2.
  pos(root.right);
  // 3.
  console.log(root.val);
}

/**
 * 理解递归序
  先序、中序、后序都可以在递归序的基础上加工出来
  第一次到达一个节点就打印就是先序，第二次打印即中序，第三次即后序。
 */

  /**
   * 给定一个二叉树中的节点 X，假设二叉树先序遍历中 X 左侧所有节点集合是 A，二叉树后序遍历中 X 右侧所有节点集合是 B，那么 A ∩ B 集合是 X 的所有祖先节点。
   */