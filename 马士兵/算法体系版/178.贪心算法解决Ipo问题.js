/**
 * 输入正数数组costs、正数数组profits、正数K和正数M，costs[i]表示i号项目的花费，profits[i]表示i号项目在扣除花费之后还能挣到的钱(利润)，K表示你只能串行的最多做k个项目，M表示你初始的资金。
说明：每做完一个项目，马上获得的收益，可以支持你去做下一个项目，不能并行的做项目。
输出：最后获得的最大钱数
测试链接：https://leetcode.cn/problems/ipo/description/
 */

/**
 * 假设 力扣（LeetCode）即将开始 IPO 。为了以更高的价格将股票卖给风险投资公司，力扣 希望在 IPO 之前开展一些项目以增加其资本。 由于资源有限，它只能在 IPO 之前完成最多 k 个不同的项目。帮助 力扣 设计完成最多 k 个不同项目后得到最大总资本的方式。

给你 n 个项目。对于每个项目 i ，它都有一个纯利润 profits[i] ，和启动该项目需要的最小资本 capital[i] 。

最初，你的资本为 w 。当你完成一个项目时，你将获得纯利润，且利润将被添加到你的总资本中。

总而言之，从给定项目中选择 最多 k 个不同项目的列表，以 最大化最终资本 ，并输出最终可获得的最多资本。

答案保证在 32 位有符号整数范围内。

 */

// 最多K个项目、W是初始资金 
// profits[] capital[] 一定等长
// 返回最终最大的资金
// 花费定义小根堆
// 利润定义大根堆
function findMaximizedCapital(k, w, profits, capital) {

  //现将profit和capital组成一个新的二位数组
  let capitalArr = [];
  for (let i = 0; i < capital.length; i += 1) {
    capitalArr.push([capital[i], profits[i]])
  }

  //对其按照花费进行升序
  capitalArr.sort((a, b) => a[0] - b[0]);
  let profitsQueue = [];
  for (let i = 0; i < k; i += 1) {
    // 将所有能做的项目弹出，放入profitsQueue
    while (!capitalArr.length > 0 && capitalArr[0][1] <= w) {
      profitsQueue.push(capitalArr.shift());
      // 利润定义大根堆
      profitsQueue.sort((a, b) => b[0] - a[0]);//因为这里会导致时间过长
    }

    // 如果profitsQueue为空，说明没可做项目，直接返回
    if (profitsQueue.length === 0) {
      return w;
    }
    // 否则，累计收益 
    w += profitsQueue.shift()[0];
  }

  return  w
}