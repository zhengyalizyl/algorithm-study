//定义定点
class Node{
   val;//顶点的值
   in;//入度
   out;//出度
   nexts;// 从当前节点出发的所有邻居节点集合
   edges; // 从当前节点出发的所有边的集合

   constructor(val){
    this.val=val;
    this.in=0;
    this.out=0;
    this.nexts=[];
    this.edges=[];
   }
}

class Edge{
   weight;//权重
   from;
   to;
   constructor(weight,from,to){
     this.weight =weight;
     this.from=from;
     this.to=to;
   }
}


class Graph{
   nodes;//顶点集合
   edges;// 边集合
   constructor() {
     this.nodes =new Map();
     this.edges=new Set();;
   }
}


//图结构转换：
// matrix 所有的边 
// N*3 的矩阵
// [weight, from节点上面的值，to节点上面的值] 
// [ 5 , 0 , 7] 
// [ 3 , 0, 1]

function createGraph(matrix){
   let graph= new Graph();
   for(let i=0;i<matrix.length;i+=1){
     let weight =matrix[i][0];
     let from =matrix[i][1];
     let to=matrix[i][2];
     if(!graph.nodes.has[from]){
      graph.nodes.set([from],new Node(from));
     }
     if(!graph.nodes.has[to]){
      graph.nodes([to],new Node(to));
     }

     let fromNode =graph.nodes.get([from]);
     let toNode=graph.nodes.get([to]);
     let newEdge=new Edge(weight,fromNode,toNode);
     fromNode.nexts.push(toNode);
     fromNode.out++;
     fromNode.in++;
     fromNode.edges.push(newEdge);
     graph.edges.add(newEdge);
   }
   return graph;
}
