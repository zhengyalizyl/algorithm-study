/**
 * 图的拓扑排序算法
在图中找到所有入度为 0 的点输出
把所有入度为0的点在图中删掉，继续找入度为0的点输出，周而复始
图的所有点都被删除后，依次输出的顺序就是拓扑排序
要求：有向图且其中没有环；应用：事件安排、编译顺序

 */

// directed graph and no loop
function sortedTopology(graph) {
  //key是某个节点，value是剩余的入度
  let inMap = new Map();
  //只有剩余入度为0的节点，才能进入到这个队列
  let zeroQueue = [];
  //对其值进行循环
  for (let node of graph.nodes.values()) {
    inMap.set(node, node.in);//这个就是原本的的入度
    if (node.in == 0) {
      zeroQueue.push(node);
    }
  }

  let result = [];
  while (zeroQueue.length > 0) {
    let cur = zeroQueue.pop();
    result.push(cur);
    for (let next in cur.nexts) {//消掉消掉剩余的邻居的影响
      inMap.set(next, inMap.get(next) - 1);
      if (inMap.get(next) == 0) {
        zeroQueue.push(next);
      }
    }
  }
  return result
}