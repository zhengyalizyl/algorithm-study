// 给定很多线段，每个线段都有两个数[start, end]，表示线段开始位置和结束位置，左右都是闭区间规定：
// 线段的开始和结束位置一定都是整数值
// 线段重合区域的长度必须>=1
// 返回线段最多重合区域中，包含了几条线段

 /** * 
  * 方法一：暴力解法 
  * 依次计算 min+0.5, min+1.5, ..., max-0.5 位置线段重合的数量.因为重合区域的长度必须大于等于1，所以可以拿0.5的增长，这样就不重复
  *  * 取一个最大值，即为所求答案 */


 function maxCover(lines){
  let max=Number.MAX_VALUE;
  let min=Number.MIN_VALUE;
  for (let i = 0; i < lines.length; i++) {
     min = Math.min(min, lines[i][0]);//以免超出安全范围
      max = Math.max(max, lines[i][1]); 
    } 
    let  cover = 0; 
    for (let p = min + 0.5; p < max; p += 1) { 
      let cur = 0; 
      for (let i = 0; i < lines.length; i++) { 
        if (lines[i][0] < p && lines[i][1] > p) {
             cur++;
          } 
        } 
        cover = Math.max(cover, cur); 
      } 
      return cover;
 }




 /** * 
  * 方法二：基于小根堆 
  * 再依次处理每一条线段:
  *  根据当前线段的左边界line[0]，将堆中所有 <= line[0] 的移出 
  * 并将当前线段的右边界 line[1] 放进堆中去，此时堆中的元素个数就是当前线段的最大重合区域个数 
  * 从所有线段的重合区域选一个最大值即可 
*/

function maxCover2(lines){
  let max=0;
  for(){}
}

