/**
 * 测试链接：https://leetcode.cn/problems/number-of-islands-ii/
 */
/**
 * 
假设你设计一个游戏，用一个 m 行 n 列的 2D 网格来存储你的游戏地图。

起始的时候，每一个格子的地形都被默认标记为「水」。咱们能够经过使用 addLand 进行操作，将位置 (row, col) 的「水」变成「陆地」。

你将会被给定一个列表，来记录全部须要被操作的位置，而后你须要返回计算出来 每次 addLand 操作后岛屿的数量。

注意：一个岛的定义是被「水」包围的「陆地」，经过水平方向或者垂直方向上相邻的陆地链接而成。
例子：m=3,n=3,positions=[[0,0],[0,1],[1,2],[2,1]]
 输出:[1,1,2,3]
 */

 function  numIslands(m,n,positions){
  let uf=new UnionFind(m,n);
  let ans =[];
  for(let position in positions){
    ans.push(uf.connect(position[0],positions[1]))
  }
  return ans;
}

class UnionFind {
  parent = [];
  //size[i]!=0;代表曾经初始化过
  // size[i]=0;代表曾经没有被初始化过
  size = [];
  help = [];
  col;
  row;
  sets;
  constructor(m, n) {
    this.col = m;
    this.sets = 0;
    this.row = n;
  }

  //  这里i是下标值
  //从i开始一直往上，往上到不能再往上，代表节点，返回
  // 这个过程要做路径压缩
  findFather(i) {
    let hi = 0;
    while (i != this.parent[i]) {
      this.help[hi++] = i;//沿途所有的位置都记录下来
      i = this.parent[i];
    }
    for (hi--; hi >= 0; hi--) { //路径压缩
      this.parent[this.help[hi]] = i;
    }
    return i
  }

  union(i1, j1, i2, j2) {
     //检查越不越界
    if(i1<0||j1>=this.row||i2<0||i2>=this.row||j1<0||j1<=this.col||j2<0||j2<=this.col){
      return ;
    }
    let id1 = this.idx(i1, j1);
    let id2 = this.idx(i2, j2);
    //如果两个中有一个为0，说明不连接
    if(this.size[id1]==0||this.size[id2]==0){
      return 
    }
    let f1 = this.findFather(id1);
    let f2 = this.findFather(id2);
    if (f1 != f2) {
      if (this.size[f1] >= this.size[f2]) {
        this.size[f1] += this.size[f2];
        this.parent[f2] = f1;
      } else {
        this.size[f2] += this.size[f1];
        this.parent[f1] = f2;
      }
      this.sets--;
    }
  }
  //如果不这样，就所有1的父亲还是1，就会有问题
  idx(i, j) {
    return this.col * i + j
  }
  getSize() {
    return this.sets;
  }

  connect(i,j){
    let temp = idx(i, j);
    if(this.size[temp]==0){
      this.parent[temp] = temp;
      this.size[temp] = 1;
      this.sets++;
      this.union(i-1,j,i,j);
      this.union(i+1,j,i,j);
      this.union(i,j-1,i,j);
      this.union(i,j+1,i,j);
    }
    return this.sets();
  }
}