/**
 * arr是货币数组，其中的值都是正数，再给定一个正数aim。每个值都认为是一张货币，认为值相同的货币没有任何不同，返回组成aim的方法数。例如：arr = {1,2,1,1,2,1,2}，aim = 4，
 * 方法：1+1+1+1、1+1+2、2+2一共就3种方法，所以返回3。
 */

class Info {
  coins;
  zhangs;
  constructor(c, z) {
    this.coins = c;
    this.zhangs = z;
  }
}

function getInfo(arr) {
  let counts = new Map();
  for (let value of arr) {
    if (!counts.has(value)) {
      counts.set(value, 1)
    } else {
      counts.set(value, counts.get(value) + 1)
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

//方法一：暴力递归
function coinWays(arr, aim) {
  if (arr == null || arr.length == 0 || aim < 0) {
    return 0;
  }
  let info = getInfo(arr);
  return process(info.coins, info.zhangs, 0, aim)
}

//coins面值数组，正数且去重
//zhangs每种面值对应的张数
function process(coins, zhangs, index, rest) {
  if (index == coins.length) {
    return rest == 0 ? 1 : 0;
  }
  let ways = 0;
  //所选的张数
  //这个张数和纸币的值要小于等于其目标值并且需要所有的张数不能超过
  for (let zhang = 0; zhang * coins[index] <= rest && zhang <= zhangs[index]; zhang += 1) {
    ways += process(coins, zhangs, index + 1, rest - (zhang * coins[index]));
  }
  return ways;
}

//方法二：动态规划
function coinWays2(arr, aim) {
  if (arr == null || arr.length == 0 || aim < 0) {
    return 0;
  }
  let info = getInfo(arr);
  let coins = info.coins;
  let zhangs = info.zhangs;
  let n = coins.length;
  let dp = new Array(n + 1);
  for (let i = 0; i < n + 1; i += 1) {
    dp[i] = new Array(aim + 1).fill(0)
  }

  dp[n][0] = 1;
  for (let index = n - 1; index >= 0; index -= 1) {//process(arr,index+1,rest)+process(arr,index+1,rest-arr[index]),因为第n行的值知道，且依赖于index+1
    for (let rest = 0; rest <= aim; rest += 1) {
      let ways = 0;
      for (let zhang = 0; zhang * coins[index] <= rest && zhang <= zhangs[index]; zhang += 1) {
        ways += dp[index + 1][rest - (zhang * coins[index])];//这里保证了rest>=0
      }
      dp[index][rest] = ways;
    }

  }

  return dp[0][aim]

}

//方法三：优化动态规划
function coinWays3(arr, aim) {
  if (arr == null || arr.length == 0 || aim < 0) {
    return 0;
  }

  let info = getInfo(arr);
  let coins = info.coins;
  let zhangs = info.zhangs;
  let n = coins.length;
  let dp = new Array(n + 1);
  for (let i = 0; i < n + 1; i += 1) {
    dp[i] = new Array(aim + 1).fill(0)
  }
  dp[n][0] = 1;
  for (let index = n - 1; index >= 0; index -= 1) {//process(arr,index+1,rest)+process(arr,index+1,rest-arr[index]),因为第n行的值知道，且依赖于index+1
    for (let rest = 0; rest <= aim; rest += 1) {
      dp[index][rest] = dp[index + 1][rest];
      if (rest - coins[index] >= 0) {
        dp[index][rest] += dp[index][rest - coins[index]];
      }
      if (rest - coins[index] * (zhangs[index] + 1) > 0) {
        dp[index][rest] -= dp[index + 1][rest - coins[index] * (zhangs[index] + 1)];
      }
    }

  }

  return dp[0][aim]

}