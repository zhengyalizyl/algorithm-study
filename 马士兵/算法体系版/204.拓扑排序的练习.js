//https://www.lintcode.com/problem/127/

/**
 * 给定一个有向图，图节点的拓扑排序定义如下:

对于图中的每一条有向边 A -> B , 在拓扑排序中A一定在B之前.
拓扑排序中的第一个节点可以是图中的任何一个没有其他节点指向它的节点.
针对给定的有向图找到任意一种拓扑排序的顺序.
样例 1：

输入：

graph = {0,1,2,3#1,4#2,4,5#3,4,5#4#5}
输出：

[0, 1, 2, 3, 4, 5]或者[0, 2, 3, 1, 5, 4]
 */
// 对于节点 X 和 Y，如果分别从 X、Y 出发进过的点数或深度，谁大谁的拓扑序在前。


class DirectedGraphNode {
  label;
  neighbors;
  constructor(x) {
    this.label = x;
    this.neighbors = [];
  }
}

class Record {
  node;
  nodes;
  constructor(n, o) {
    this.node = n;
    this.nodes = o;
  }
}

//当前来到cur点，请返回cur点索道指出，所有的点次
//返回(cur,点次)
//缓存order
//key:到某一点的点次，之前算过了
//value:点次是多少
function f(cur, order) {
  if (order.has(cur)) {
    return order.get(cur);
  }
  //cur的点次之前没算过
  let nodes = 0;
  for (let next in cur.neighbors) {
    nodes += f(next, order).nodes;
  }

  let ans = new Record(cur, nodes + 1);
  order.set(cur, ans);
  return ans;
}
//方法一：
function topSort(graph) {
  let order = new Map();
  //新建一张缓存表
  for (let cur in graph) {
    f(cur, order);
  }
  let recordArr = [];
  for (let r in order.values()) {
    recordArr.push(r)
  }

  //对所有的点次进行倒叙
  recordArr.sort((a, b) => b.nodes - a.nodes);
  let ans = [];
  for (let r in recordArr) {
    ans.push(r.node)
  }
  return ans;
}



 //方法二:根据深度来判断
 class DirectedGraphNode {
  label;
  neighbors;
  constructor(x) {
    this.label = x;
    this.neighbors = [];
  }
}

class Record {
  node;
  deep;
  constructor(n, o) {
    this.node = n;
    this.deep = o;
  }
}



 function f(cur,order){
  if (order.has(cur)) {
    return order.get(cur);
  }
  let follow = 0;
  for (let next in cur.neighbors) {
    follow=Math.max(follow, f(next, order).deep);
  }

  let ans = new Record(cur, follow + 1);
  order.set(cur, ans);
  return ans;
 }

 function topSort(graph) {
  let order = new Map();
  //新建一张缓存表
  for (let cur in graph) {
    f(cur, order);
  }
  let recordArr = [];
  for (let r in order.values()) {
    recordArr.push(r)
  }

  //对所有的点次进行倒叙
  recordArr.sort((a, b) => b.deep - a.deep);
  let ans = [];
  for (let r in recordArr) {
    ans.push(r.node)
  }
  return ans;
}