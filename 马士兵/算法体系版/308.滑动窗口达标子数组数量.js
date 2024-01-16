/**
 * 给定一个整型数组arr，和一个整数num，某个arr中的子数组sub，
 * 如果想达标，必须满足：sub中最大值 – sub中最小值 <= num，
 * 返回arr中达标子数组的数量。
*/


// 方法一：暴力枚举每个子数组，求最大最小值，判断是否达标，时间复杂度O(N^3)
function right(arr, sum) {
  if (arr == null || arr.length == 0 || sum < 0) {
    return 0;
  }

  let n = arr.length;
  let count = 0;
  for (let l = 0; l < n; l += 1) {
    for (let r = l; r < n; r += 1) {
      let max = arr[l];
      let min = arr[l];
      for (let i = l + 1; i <= r; i += 1) {
        max = Math.max(max, arr[i]);
        min = math.min(min, arr[i])
      }
      if (max - min <= sum) {
        count += 1
      }
    }
  }
  return count;
}



//方法二：时间复杂度O(N)
// 结论1：如果已知 [L...R] 窗口范围的 max - min <= sum达标，那么 [L...R] 窗口内的所有子数组都达标
// 结论2：如果已知 [L...R] 窗口范围的 max - min > sum不达标，那么R往右扩的都不达标
function right2(arr, num) {
  if (arr == null || arr.length == 0 || sum < 0) {
    return 0
  }

  let n = arr.length;
  let count = 0;
  let maxWindow = [];//从大到小的双端队列
  let minWindow = [];//从小到到的双端队列
  let r = 0;
  for (let l = 0; l < n; l += 1) {//【0...[1...[2...
   //[l...r)
   //[l...r(初次不达标，停止)
    while (r < n) {
      while (!maxWindow.length && arr[maxWindow[maxWindow.length - 1]] <= arr[r]) {
        maxWindow.pop();
      }
      maxWindow.push(r)

      while (!minWindow.length && arr[minWindow[minWindow.length - 1]] >= arr[r]) {
        minWindow.pop();
      }
      minWindow.push(r);

      if (arr[maxWindow[0]] - arr[minWindow[0]] > sum) {
        break;
      } else {
        r++;
      }
    }
    count += r - l;
    if(maxWindow[0]==l){//如果l即将过期,如果最大值等于当前的的索引，所以释放掉，因为马上l++
      maxWindow.unshift();
    }

    if(minWindow[0]==l){//如果l即将过期,如果最大值等于当前的的索引，所以释放掉，因为马上l++
      minWindow.unshift();
    }
  }
  return count

}