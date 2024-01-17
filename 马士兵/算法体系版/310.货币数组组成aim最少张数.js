/**
 * arr是货币数组，其中的值都是正数，再给定一个正数aim。
 * 每个值都认为是一张货币，返回组成aim的最少货币数。
 * 注意：因为是求最少货币数，所以每一张货币认为是相同或者不同就不重要了。
 * （和 22.2 的区别：面值可能重复，张数1张）
 */

//方法一：暴力递归
function minCoins(arr, aim) {
  return process(arr, 0, aim);
}

function process(arr, index, rest) {
  if (rest < 0) {
    return Number.MAX_VALUE;
  }

  if (index == arr.length) {
    return rest == 0 ? 0 : Number.MAX_VALUE;
  }

  let p1 = process(arr, index + 1, rest);

  let p2 = process(arr, index + 1, rest - arr[index]);

  if (p2 != Number.MAX_VALUE) {
    p2++;
  }

  return Math.min(p1, p2)
}


//方法二：动态规划
function minCoins2(arr, aim) {
  let n = arr.length;
  let dp = new Array(n + 1);
  for (let i = 0; i < n + 1; i += 1) {
    dp[i] = new Array(aim + 1).fill(0)
  }

  for (let i = 1; i <= aim; i += 1) {
    dp[n][i] = Number.MAX_VALUE
  }

  for (let index = n - 1; index >= 0; index -= 1) {
    for (let rest = 0; rest <= aim; rest += 1) {
      dp[index][rest] = dp[index + 1][rest];
      if (rest - arr[index] >= 0 && dp[index + 1][rest - arr[index]] != Number.MAX_VALUE) {
        dp[index][rest] = Math.min(dp[index][rest], dp[index + 1][rest - arr[index]] + 1)
      }
    }
  }

  return dp[0][aim]
}


//方法三：根据题意，每种币值可能重复，所以可以先对货币进行统计。
// 优化后时间复杂度 O(arr长度) + O(货币种树 * aim * 每种货币的平均张数)

class Info{
   coins=[];
   zhangs=[];
   constructor(c,z) {
      this.coins=c;
      this.zhangs=z;
   }
}

function getInfo(arr){
  let counts=new Map();
  for(let value of arr){
    if(!counts.has(value)){
       counts.set(value,1)
    }else{
      counts.set(value,counts.get(value)+1)
    }
  }

  let n = counts.size;
  let coins = new Array(n);
  let zhangs = new Array(n);
  let index = 0;
  let entries = map.entries();
  for ([key, value] of entries) {
    coins[index] = key;
    zhangs[index++] = value;
  }
  return new Info(coins, zhangs)
}

function  dp(arr,aim){
  if(aim==0){
    return 0;
  }
  //得到info时间复杂度O(arr长度)
  let info=getInfo(arr);
  let coins=info.coins;
  let zhangs=info.zhangs;
  let n=zhangs.length;
  let dp = new Array(n + 1);
  for (let i = 0; i < n + 1; i += 1) {
    dp[i] = new Array(aim + 1).fill(0)
  }
  for(let j=1;j<=aim;j+=1){
    dp[n][j]=Number.MAX_VALUE;
  }

  //这三层for循环，时间复杂度为O(货币种数*aim*每种货币的平均张数)
  for(let index=n-1;index>=0;index-=1){
    for(let rest=0;rest<=aim;rest+=1){
       dp[index][rest]=dp[index+1][rest];
       for(let zhang=1;zhang*coins[index]<=aim&&zhang<=zhangs[index];zhang++){
           if(rest-zhang*coins[index]>=0&&dp[index+1][rest-zhang*coins[index]]!=Number.MAX_VALUE){
            dp[index][rest]=Math.min(dp[index][rest],zhang+dp[index+1][rest-zhang*coins[index]]!=Number.MAX_VALUE)
           }
       }
    }
  }

}


//方法四：
function  dp(arr,aim){
  if(aim==0){
    return 0;
  }
  //得到info时间复杂度O(arr长度)
  let info=getInfo(arr);
  let coins=info.coins;
  let zhangs=info.zhangs;
  let n=zhangs.length;
  let dp = new Array(n + 1);
  for (let i = 0; i < n + 1; i += 1) {
    dp[i] = new Array(aim + 1).fill(0)
  }
  for(let j=1;j<=aim;j+=1){
    dp[n][j]=Number.MAX_VALUE;
  }

 // 虽然是嵌套了很多循环，但是时间复杂度为O(货币种数 * aim)
  for(let i=n-1;index>=0;i-=1){
    for(let mod=0;mod<Math.min(aim+1,coins[i]);mod+=1){
       //当前面值x
       //mod mod+x mod+2*x mod+3*x
       let w=[];
       w.push(mod);
       dp[i][mod]=dp[i+1][mod];
       for(let r=mod+coins[i];r<=aim;r+=coins[i]){
        while(!w.length&&(dp[i+1][w[w.length-1]]==Number.MAX_VALUE)
           || dp[i+1][w[w.length-1]]+compensate(w[w.length-1],r,coins[i])>=dp[i+1][r]){
            w.pop();
        }

        w.push(r);
        let overdue=r-coins[i]*(zhangs[i]+1);
        if(w[0]===overdue){
          w.unshift();
        }

        dp[i][r]=dp[i+1][w[0]]+compensate(w[0],r,coins[i])
       }
    }
  }
  return dp[0][dim];
}

function compensate(pre,cur,coin){
  return (cur-pre)/coin
}