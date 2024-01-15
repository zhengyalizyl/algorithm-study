/**
 * 给定3个参数，N，M，K，怪兽有N滴血，等着英雄来砍自己，
 * 英雄每一次打击，都会让怪兽流失[0~M]的血量，
 * 到底流失多少？每一次在[0~M]上等概率的获得一个值，
 * 求K次打击之后，英雄把怪兽砍死的概率。

 */
//方法一：
function right1(n, m, k) {
  if (n < 1 || m < 1 || k < 1) {
    return 0;
  }

  let all = Math.pow(m + 1, k);
  let kill = process1(n, m, k);
  return kill / all
}

//怪兽还剩n点血
//每次的伤害【0，m]范围内
//还有k次可以砍
//返回砍死的情况数
function process1(n, m, k) {
  if (k == 0) {
    return n <= 0 ? 1 : 0;
  }
  if(n<=0){// 怪兽血量已经没有了，可以直接计算
    return Math.pow(m+1,k)
  }
  let ways = 0;
  for (let i = 0; i <= m; i += 1) {
    ways += process1(n - i, m, k - 1);
  }
  return ways;
}

//方法二：
function right2(n, m, k) {
  if (n < 1 || m < 1 || k < 1) {
    return 0;
  }

  let all = Math.pow(m + 1, k);
  
  let dp=new Array(k+1);
  for(let i=0;i<k+1;i+=1){
     dp[i]=new Array(n+1).fill(0);//因为let i = 0; i <= m; i += 1)
  }
  dp[0][0]=1;
  for(let times=1;times<=k;times+=1){
    dp[times][0]=Math.pow(m+1,times)
    for(let hp=0;hp<=n;hp+=1){
      let ways = 0;
      for (let i = 0; i <= m; i += 1) {
        if(hp-i>=0){
          ways += dp[times-1][hp-i];
        }else{
          // 怪兽血量已经没有了，可以直接计算
          ways+=Math.pow(m+1,times-1)
        }
      }
      dp[times][hp]=ways;
    }
  }

  let kill=dp[k][n];
  return kill/all;
}


//方法三:观察位置依赖优化-斜率优化
// 分析dp依赖关系】例如 dp[5][10]，M = 7
// 则：dp[5][10] 依赖 dp[4][10...3] 累加，dp[5][11] 依赖 dp[4][11..4] 累加
// 所以：dp[5][11] = dp[4][11..4] = dp[4][10...3] + dp[4][11] - dp[4][3] = dp[5][10] + dp[4][11] - dp[4][3]
// 推广到一般情况：
// 已知：dp[i][j-1] = dp[i-1][j-1...j-1-M]，求 dp[i][j] = dp[i-1][j...j-M]
// 可以推出：dp[i][j] = dp[i][j-1] + dp[i-1][j] - dp[i-1][j-1-M]
// 边界值：j-1-M >= 0 才需要减去，j-1-M < 0 时，还得减去 (M+1)^(i-1)

function dp2(n,m,k){
  if(n<1||m<1||k<1){
    return 0
  }

  let all=Math.pow(m+1,k);
  let dp=new Array(k+1);
  for(let i=0;i<k+1;i+=1){
     dp[i]=new Array(n+1).fill(0);//因为let i = 0; i <= m; i += 1)
  }
  dp[0][0]=1;
  for(let times=1;times<=k;times+=1){
     dp[times][0]=Math.pow(m+1,times);
     for(let hp=1;hp<=n;hp+=1){
      dp[times][hp]=dp[times][hp-1]+dp[times-1][hp];
      if(hp-1-m>=0){
        dp[times][hp]-=dp[times-1][hp-1-m];
      }else{
         dp[times][hp]-=Math.pow(m+1,times-1);
      }
     }
  }

  let kill=dp[k][n];
  return kill/all;
}
