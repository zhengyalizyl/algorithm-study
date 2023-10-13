//方法一:基于递归
/**【思路分析】针对任意一棵子树 X，考虑可能的情况：

X无关（最大距离不经过X）：
1. X 的左子树的最大距离
2. x的右子树的最大距离
X有关（最大距离进过X）：
1. x左子树与x最远（即左树高度） + x右子树与x最远（即右树高度）+ 1
因此，求最大距离，需要从左右子树收集以下信息：

最大距离——左右子树所能获得的最大距离
树高——用于计算进过X的最大距离
*/

function maxDistance(root) {
  return process(root).maxDistance
}

function process(root) {
  if (root == null) { // 空树好设置
    return {
      maxDistance: 0,
      height: 0
    }
  }

  let leftInfo = process(root.left);
  let rightInfo = process(root.right);
  let height = Math.max(leftInfo.height, rightInfo.height) + 1;
  /** * 1. 左子树 maxDistance 
   *  2. 右子树 maxDistance
   *  3. 左子树最远(maxHeight) + 根节点 + 右子树最远(maxHeight) 
   * 三者求一个最大值 
   */
  let p1 = left.maxDistance;
  let p2 = rightInfo.maxDistance;
  let p3 = leftInfo.height + rightInfo.right + 1;
  let maxDistance = Math.max(p1, p2, p3)

  return {
    maxDistance,
    height
  }
}

