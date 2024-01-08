/**
 * 打印n层汉诺塔从最左边移动到最右边的全部过程（递归+非递归实现）
将A塔的所有圆盘移动到C塔，规定：① 小圆盘上不能放大圆盘；② 在三根柱子之间一次只能移动一个圆盘。
 */

function Hanoi(n) {
  leftToRight(1)
}

// 请把1~N层圆盘 从左 -> 右 
function leftToRight(n) {
  // base case 
  if (n == 1) {
    console.log("Move 1 from left to right");
    return;
  }
  leftToMid(n - 1);
  console.log("Move " + n + " from left to right");
  midToRight(n - 1);
}

// 请把1~N层圆盘 从左 -> 中
function leftToMid(n) {
  if (n == 1) {
    console.log("Move 1 from left to Mid");
    return;
  }
  leftToRight(n - 1);
  console.log("Move " + n + " from left to mid");
  rightToMid(n - 1);
}

// 请把1~N层圆盘 从中 -> 右
function midToRight(n) {
  if (n == 1) {
    console.log("Move 1 from mid to right");
    return;
  }
  midToLeft(n - 1);
  console.log("Move " + n + " from mid to right");
  leftToRight(n - 1);
}

function midToLeft(n) {
  if (n == 1) {
    console.log("Move 1 from mid to left");
    return;
  }
  midToRight(n - 1);
  console.log("Move " + n + " from mid to left");
  rightToLeft(n - 1);
}

function rightToLeft(n) {
  if (n == 1) {
    console.log("Move 1 from right to left");
    return;
  }
  rightToMid(n - 1);
  console.log("Move " + n + " from right to left");
  midToLeft(n - 1);
}


//方法二：递归 2^n-1
function hanoi(n) {
  if (n <= 0) return;
  func(n, "left", "right", "mid");
}
// 1~n 在: from，去: to，另一个other 
function func(n, from, to, other) {
  if (n == 1) {
    // base 
    console.log("Move 1 from " + from + " to " + to);
  }
  else {
    func(n - 1, from, other, to);//这里是指from到other，to是另外一个
    console.log("Move " + n + " from " + from + " to " + to);
    func(n - 1, other, to, from);//这里是从other到to，from是另外一个
  }
}



//https://leetcode.cn/problems/hanota-lcci/
// 面试题 08.06. 汉诺塔问题
/**
 * 在经典汉诺塔问题中，有 3 根柱子及 N 个不同大小的穿孔圆盘，盘子可以滑入任意一根柱子。一开始，所有盘子自上而下按升序依次套在第一根柱子上(即每一个盘子只能放在更大的盘子上面)。移动圆盘时受到以下限制:
(1) 每次只能移动一个盘子;
(2) 盘子只能从柱子顶端滑出移到下一根柱子;
(3) 盘子只能叠在比它大的盘子上。

请编写程序，用栈将所有盘子从第一根柱子移到最后一根柱子。

你需要原地修改栈。


 */

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */
var hanota = function (A, B, C) {
  if (A.length <= 0) return;
  func(A.length, A, C, B);
};

// 1~n 在: from，去: to，另一个other 
function func(n, from, to, other) {
  if (n == 1) {
    // base case
    console.log("Move 1 from " + from + " to " + to);
    to.push(from.pop())
  }else {
    func(n - 1, from, other, to);//这里是指from到other，to是另外一个
    console.log("Move " + n + " from " + from + " to " + to);
    to.push(from.pop())
    func(n - 1, other, to, from);//这里是从other到to，from是另外一个
  }
}

