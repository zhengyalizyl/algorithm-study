/**
 * 最小生成树要求权重无向图
最小生成树算法之Kruskal
总是从权值最小的边开始考虑，依次考察权值依次变大的边
当前的边要么进入最小生成树的集合，要么丢弃
如果当前的边进入最小生成树的集合中不会形成环，就要当前边
如果当前的边进入最小生成树的集合中会形成环，就不要当前边
考察完所有边之后，最小生成树的集合也就得到了
 */

class UnionFind{
  //key某一个节点，value,key节点往上的节点
  fatherMap;
  sizeMap;
  constructor() {
     this.fatherMap=new Map();
     this.sizeMap=new Map();
  }

  makeSets(nodes){
     this.fatherMap.clear();
     this.sizeMap.clear();
     for(let node in nodes){
       this.fatherMap.set(node,node);
       this.sizeMap.set(node,1);
     }
  }

  findFather(n){
    let path=[];
    while(n!=this.fatherMap.get(n)){
       path.push(n);
       n=this.fatherMap.get(n);
    }
    while(path.length>0){
      this.fatherMap.set(path.pop(),n);
    }
    return n
  }

  isSameSet(a,b){
    return this.findFather(a)=this.findFather(b);
  }
}

//对边进行
function kruskalMST(graph){
    let uf=new UnionFind();
    uf.makeSets(graph.nodes.values());
    let queue = [];
    //从小的变到大的变，一次弹出，小根堆
    for(let edge in graph.edges){
       queue.push(edge);
       queue.sort((a,b)=>a.weight-b.weight);
    }

    let result =new Set();
    while(queue.length>0){
       let edge =queue.pop();
       if(!uf.isSameSet(edge.from,edge.to)){
         result.push(edge);
         uf.union(edge.from,edge.to)
       }
    }
    return result;
}