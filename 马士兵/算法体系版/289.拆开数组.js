/**
 * 给定一个正数数组arr，请把arr中所有的数分成两个集合，
 * 尽量让两个集合的累加和接近。返回最接近的情况下，较小集合的累加和。
 */
//方法一：
function right(arr) {
  if (arr == null || arr.length < 2) {
    return 0
  }

  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return process(arr, 0, parseInt(sum / 2))
}

//arr[i...]可以自由选择，请返回累加和尽量接近rest，但不能超过rest的情况下，最接近的累加和事多少
function process(arr, i, rest) {

  if (i == arr.length) {//没有数了
    return 0
  } else {
    //还有数，可能性1，不使用arr[i]
    let p1 = process(arr, i + 1, rest);
    //可能性2，使用arr[i]
    let p2 = 0;
    if (arr[i] <= rest) {
      p2 = arr[i] + process(arr, i + 1, rest - arr[i])
    }
    return Math.max(p1, p2)
  }
}


//方法二：
function right2(arr) {
  if (arr == null || arr.length < 2) {
    return 0
  }

  let sum = 0;
  for (let num of arr) {
    sum += num;
  }

  sum /= 2;
  let dp = new Array(n + 1);//因为下标是0-n,所以格子是n+1
  for (let i = 0; i < n + 1; i += 1) {
    dp[i] = new Array(sum + 1).fill(0)
  }

  for (let i = n - 1; i >= 0; i -= 1) {
    for (let rest = 0; rest <= sum; rest += 1) {
      //还有数，可能性1，不使用arr[i]
      let p1 = dp[i + 1][rest];
      //可能性2，使用arr[i]
      let p2 = 0;
      if (arr[i] <= rest) {
        p2 = arr[i] +dp[i + 1][rest - arr[i]]
      }
      dp[i][rest]= Math.max(p1, p2)
    }
  }

  return dp[0][sum]
}