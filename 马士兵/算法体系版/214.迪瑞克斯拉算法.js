//前提：无负边


/**
 * 迪杰斯特拉(Dijkstra)算法是典型最短路径算法，用于计算一个结点到其他结点的最短路径。 它的主要特点是以起始点为中心向外层层扩展(广度优先搜索思想)，直到扩展到终点为止。
算法过程

设置出发顶点为v，顶点集合V{v1,v2,vi...}，v到V中各顶点的距离构成距离集合Dis，Dis{d1,d2,di...}，Dis集合记录着v到图中各顶点的距离(到自身可以看作0，v到vi距离对应为di)。

从Dis中选择值最小的di并移出Dis集合，同时移出V集合中对应的顶点vi，此时的v到vi即为最短路径。
更新Dis集合，更新规则为：比较v到V集合中顶点的距离值，与v通过vi到V集合中顶点的距离值，保留值较小的一个(同时也应该更新顶点的前驱节点为vi，表明是通过vi到达的)。
重复执行两步骤，直到最短路径顶点为目标顶点即可结束。
从点 from 出发，所有 from 能到达的节点，生成到达每个节点的最小路径记录并返回
**/
//方法一:暴力递归
function dijkstra1(from) {
  let distanceMap = new Map();
  distanceMap.set(from, 0);
  //打过对号的点
  let selectedNodes = new Set();
  let minNode = getMinDistanceAndUnselectedNode(distanceMap, selectedNodes);
  while (minNode != null) {
    // 原始点 ->minNode(跳转点) 最小距离distance
    let distance = distanceMap.get(minNode);
    for (let edge in minNode.edges) {
      let toNode = edge.to;
      if (!distanceMap.has(toNode)) { //代表当前的点是无穷的
        distanceMap.set(toNode, distance + edge.weight);
      } else {
        distanceMap.set(edge.to, Math.min(distanceMap.get(toNode), distance + edge.weight));
      }
    }
    selectedNodes.push(minNode);
    minNode = getMinDistanceAndUnselectedNode(distanceMap, selectedNodes)
  }
  return distanceMap;
}

function getMinDistanceAndUnselectedNode(distanceMap, touchedNodes) {
  let minNode = null;
  let minDistance = Number.MAX_VALUE;
  for (let entry of distanceMap.entries()) {
    const [node, distance] = entry;
    if (!touchedNodes.has(node) && distance < minDistance) {
      minNode = node;
      minDistance = distance;
    }

  }
  return minNode
}