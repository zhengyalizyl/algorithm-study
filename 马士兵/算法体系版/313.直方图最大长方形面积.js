/**
 * 给定一个非负数组arr，代表直方图，返回直方图的最大长方形面积。
 * 测试链接：https://leetcode.cn/problems/largest-rectangle-in-histogram
 * 【思路分析】利用单调栈结构，可以很方便得到每一个高度位置j离它最近且小于它的高度的左右两边的位置(l, r)，面积=heights[j]*(r-1-l)
 */

//方法一：利用单调栈结构，依次遍历每一个高度，计算基于每一个高度所能组成的矩形面积，求最大值
function largestRectangleArea(heights) {
  if (heights == null || heights.length == 0) return 0;
  let maxArea = 0;
  let stack = [];
  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[stack[stack.length-1]] >= heights[i]) {
      let j = stack.pop();
      let left = stack.length ? -1 : stack[0];
      maxArea = Math.max(maxArea, heights[j] * (i - 1 - left));
    }
    stack.push(i);
  }
  while (stack.length) {
    let j = stack.pop()
    let left = stack.length ? -1 : stack[stack.length-1];
    maxArea = Math.max(maxArea, heights[j] * (heights.length - 1 - left));
  }
  return maxArea;
}


//另一种改成数组方式
function largestRectangleArea(heights) {
  if (heights == null || heights.length == 0) return 0;
  let maxArea = 0;
  let stack = new Array(heights.length)
  let si=-1;
  for (let i = 0; i < heights.length; i++) {
    while (si!=-1 && heights[stack[si]] >= heights[i]) {
      let j = stack.pop();
      let left =si==-1 ? -1 : stack[si];
      maxArea = Math.max(maxArea, heights[j] * (i - 1 - left));
    }
    stack[++si]=i;
  }
  while (si!=-1) {
    let j = stack[si--];
    let left = si==-1 ? -1 : stack[si];
    maxArea = Math.max(maxArea, heights[j] * (heights.length - 1 - left));
  }
  return maxArea;
}

