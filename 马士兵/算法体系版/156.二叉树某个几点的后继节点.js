// 给你二叉树中的某个节点，返回该节点的后继节点。
// 后继节点：中序遍历一棵二叉树，一个节点的下一个节点就是这个节点的后继节点。

function getSuccessSortNode(node) {
  if (node == null) {
    return null;
  }
  // 如果当前节点有右树，就去右子树上找最左节点
  if (node.right != null) {
    return getLeftMost(node.right);
  }else{
    //无右子树
    let parent = node.parent;
    //父节点不为空，且当前节点是其父节点的右孩子，就一直往上找
    while(parent!=null&&parent.right==node){
        node =parent;
        parent = node.parent;
    }
    // while退出情况:
     // 1. parent == null说明最初的node就是最右节点，没有后继，返回null
     // 2. node往上找时，已经是parent的左孩子了，则父节点就是后继，返回parent
    return parent;
  }

}


function getLeftMost(node) {
  if (node == null) {
    return null;
  }
  // 左子树不为空，就一直在左子树找，找到最左节点
  while (node.left != null) {
    node = node.left;
  }
  return node
}