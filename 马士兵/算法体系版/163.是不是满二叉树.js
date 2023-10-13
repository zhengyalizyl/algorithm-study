/**
 * 【思路分析】针对任意一棵子树 X，判断是否满二叉树，需要从左右子树收集以下信息：

① 是否满二叉树——首先，左右子树需要保证是满二叉树
② 树高——其次，左右子树的高度需要保证一致
③ 树的节点数量——对于满二叉树，节点数量n和树高h存在关系 n = 2^h - 1，因此 ② 和 ③ 取其一即可。

 */

function isFull(root) {
  if (root == null) {
    return true
  }

  let all = process(head)
  return (1 << all.height) - 1 == all.nodes;
}

function process(root) {
  if (root == null) {
    return {
      height: 0,
      nodes: 0
    }
  }
  let leftInfo = process(root.left);
  let rightInfo = process(root.right);
  let height = Math.max(leftInfo.height, rightInfo.height) + 1;
  let nodes = leftInfo.nodes + rightInfo.nodes + 1;
  return {
    height,
    nodes,
  }
}