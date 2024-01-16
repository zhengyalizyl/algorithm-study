/**
 * 给定一个正数n，求n的裂开方法数，规定：后面的数不能比前面的数小。
 * 比如 4 的裂开方法有：
 * 1+1+1+1、1+1+2、1+3、2+2、4 共 5 种，所以返回5。
 */
//方法一：
//n为正数
function ways1(n) {
  if (n < 0) {
    return 0
  }
  if (n == 1) {
    return 1
  }

  return process(1, n)
}
//上一个拆出来的数是pre
//还剩rest需要去拆
//返回拆解的方法数
function process1(pre, rest) {

  //达到拆分的终点
  if (rest == 0) {
    return 1;
  }
  if (pre > rest) {
    return 0;
  }

  if (pre == rest) {
    return 1;
  }

  //pre<rest
  let ways = 0;
  for (let first = pre; first <= rest; first += 1) {
    ways += process(first, rest - first)
  }

  return ways
}


//方法二：动态规划
function ways2(n) {
  if (n < 0) {
    return 0
  }
  if (n == 1) {
    return 1
  }


  let dp = new Array(n + 1);
  for (let i = 0; i < n + 1; i++) {
    dp[i] = new Array(n + 1).fill(0)
  }

  for (let pre = 1; pre < n + 1; n += 1) {
    dp[pre][0] = 1;
    dp[pre][pre] = 1;
  }

  for (let pre = n - 1; pre >= 1; pre -= 1) {
    for (let rest = pre + 1; rest <= n; rest += 1) {
      let ways = 0;
      for (let first = pre; first <= rest; first += 1) {
        ways += dp[first][rest - first]
      }
      dp[pre][rest] = ways;

    }
  }
  return dp[1][n]// process(1,n)
}


//方法三：继续分析位置依赖，斜率优化
function ways3(n) {
  if (n < 0) {
    return 0
  }
  if (n == 1) {
    return 1
  }


  let dp = new Array(n + 1);
  for (let i = 0; i < n + 1; i++) {
    dp[i] = new Array(n + 1).fill(0)
  }

  for (let pre = 1; pre < n + 1; n += 1) {
    dp[pre][0] = 1;
    dp[pre][pre] = 1;
  }

  //因为依赖于左边和下边，所以找问号的下面和左边
  for (let pre = n - 1; pre >= 1; pre -= 1) {
    for (let rest = pre + 1; rest <= n; rest += 1) {
      dp[pre][rest] = dp[pre + 1][rest];
      dp[pre][rest] += dp[pre][rest - pre]

    }
  }
  return dp[1][n]// process(1,n)
}