/**
 * 给定一个二维数组matrix，其中的值不是0就是1，返回全部由1组成的子矩形数量。
 * 测试链接：https://leetcode.cn/problems/count-submatrices-with-all-ones

【思路分析】对二维数组进行压缩，遍历每一行，转化成以当前行作为地基时的高度数组（遇到0则高度0，否则上一行高度+1），转化成求解每个直方图数组heights中的子矩形数量，最后累加所有子矩阵数量。
计算 heights[i] 的子矩形数量：假设左边到不了的位置是 X，右边到不了的位置是 Y，可以到达的区域长度 L，那么子矩形数量 = (L*(L+1)/2) * (heights[i] - max(X,Y))

[1, 0, 1, 1, 1] [1, 0, 1, 1, 1]
[0, 1, 0, 1, 0] [0, 1, 0, 2, 0]
[1, 1, 0, 1, 1] ==>> 转化成： [1, 2, 0, 3, 1]
[1, 1, 0, 1, 1] [2, 3, 0, 4, 2]
[0, 1, 1, 1, 1] [0, 4, 1, 5, 3]

// 比如
// 1
// 1
// 1 1
// 1 1 1
// 1 1 1
// 1 1 1
//
// 2 .... 6 .... 9
// 如上图，假设在6位置，1的高度为6
// 在6位置的左边，离6位置最近、且小于高度6的位置是2，2位置的高度是3
// 在6位置的右边，离6位置最近、且小于高度6的位置是9，9位置的高度是4
// 此时我们求什么？
// 1) 求在3~8范围上，必须以高度6作为高的矩形，有几个？
// 2) 求在3~8范围上，必须以高度5作为高的矩形，有几个？
// 也就是说，<=4的高度，一律不求
// 那么，1) 求必须以位置6的高度6作为高的矩形，有几个？
// 3..3 3..4 3..5 3..6 3..7 3..8
// 4..4 4..5 4..6 4..7 4..8
// 5..5 5..6 5..7 5..8
// 6..6 6..7 6..8
// 7..7 7..8
// 8..8
// 这么多！= 21 = (9 - 2 - 1) * (9 - 2) / 2
// 这就是任何一个数字从栈里弹出的时候，计算矩形数量的方式
 */


function numsSubmat(map) {
  if (map == null || map.length == 0 || map[0].length == 0) {
    return 0
  }
  let ans = 0;
  let height = new Array(map[0].length)
  for (let i = 0; i < map.length; i += 1) {
    for (let j = 0; j < map[0].length; j += 1) {
      height[j] = map[i][j] == '0' ? 0 : Number(height[j] || 0) + 1
    }
    ans += countFromBottom(height)
  }
  return ans;

}


function countFromBottom(height) {
  if (height == null || height.length == 0) {
    return 0
  }

  let nums = 0;
  let stack = [];
  for (let i = 0; i < height.length; i += 1) {
    while (stack.length && height[stack[stack.length - 1]] >= height[i]) {
      let cur = stack.pop();
      // 考虑重复情况，必须严格大于是才结算，最后一个重复值会算对
      if (height[cur] > height[i]) {
        let left = !stack.length ? -1 : stack[stack.length - 1];
        let n = i - left - 1;
        let down = Math.max(left == -1 ? 0 : height[left], height[i]);
        nums += (height[cur] - down) * num(n)
      }
    }
    stack.push(i);
  }

  while (stack.length) {
    let cur = stack.pop();
    let left = !stack.length ? -1 : stack[stack.length - 1];
    let n = height.length - left - 1;
    let down = left == -1 ? 0 : height[left];
    nums += (height[cur] - down) * num(n)
  }
  return nums;
}

function countFromBottom2(height) {
  if (height == null || height.length == 0) {
    return 0
  }

  let nums = 0;
  let stack = [];
  let si = -1;
  for (let i = 0; i < height.length; i += 1) {
    while (si != -1 && height[stack[si]] >= height[i]) {
      let cur = stack[si--]
      if (height[cur] > height[i]) {
        let left = si == -1 ? -1 : stack[si];
        let n = i - left - 1;
        let down = Math.max(left == -1 ? 0 : height[left], height[i]);
        nums += (height[cur] - down) * num(n)
      }
    }
    stack[++si] = i;
  }

  while (si != -1) {
    let cur = stack[si--]
    let left = si == -1 ? -1 : stack[si];
    let n = height.length - left - 1;
    let down = left == -1 ? 0 : height[left];
    nums += (height[cur] - down) * num(n)
  }
  return nums;
}


function num(n) {
  return parseInt((n * (n + 1) / 2));
}