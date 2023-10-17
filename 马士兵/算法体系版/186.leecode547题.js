// https://leetcode.cn/problems/number-of-provinces/description/
/**
 * 有 n 个城市，其中一些彼此相连，另一些没有相连。如果城市 a 与城市 b 直接相连，且城市 b 与城市 c 直接相连，那么城市 a 与城市 c 间接相连。

省份 是一组直接或间接相连的城市，组内不含其他没有相连的城市。

给你一个 n x n 的矩阵 isConnected ，其中 isConnected[i][j] = 1 表示第 i 个城市和第 j 个城市直接相连，而 isConnected[i][j] = 0 表示二者不直接相连。

返回矩阵中 省份 的数量。
 */

function findCircleNum(isConnected) {
  let n = isConnected.length;
  let uf = new UnionFind(n);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (isConnected[i][j] == 1) {
        uf.union(i, j);
      }
    }
  }
  return uf.getSize();
}


class UnionFind {
  parent = [];
  size = [];
  help = [];
  sets;//一个有多少个集合

  constructor(n) {
    this.sets = n;//总数长度
    for (let i = 0; i < n; i += 1) {
      this.parent[i] = i;//parent[i]=k,代表i的父亲是k
      this.size[i] = 1;// size[i]=k;如果i是代表节点，size[i]才有意义，代表i所在集合大小为多少
    }
  }

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

  union(i, j) {
    let f1 = this.findFather(i);
    let f2 = this.findFather(j);
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
  getSize() {
    return this.sets;
  }
}