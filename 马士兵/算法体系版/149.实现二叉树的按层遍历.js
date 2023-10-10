var order = function(root, ans, k) {
  if (!root) { return [] }
  if (k == ans.length) {
      ans[k] = [];
  }
  ans[k].push(root.val);
  order(root.left, ans, k + 1);
  order(root.right, ans, k + 1);
}
var zigzagLevelOrder = function(root) {
  let k = 0;
  let ans = [];
  order(root, ans, k);
  return ans
};