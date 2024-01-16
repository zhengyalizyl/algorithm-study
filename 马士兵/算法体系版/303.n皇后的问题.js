/**
 * N皇后问题是指在N*N的棋盘上要摆N个皇后，要求任何两个皇后不同行、不同列，
 *  也不在同一条斜线上。给定一个整数n，返回n皇后的摆法有多少种
 *  n=1，返回1；n=2或3，2皇后和3皇后问题无论怎么摆都不行，返回0；n=8，返回92。
 */
//方法一：
function num1(n) {
  if (n < 1) {
    return 0
  }

  let record = new Array(n);
  return process1(0, record, n)
}

//当前来到i行，一共是0 - n-1
// 在i行上放皇后，所有列都尝试
//必须要保证跟之前所有的皇后不打架
//record[x]=y,之前的第x行的皇后，放在了y列上
//返回：不关心i以上发生了什么,i...后续有多少合法的方法数
function process1(i, record, n) {
  if (i == n) {
    return 1
  }

  let res = 0;
  //i行的皇后，放那一列呢？j列
  for (let j = 0; j < n; j += 1) {
    if (isValid(record, i, j)) {
      record[i] = j;
      res += process1(i + 1, record, n)
    }
  }

  return res;
}

function isValid(record, i, j) {
  for (let k = 0; k < i; k += 1) {
    //因为已经调整每行只放一个数据，就只需要考虑列的数据和对角线的数据
    if (j == record[k] || Math.abs(record[k] - j) === Math.abs(i - k)) {
      return false
    }
  }
  return true;
}


//方法二：时间复杂度不变还是O(n^n)，但通过位运算优化参数项
//请不要超过32皇后问题
function num2(n) {
  if (n < 1 || n > 32) {
    return 0
  }

  //如果是13皇后的=问题，limit最右13个1，其他都是0
  let limit = n == 32 ? -1 : (1 << n) - 1;
  return process2(limit, 0, 0, 0)
}

//7皇后的问题
//limit：0...0 1 1 1 1 1 1 1
//之前皇后的列影响:colLim
//之前皇后的左下角
function process2(limit, colLim, leftDiaLim, rightDiaLim) {
  if (colLim === limit) {
    return 1
  }

  //pos中所有是1的位置，是你可以去尝试皇后的位置
  let pos = limit & (~(colLim | leftDiaLim | rightDiaLim));
  let mostRightOne = 0;
  let res = 0;

  //尝试所有1，把方法累加起来
  while (pos != 0) {
    mostRightOne = pos & (~pos + 1);//提取pos当前的1
    pos = pos - mostRightOne;
    res += process2(
      limit,
      colLim | mostRightOne,
      (leftDiaLim | mostRightOne) << 1,
      (rightDiaLim | mostRightOne) >>> 1)
  }

  return res;
}
