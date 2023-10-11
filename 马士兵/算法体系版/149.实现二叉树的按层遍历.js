// 层序遍历，其实就是图的宽度优先遍历
var levelOrder = function(root) {
  if(root==null){
      return []
  }
  let res=[];
  res.push(root);
  while(res.length>0){
      let node=res.shift();
       console.log(node.val);//缺点但是不知道怎么哪一层结束了
      if(node.left!=null){
          res.push(node.left);
      }
        if(node.right!=null){
          res.push(node.right);
      }
  }
}


// 层序遍历-基于递归
var order = function(root, ans, k) {
  if (!root) { return [] }
  if (k == ans.length) { //当其长度等于数组的长度,即每一层的长度如果等于其数组的长度时
      ans[k] = [];
  }
  ans[k].push(root.val);
  order(root.left, ans, k + 1);
  order(root.right, ans, k + 1);
}
var levelOrder = function(root) {
  //先从上到下循环
  let k = 0;
  let ans = [];
  order(root, ans, k);
  return ans
};