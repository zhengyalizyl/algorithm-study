/**
 * 给定一个二维数组matrix，一个人必须从左上角出发，最后到达右下角，
 * 沿途只可以向下或者向右走，沿途的数字都累加就是距离累加和，返回最小距离累加和。
 */

function minPathSum(m) {
  if (m == null || m.length == 0 || m[0] == null || m[0].length == 0) return 0;
  let row = m.length, col = m[0].length;
  let dp = new Array(row);
  for (let i = 0; i < row; i += 1) {
    dp[i] = new Array(col).fill(0);
  }
  dp[0][0] = m[0][0]; // 第0列 
  for (let i = 1; i < row; i++) {
    dp[i][0] = dp[i - 1][0] + m[i][0];
  }
  // 第0行 
  for (let j = 1; j < col; j++) {

    dp[0][j] = dp[0][j - 1] + m[0][j];
  }
  // (i, j) 
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + m[i][j];
    }
  }
  return dp[row - 1][col - 1];
}

// 方法二：优化-数组压缩技巧
// 对于 (i, j) 位置，只依赖 左、上 位置的值，这样就可以仅使用一个一维数组 dp 进行递推。
//自我更新
function minPathSum2(m) {
  if (m == null || m.length == 0 || m[0] == null || m[0].length == 0) return 0;
  let row = m.length, col = m[0].length;
  let dp = new Array(col).fill(0);
  dp[0] = m[0][0];
  for (let j = 1; j < col; j++) dp[j] = dp[j - 1] + m[0][j];
  for (let i = 1; i < row; i++) {
    dp[0] += m[i][0];//这个是第0列位置的值
    for (let j = 1; j < col; j++) {
      // dp[j - 1]: dp[当前行][j - 1] 左侧的值
      // dp[j]: dp[上一行][j] 上侧的值
      dp[j] = Math.min(dp[j - 1], dp[j]) + m[i][j];
    }
  }
  return dp[col - 1];
}



//还可以进一步优化：如果列比较少，就一行一行更新；如果行比较少，就一列一列更新。
