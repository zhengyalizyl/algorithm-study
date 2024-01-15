/**
 * 给定5个参数，N，M，row，col，k，表示在N*M的区域上，醉汉Bob初始在(row,col)位置。Bob一共要迈出k步，且每步都会等概率向 上下左右四个方向走一个单位。任何时候Bob只要离开N*M的区域，
 * 就直接死亡，返回k步之后，Bob还在N*M的区域的概率。
 */
//方法一：暴力递归
function livePosibility(row, col, k, n, m) {
  return process(row, col, k, n, m) / Math.pow(4, k)
}

//目前在row，col位置，还有rest步要走，走完了如果还在棋盘中就获得一个生存点，返回总的生存点数
function process(row, col, rest, n, m) {
  if (row < 0 || row == n || col < 0 || col == m) {
    return 0;
  }
  //还在棋盘中
  if (rest == 0) {
    return 1
  }

  let up = process(row - 1, col, rest - 1, n, m)
  let down = process(row + 1, col, rest - 1, n, m)
  let left = process(row, col - 1, rest - 1, n, m)
  let right = process(row, col + 1, rest - 1, n, m)
  return up + down + left + right;
}

//方法二:动态规划
function livePosibility2(row, col, k, n, m) {
  let dp = new Array(n);
  for (let i = 0; i < n; i += 1) {
    dp[i] = new Array(m);
    for (let j = 0; j < m; j += 1) {
      dp[i][j] = new Array[k + 1].fill(0);
    }
  }

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      dp[i][j][0] = 1;
    }
  }
  for(let rest=0;rest<k+1;rest+=1){
    for(let j=0;j<n;j+=1){
      for(let z=0;z<m;z+=1){
        let up = pick(arr,j- 1, z, rest - 1, n, m)
        let down =pick(arr,j + 1, z, rest - 1, n, m)
        let left = pick(arr,j, z - 1, rest - 1, n, m)
        let right = pick(arr,j, z+ 1, rest - 1, n, m)
         dp[i][j][rest]=up+down+left+right;
      }
    }
  }

  return dp[row][col][k]/Math.pow(4,k)
}

function pick(arr,x,y,rest,n,m){
  if (x < 0 || x >= n || y < 0 || y>= m) return 0;
  return arr[x][y][rest]
}

