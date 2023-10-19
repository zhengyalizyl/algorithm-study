/**
 利用栈实现
从源节点开始把节点按照深度放入栈，然后弹出
每弹出一个点，把该节点下一个没有进过栈的邻接点放入栈
直到栈变空
 */

//深度优先遍历就是一条路没走完就走到死，走完了，就逐渐往上弹
function Dfs(node){
  if(node==null){
    return 
  }
  let stack=[];
  let set = new Set();//禁止走环路
  stack.push(node);//放着目前的整条路径
  set.add(node);
  // 入栈就打印
  console.log(node.value)
  while(stack.length>0){
    let cur =stack.pop();
    for(let next in cur.nexts){
      if(!set.has(next)){
        stack.push(cur);
        stack.push(next);
        set.add(next);//下一个邻居节点
        console.log(next.value);
        break;//这个就保证了深度优先
      }
    }
  }
}