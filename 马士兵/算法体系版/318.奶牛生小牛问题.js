/**
 * 第一年农场有1只成熟的母牛A，往后的每年：
1）每一只成熟的母牛都会生一只母牛
2）每一只新出生的母牛都在出生的第三年成熟
3）每一只母牛永远不会死
返回N年后牛的数量
【思路分析】递推公式：F(1) = 1, F(2) = 2, F(3) = 3, ..., F(n) = F(n - 1) + F(n - 3)
 */

function  f(n){
   if(n<1){
    return 0
   }

   if(n==1||n==2||n==3){
    return n
   }

   let base=[[1,1,0],[0,0,1],[1,0,0]];
   let res=matrixPower(base,n-3);
   return 3*res[0][0]+2*res[1][0]+3*res[2][0];
}

function matrixPower(m,p){
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