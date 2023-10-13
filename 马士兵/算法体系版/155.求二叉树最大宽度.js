// https://leetcode.cn/problems/maximum-width-of-binary-tree/
// 662. 二叉树最大宽度

// 给你一棵二叉树的根节点 root ，返回树的 最大宽度 。

// 树的 最大宽度 是所有层中最大的 宽度 。

// 每一层的 宽度 被定义为该层最左和最右的非空节点（即，两个端点）之间的长度。将这个二叉树视作与满二叉树结构相同，两端点间会出现一些延伸到这一层的 null 节点，这些 null 节点也计入长度。

// 题目数据保证答案将会在  32 位 带符号整数范围内。

// 提示：

// 树中节点的数目范围是 [1, 3000]
// -100 <= Node.val <= 100

//存储节点所在位置的数组
let maxWide = 0;
var widthOfBinaryTree2 = function (root) {
  //先从上到下循环
  let k = 0;
  let ans = [];
  let poList = []
  order(root, ans, k, poList, 0);
  let max = 0;
  for (let i = 0; i < poList.length; i += 1) {
    //这里会有越界行为
    max = Math.max(max, (poList[i][poList[i].length - 1] - poList[i][0]) + 1)
  }
  return max
};

var order = function (root, ans, k, poList, pos) {
  if (!root) { return [] }
  if (k == ans.length) { //当其长度等于数组的长度,即每一层的长度如果等于其数组的长度时
    ans[k] = []; //存储其值
    poList[k] = [];//存储其值的位置
  }
  //同时将每个节点在满二叉树上进行编号
  ans[k].push(root.val);
  poList[k].push(pos)
  order(root.left, ans, k + 1, poList, pos * 2 - 1);
  order(root.right, ans, k + 1, poList, pos * 2);
}





