/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function (events) {
  // 根据会议结束时间排序 
  events.sort((a, b) => a[1] - b[1]);
  //先判断每个会议明显都可以参加的情况，即结束天数递增的情况
  let flag = true;
  for (let i = 1; i < events.length; i++) {
    if (events[i - 1][1] >= events[i][1]) {
      flag = false;
      break;
    }
  }
  if (flag) {
    return events.length;
  }
  let set = new Set();//用这个不超出时间限制
  //将其组成一个集合
  for (let i = 0; i < events.length; i++) {
    const [start, end] = events[i];
    for (j = start; j <= end; j += 1) {
      if (!set.has(j)) {
        set.add(j);//只要有这段有一个参加就代表这段能参加
        break;
      }
    }
  }
  return set.size;
};