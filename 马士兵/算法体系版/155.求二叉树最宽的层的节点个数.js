//方法一：
function getMaxWidth(root){
  if(root==null){
    return 0
  }
  let queue=[];
  queue.push(root);
  let curEnd=root;//记录当前层的最右节点
  let nextEnd =null;// 记录下一层的最右节点
  let max=0;
  let curNums =0;//当前层的个数
  while(queue.length>0){
    let node =queue.shift();
    if(node.left!=null){
      queue.push(node.left);
      nextEnd =node.left;
    }

    if(node.right!=null){
      queue.push(node.right);
      nextEnd=node.right;
    }
    curNums+=1;
    if(node==curEnd){
      max=Math.max(max,curNums);
      curNums=0;//需要把当前的节点个数清空掉
      curEnd=nextEnd;
      nextEnd =null;
    }
  }
  return max;
}
 
//方法二：递归
function getMaxWidth(root){
  let  k=0;
  let ans=[];
  order(root,ans,k)
  let max=0;
  for(let i=0;i<ans.length;i+=1){
      max=Math.max(max,ans[i].length);
  }
  return max;
}


var order = function(root, ans, k) {
  if (!root) { return [] }
  if (k == ans.length) { //当其长度等于数组的长度,即每一层的长度如果等于其数组的长度时
      ans[k] = [];
  }
  ans[k].push(root.val);
  order(root.left, ans, k + 1);
  order(root.right, ans, k + 1);
}


