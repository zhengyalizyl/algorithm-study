/**
 * 给定一个二维数组matrix，其中的值不是0就是1，返回全部由1组成的最大子矩形内部有多少个1（面积）。
 *测试链接：https://leetcode.cn/problems/maximal-rectangle/
【思路分析】对二维数组进行压缩，遍历每一行，转化成以当前行作为地基时的高度数组（遇到0则高度0，否则上一行高度+1），求解每一行高度数组直方图的最大面积。
[1, 0, 1, 1, 1] [1, 0, 1, 1, 1]
[0, 1, 0, 1, 0] [0, 1, 0, 2, 0]
[1, 1, 0, 1, 1] ==>> 转化成： [1, 2, 0, 3, 1]
[1, 1, 0, 1, 1] [2, 3, 0, 4, 2]
[0, 1, 1, 1, 1] [0, 4, 1, 5, 3]
 */

 function  maximalRectange(map){
  if(map==null||map.length==0||map[0].length==0){
    return 0
  }
  let maxArea=0;
  let height =new Array(map[0].length)
   for(let i=0;i<map.length;i+=1 ){
     for(let j=0;j<map[0].length;j+=1){
       height[j] =map[i][j]=='0'?0:Number(height[j])+1
     }
     maxArea=Math.max(maxRecFromBottom(height),maxArea);
   }
   return maxArea

 }

 //height是正方图数组
 function maxRecFromBottom(heights){
  if (heights == null || heights.length == 0) return 0;
  let maxArea = 0;
  let stack = [];
  for (let i = 0; i < heights.length; i++) {
    while (!stack.length && heights[stack[0]] >= heights[i]) {
      let j = stack.pop();
      let left = stack.length ? -1 : stack[0];
      maxArea = Math.max(maxArea, heights[j] * (i - 1 - left));
    }
    stack.push(i);
  }
  while (!stack.length) {
    let j = stack.pop()
    let left = stack.length ? -1 : stack[0];
    maxArea = Math.max(maxArea, heights[j] * (heights.length - 1 - left));
  }
  return maxArea;
 }