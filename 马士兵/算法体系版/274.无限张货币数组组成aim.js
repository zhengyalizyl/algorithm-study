/**
 * arr是面值数组，其中的值都是正数且没有重复，再给定一个正数aim。每个值都认为是一种面值，且认为张数是无限的，返回组成aim的方法数。例如：arr = {1,2}，aim = 4，
 * 方法如下：1+1+1+1、1+1+2、2+2，一共就3种方法，所以返回3。
 */
//方法一:
function coinWays(arr, aim) {
  if (arr == null || arr.length == 0 || aim < 0) {
    return 0;
  }

  return process(arr, 0, aim)
}

//arr[index...]所有棉质，每一个面值都可以任意选择张数，组成正好rest这么多钱，方法数多少?
function process(arr, index, rest) {
  if (index === arr.length) {//没钱了
    return rest === 0 ? 1 : 0
  }

  let ways = 0;
  for (let i = 0; i * arr[index] <= rest; i += 1) {
    ways += process(arr, index + 1, rest - (i * arr[index]));//这里保证了rest>=0
  }
  return ways;
}



//方法二：
function coinWays2(arr, aim) {
  if (arr == null || arr.length == 0 || aim < 0) {
    return 0;
  }

  let n = arr.length;
  let arr = new Array(n + 1);
  for (let i = 0; i < n + 1; i += 1) {
    arr[i] = new Array(aim + 1).fill(0)
  }

  arr[n][0] = 1;
  for (let index = n - 1; index >= 0; index -= 1) {//process(arr,index+1,rest)+process(arr,index+1,rest-arr[index]),因为第n行的值知道，且依赖于index+1
    for (let rest = 0; rest <= aim; rest += 1) {
      let ways = 0;
      for (let i = 0; i * arr[index] <= rest; i += 1) {
        ways += arr[index + 1][rest - (i * arr[index])];//这里保证了rest>=0
      }
      arr[index][rest] = ways;
    }

  }

  return arr[0][aim]

}