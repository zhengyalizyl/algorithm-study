/**
 * 公司的每个员工都符合 Employee 类的描述。整个公司的人员结构可以看作是一棵标准的、 没有环的多叉树，树的头节点是公司唯一的老板，除老板之外的每个员工都有唯一的直接上级。
 * 叶节点是没有任何下属的基层员工(subordinates列表为空)，除基层员工外每个员工都有一个或多个直接下级，这个公司现在要办party，你可以决定哪些员工来，哪些员工不来，规则：
1.如果某个员工来了，那么这个员工的所有直接下级都不能来
2.派对的整体快乐值是所有到场员工快乐值的累加
3.你的目标是让派对的整体快乐值尽量大
给定一棵多叉树的头节点boss，请返回派对的最大快乐值。
 */
/**
 * 思路分析】针对任意一棵多叉树子树 X，考虑可能的情况：

X无关（X不来）
max{a来, a不来} + max{b来, b不来} + max{c来, c不来} + ...
X有关（X来）
a不来max + b不来max + c不来max+...
所以，可以从子树收集以下信息：

① 来情况下的最大快乐值
② 不来情况下的最大快乐值
 */

function Node(val, children) {
  this.val = val;
  this.children = children;
};

function maxHappy(root) {
  let allInfo = process(root);
  return Math.max(allInfo.no, allInfo.yes);
}

function process(root) {
  if (root == null) {
    return {
      yes: 0,
      no: 0
    }
  }

  let no = 0;
  let yes = root.val;
  for (let child in root.children) {
    let childInfo = process(child);
    yes += childInfo.no;
    no += Math.max(childInfo.yes, childInfo.no)
  }

  return {
    no,
    yes,
  }
}