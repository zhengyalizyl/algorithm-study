// 给定很多线段，每个线段都有两个数[start, end]，表示线段开始位置和结束位置，左右都是闭区间规定：
// 线段的开始和结束位置一定都是整数值
// 线段重合区域的长度必须>=1
// 返回线段最多重合区域中，包含了几条线段

/** * 
 * 方法一：暴力解法 
 * 依次计算 min+0.5, min+1.5, ..., max-0.5 位置线段重合的数量.因为重合区域的长度必须大于等于1，所以可以拿0.5的增长，这样就不重复
 *  * 取一个最大值，即为所求答案 */

// [[2,3],[1,7],[4,6]，[4,5]] =>2.5,4.5,5.5倍包含
// o((max-min)*n)
function maxCover(lines) {
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;
  for (let i = 0; i < lines.length; i++) {
    min = Math.min(min, lines[i][0]);//以免超出安全范围
    max = Math.max(max, lines[i][1]);
  }
  //min=1;max=7;
  let cover = 0;
  //多少个x.5倍包含
  for (let p = min + 0.5; p < max; p += 1) {
    let cur = 0;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i][0] < p && lines[i][1] > p) { //因为要保证在这个p的区间范围
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
// 任何一个重合区域的左边界必定是某个线段的左边界
// [[2,3],[1,7],[4,6]，[4,5]]
// [[2,3],[1,7],[4,6]，[4,5]]首先将其排好序,因为是累加个数和，所以排序是非必需的
// [[1,7],[2,3],[4,6]，[4,5]]已开始位置排好顺序
// [1,7]，开始的位置1 <=1的位置全部弹出  小根堆里面放了7，有一个
// [2,3]，开始的位置2 <=2的位置全部弹出  小根堆里面放了3,7，有2个
// [4,6]，开始的位置4 <=4的位置全部弹出  小根堆弹出了3，小根堆里面放了6,7，有2个
// [4,5] 开始的位置4 <=4的位置全部弹出  小根堆里面放了5,6,7，有3个

//o(nlogn)
// for算n,小根堆是logn
function maxCover2(lines) {
  let arr=[];//存放小根堆,每一条线段的结尾数值
  let max = 0;
  for(let i=0;i<lines.length;i+=1){
    const line=lines[i];
      while(arr.length>0&&arr[0]<=line[0]){
         arr.pop();
      }
      arr.push(line[1]);
      arr.sort((a,b)=>a-b);
      max=Math.max(max,arr.length);
  }
  return max;
}

