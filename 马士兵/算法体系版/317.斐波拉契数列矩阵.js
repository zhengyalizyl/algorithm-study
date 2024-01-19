// 结论推广：对于一个 i 阶的递推 F(n) = a*F(n-1) + b*F(n-2) + ... +x*F(n-i)，那么
// |F(n), F(n-1),..., F(n-i+1)| = |F(i), F(i-1),..., F(1)|*|( i*i 矩阵 )|^(n-i)

//O（logN）
//因为这个是一个f(n) =f(n-1)+f(n-2)//故这个是一个2阶矩阵
function f(n) {
  if (n < 1) {
    return 0
  }

  if (n == 1 || n == 2) {
    return 1;
  }


  let base = [[1, 1], [1, 0]]
  let res = matrixPower(base, n - 2);
  return res[0][0] + res[1][0]
}

function matrixPower(m, p) {
  let n = m.length;
  let res = new Array(n);
  for (let i = 0; i < n; i += 1) {
    res[i] = new Array(m[0].length).fill(0);
  }

  for (let i = 0; i < res.length; i += 1) {
    res[i][i] = 1; //对角线全部为1
  }

  let tmp = m;
  for (; p != 0; p >> 1) {//每次右移，有1就相乘，没有就不处理
    if ((p & 1) != 0) {
      res = muliMatrix(res, tmp)//矩阵的乘法
    }
    tmp = muliMatrix(tmp, tmp)
  }

  return res;
}


function muliMatrix(m1, m2) {
  let n = m1.length;
  let res = new Array(n);
  for (let i = 0; i < n; i += 1) {
    res[i] = new Array(m2[0].length).fill(0);
  }
  for (let i = 0; i < m1.length; i++) {
    for (let j = 0; j < m2[0].length; j++) {
      for (let k = 0; k < m2.length; k++) {
        res[i][j] += m1[i][k] * m2[k][j];
      }
    }
  } return res;
}
