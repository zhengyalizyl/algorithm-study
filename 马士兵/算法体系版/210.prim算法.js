//对点进行解锁
function primMST(graph){
  //解锁的边进入小根堆
  let queue = [];
  //哪些点额比解锁出来了
  let nodeSet =new Set();
  let result =new Set();//一次挑选的边在result里
  for(let node in graph.nodes.values()){
    //node是开始点
    if(!nodeSet.has(node)){
      nodeSet.push(node);
      for(let edge in node.edges){ //有一个点，解锁所有相连的边
         queue.push(edge);
         queue.sort((a,b)=>a.weight-b.weight)
      }
      while(queue.length>0){
         let edge =queue.pop();//弹出解锁的边中最小的边
         let toNode =edge.to;//可能的一个新的点
         if(!nodeSet.has(toNode)){ //不含有的时候，就是一个新的点
           nodeSet.push(toNode);
           result.push(edge);
           for(let nextEdge in toNode.edges){
               queue.push(nextEdge);
               queue.sort((a,b)=>a.weight-b.weight);
           }
         }
      }
    }
    break;
  }
  return result;
}