/**
 * 利用队列实现
从源节点开始依次按照宽度进队列，然后弹出
每弹出一个点，把该节点所有没有进过队列的邻接点放入队列
直到队列变空
 */

function  bfs(node){
  if(node==null){
    return 
  }

  let queue=[];
  let set = new Set();
  queue.push(node);
  set.add(node);
  while(queue.length>0){
    let cur =queue.shift();
    console.log(cur.value);//出队列就打印
    for(let next in cur.nexts){
      if(!set.has(next)){
        set.add(next);//下一个邻居节点
        queue.push(next);
      }
    }
  }
}