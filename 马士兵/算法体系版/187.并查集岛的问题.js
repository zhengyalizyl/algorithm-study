// https://leetcode.cn/problems/number-of-islands/description/
/**
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。
 */

// 方法一：递归感染法，复杂度o(m*n)
function numIslands(grid) {
  let isLands = 0;
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      if (grid[i][j] == '1') {
        isLands++;
        infect(grid, i, j)
      }
    }
  }
  return isLands;
}

//从（i,j）这个位置出发，把所有连成一片的'1‘字符，变成2
function infect(board, i, j) {
  //越界和字符不为‘1’
  if (i < 0 || i == board.length || j < 0 || j == board[0].length || board[i][j] != '1') {
    return
  }
  board[i][j] = 2; //如果不改2，递归就没有种植了
  //有连通的全部变化,即i的上下左右
  infect(board, i - 1, j);
  infect(board, i + 1, j);
  infect(board, i, j + 1);
  infect(board, i, j - 1);
}


//方法二：并查集
//统一左上合并
function numIslands(board) {
  let row = board.length;
  let col = board[0].length;
  let uf = new UnionFind(board);
  for (let j = 1; j < col; j += 1) {//也就是第一列的数据，因为第一列没有左边
    if (board[0][j - 1] == '1' && board[0][j] == '1') {
      uf.union(0, j - 1, 0, j)
    }
  }

  for (let i = 1; i < row; i += 1) {
    if (board[i - 1][0] == '1' && board[i][0] == '1') {
      uf.union(i - 1, 0, i, 0)
    }
  }
  for (let i = 1; i < row; i += 1) {
    for (let j = 1; j < col; j += 1) {
      if (board[i][j] == '1') {
        if (board[i][j - 1] == '1') {
          uf.union(i, j - 1, i, j)
        }
        if (board[i - 1][j] == '1') {
          uf.union(i - 1, j, i, j)
        }
      }
    }
  }
  return uf.getSize();
}


class UnionFind {
  parent = [];
  size = [];
  help = [];
  col;
  sets;
  constructor(board) {
    this.col = board[0].length;
    this.sets = 0;
    let row = board.length;
    let len = row * this.col;
    for (let i = 0; i < row; i += 1) {
      for (let j = 0; j < this.col; j += 1) {
        if (board[i][j] == '1') {
          let temp = idx(i, j);
          this.parent[temp] = temp;
          this.size[temp] = 1;
          this.sets++;//这个是有‘1’的数量
        }
      }
    }
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
    let id1 = this.idx(i1, j1);
    let id2 = this.idx(i2, j2);
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
}
