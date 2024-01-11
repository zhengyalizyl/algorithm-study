/**
 * 给定一个数组arr，arr[i] 代表第 i 号咖啡机泡一杯咖啡的时间。
 * 给定一个正数N，表示 N 个人等着咖啡机泡咖啡，每台咖啡机只能轮流泡咖啡。
 * 只有一台咖啡机，一次只能洗一个杯子，时间耗费a，洗完才能洗下一杯。
 * 每个咖啡杯也可以自己挥发干净，时间耗费b，咖啡杯可以并行挥发。
 * 假设所有人拿到咖啡之后立刻喝干净，返回从开始等到所有咖啡机变干净的最短时间。
 * 三个参数：int[] arr、int n，int a、int b。
*/
// 方法一：贪心+优良暴力尝试
class Machine {
  timePoint; // 可用时间点
  workTime; // 泡咖啡时间 
  constructor(t, w) {
    timePoint = t;
    workTime = w;
  }
}


function minTime1(arr, n, a, b) {
  let queue = [];//最小堆处理

  for (let value in arr) {
    queue.push(new Machine(0, value));// 0时间点都可用
    queue.sort((a, b) => (a.timePoint + a.workTime) - (b.timePoint + b.workTime));
  }

  //每个人喝完咖啡的最优时间
  let drinks = new Array(n).fill(0);
  for (let i = 0; i < n; i += 1) {
    let cur = queue.unshift();
    cur.timePoint += cur.workTime;
    drinks[i] = cur.timePoint
    queue.push(cur);
    queue.sort((a, b) => (a.timePoint + a.workTime) - (b.timePoint + b.workTime));
  }
  return bestTime(drinks, a, b, 0, 0)
}

//drinks所有杯子可以开始洗的时间
//wash,单个杯子洗干净的时间（串行）
//air,挥发干净的时间（并行）
//free洗的机器什么时候可以用
//drinks[index...]都变干净，最早的结束时间（返回）
function bestTime(drinks, wash, air, index, free) {
  if (index === drinks.length) {
    return 0;
  }

  //index号杯子,决定洗
  let selfClean1 = Math.max(drinks[index], free) + wash;
  let restClean1 = bestTime(drinks, wash, air, index + 1, selfClean1);//后面的杯子得等自己洗完之后才能洗
  let p1 = Math.max(selfClean1, restClean1);

  //index号杯子，决定挥发
  let selfClean2 = drinks[index] + air;//决定挥发
  let restClean2 = bestTime(drinks, wash, air, index + 1, free);//后面的杯子不需要等自己洗完
  let p2 = Math.max(selfClean2, restClean2);
  return Math.min(p1, p2)

}


//方法二：由于free无法知道其范围，须得人为想办法,冲到最大的计算，需要根据业务来判断
//哪些范围可以不需要
//实在知道不能避免范围，可以用缓存去做new Map
class Machine {
  timePoint; // 可用时间点
  workTime; // 泡咖啡时间 
  constructor(t, w) {
    timePoint = t;
    workTime = w;
  }
}


function minTime2(arr, n, a, b) {
  let queue = [];//最小堆处理

  for (let value in arr) {
    queue.push(new Machine(0, value));// 0时间点都可用
    queue.sort((a, b) => (a.timePoint + a.workTime) - (b.timePoint + b.workTime));
  }

  //每个人喝完咖啡的最优时间
  let drinks = new Array(n).fill(0);
  for (let i = 0; i < n; i += 1) {
    let cur = queue.unshift();
    cur.timePoint += cur.workTime;
    drinks[i] = cur.timePoint
    queue.push(cur);
    queue.sort((a, b) => (a.timePoint + a.workTime) - (b.timePoint + b.workTime));
  }
  return bestTimeDp(drinks, a, b)
}

function bestTimeDp(drinks, wash, air) {
  let n = drinks.length
  let maxFree = 0;
  for (let i = 0; i < n; i += 1) {
    maxFree = Math.max(maxFree, drinks[i]) + wash
  }


  const dp = Array(n + 1);
  for (let i = 0; i < n; i += 1) {
    dp[i] = new Array(maxFree + 1).fill(0)
  }

  // dp[n][...]=0
  for (let index = n - 1; index >= 0; index -= 1) {
    for (let free = 0; free < maxFree + 1; free += 1) {
      //index号杯子,决定洗
      let selfClean1 = Math.max(drinks[index], free) + wash;
      if (selfClean1 > maxFree) {//dp[index+1][selfClean1]可能越界
        continue
      }
      let restClean1 = dp[index + 1][selfClean1];

      let p1 = Math.max(selfClean1, restClean1);

      //index号杯子，决定挥发
      let selfClean2 = drinks[index] + air;//决定挥发
      let restClean2 = dp[index + 1][free];//后面的杯子不需要等自己洗完
      let p2 = Math.max(selfClean2, restClean2);
      dp[index][free]=Math.min(p1, p2)
    }
  }
  return dp[0][0];

}