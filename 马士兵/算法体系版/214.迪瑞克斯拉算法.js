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
//from是一个Node的类
function dijkstra1(from) {
  let distanceMap = new Map();
  distanceMap.set(from, 0);
  //打过对号的点
  let selectedNodes = new Set();
  let minNode = getMinDistanceAndUnselectedNode(distanceMap, selectedNodes);//这个必然会是from
  while (minNode != null) {
    // 原始点 ->minNode(跳转点) 最小距离distance
    let distance = distanceMap.get(minNode);
    for (let edge in minNode.edges) { //这个跳转点有哪些边
      let toNode = edge.to;
      if (!distanceMap.has(toNode)) { //代表当前的点是无穷的
        distanceMap.set(toNode, distance + edge.weight);
      } else { //已存在的点
        distanceMap.set(edge.to, Math.min(distanceMap.get(toNode), distance + edge.weight));//这个就决定是否更新
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
  for (let entry of distanceMap.entries()) { //找到没有选择点的距离最小的节点
    const [node, distance] = entry;
    if (!touchedNodes.has(node) && distance < minDistance) {
      minNode = node;
      minDistance = distance;
    }

  }
  return minNode
}



//方法二：利用加强堆进行优化 找最小距离且未访问的点
//小根堆的方式

class NodeRecord {
  node;
  distance;
  constructor(node, distance) {
    this.node = node;
    this.distance = distance;
  }
}

class Node {
  value;//顶点的值
  in;//入度
  out;//出度
  nexts;// 从当前节点出发的所有邻居节点集合
  edges; // 从当前节点出发的所有边的集合

  constructor(val) {
    this.value = val;
    this.in = 0;
    this.out = 0;
    this.nexts = [];
    this.edges = [];
  }
}

class NodeHeap {
  //堆
  nodes;
  //node ->堆上的什么位置,将之前的那个点的距离改为-1
  heapIndexMap;
  //
  distanceMap;
  size;
  constructor(size) {
    this.nodes = new Node(size);
    this.heapIndexMap = new Map();
    this.distanceMap = new Map();
    this.size = 0;
  }
  isEmpty() {
    return this.size == 0;
  }

  //有一个点叫node,现在发小了一个从源节点出发到达node的距离为distance
  //判断要不要更新，如果需要的话，就更新
  addOrUpdateOrIgnore(node, distance) {
    if (inHeap(node)) { //update
      this.distanceMap.set(node, Math.min(this.distanceMap.get(node), distance));
      insertHeapify(node, this.heapIndexMap.get(node));//往上调整堆，因为距离只可能越来越小
    }

    if (!isEntered(node)) { //add
      this.nodes[this.size] = node;
      this.heapIndexMap.set(node, this.size);
      this.distanceMap.set(node, distance);
      insertHeapify(node, size++);
    }

    //ingore
  }

  pop() {
    let nodeRecord = new NodeRecord(this.nodes[0], this.distanceMap.get(this.nodes[0]));
    this.swap(0, this.size-1);//0和最后一个位置坐交换
    this.heapIndexMap.set(this.nodes[this.size-1],-1);
    this.distanceMap.remove(this.nodes(size-1));
    this.nodes[this.size-1] =null;
    this.heapify(0,--size);
    return nodeRecord;
  }
  
  heapify(index,size){
    let left =index*2+1;
    while(left<size){
       let smalllest =left+1<size &&this.distanceMap.get(this.nodes[left+1])<this.distanceMap.get(this.nodes[left])?left+1:left;
       smalllest =this.distanceMap.get(this.nodes[smalllest])<this.distanceMap.get(this.nodes[index])?smalllest:index;
       if(smalllest==index){
         break;
       }
       this.swap(smalllest,index);
       index=smalllest;
       left =index*2+1;
    }
  }


  inHeap(node) {
    return this.isEntered(node) && this.heapIndexMap.get(node) != -1;
  }
  insertHeapify(node,index) {
     let tmp=Math.floor((index-1)/2);
     while(this.distanceMap.get(nodes[index])<this.distanceMap.get(this.nodes[tmp])){
        this.swap(index,tmp);
        index=tmp;
     }
  }

  inEntered(node) {
    return this.heapIndexMap.get(node);
  }

  swap(index1, index2) {
    this.heapIndexMap.set(nodes[index1], index2);
    this.heapIndexMap.set(nodes[index2], index1);
    let tmp=this.nodes[index1];
    this.nodess[index1] =this.nodes[index2];
    this.nodes[index2]=tmp;
  }

}

function dijkstra(head, size) {
  let nodeHeap = new NodeHeap(size);
  nodeHeap.addOrUpdateOrIgnore(head, 0);
  let result = new Map();
  while (!nodeHeap.isEmpty()) {
    let record = nodeHeap.pop();
    let cur = record.node;
    let distance = record.distance;
    for (let edge in cur.edges) {
      nodeHeap.addOrUpdateOrIgnore(edge.to, edge.weight + distance);
    }
    result.set(cur, distance);
  }
  return result;
}