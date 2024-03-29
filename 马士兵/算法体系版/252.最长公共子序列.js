/***
 * 给定两个字符串str1和str2，返回这两个字符串的最长公共子序列长度。
 * 比如 ： str1 = “a12b3c456d”,str2 = “1ef23ghi4j56k”，最长公共子序列是“123456”，所以返回长度6。
动态规划的几种模型：

从左往右、从右往左
范围：特别需要考虑开始和结尾的情况
样本对应：特别需要考虑结尾情况
业务限制
方法一：尝试暴力递归
【思路分析】考虑 s1 [0,i] 范围和 s2 [0,j] 范围，最长公共子序列长度是多少？

可能性分析：

a) 最长公共子序列，一定不以 s1[i] 字符结尾，也一定不以 s2[j] 字符结尾；
b) 最长公共子序列，可能以 s1[i] 字符结尾，但一定不以 s2[j] 字符结尾；
c) 最长公共子序列，一定不以 s1[i] 字符结尾，但可能以 s2[j] 字符结尾；
d) 最长公共子序列，一定以 s1[i] 字符结尾，也一定以 s2[j] 字符结尾。
注意：a)、b)、c)、d) 并不是完全互斥的，可能有重叠的情况，但是可以肯定，答案不会超过这四种可能性范围，那么我们分别来分析一下，这几种可能性的后续递归调用。

a) 这种情况，有没有 s1[i]、s2[j] 根本不重要，因为这两个字符一定没用，所以后续递归：最长公共子序列 = s1[0, i-1] 与 s2[0, j-1] 的最长公共子序列；
b) 这种情况，s1[i] 可能有用，但 s2[j] 一定没用，所以后续递归：最长公共子序列 = s1[0, i] 与 s2[0, j-1] 的最长公共子序列；
c) 这种情况，s1[i] 一定没用，但 s2[j] 可能有用，所以后续递归：最长公共子序列 = s1[0, i-1] 与 s2[0, j] 的最长公共子序列；
d) 这种情况，一定是 s1[i] == s2[j] 才成立，所以后续递归：最长公共子序列 = 1 + s1[0, i-1] 与 s2[0, j-1] 的最长公共子序列。
综上，4种情况已经穷尽了所有可能性，取其中最大的即可。

其中 b)、c) 一定会参与最大值的比较；
但当 s1[i] == s2[j] 时，a) 一定比 d) 小，所以 d) 参与；
但当 s1[i] != s2[j] 时，d)不存在，所以 a) 参与
再次注意：

a) 中 s1 的范围 小于 b) 中 s1 的范围，a) 中 s2 的范围 等于 b)中 s2的范围，所以 a) 不用求也知道，它比不过 b)，因为样本的范围比 b) 小；同理 a) 中 s1的范围 等于 c) 中 s1 的范围，a) 中 s2 的范围 小于 c) 中 s2 的范围，所以 a) 不用求也知道，它的样本范围比不过c)。至此，可以知道，a) 就是个垃圾，有它没它，都不影响最大值的决策。
所以，当 s1[i] == s2[j] 时，b)、c)、d) 中选出最大值；当 s1[i] != s2[j] 时，b)、c) 中选出最大值
 * 
 * 
 */
// https://leetcode.cn/problems/qJnOS7/

//方法一：暴力递归
function longestCommonSubsequence1(s1, s2) {
  if (s1 == null || s2 == null || s1.length === 0 || s2.length == 0) {
    return 0
  }

  const str1 = s1.split('');
  const str2 = s2.split('');
  return process1(str1, str2, str1.length - 1, str2.length - 1);
}

//str1[0...i]与str2[0.。j]最长公共序列多长？
function process1(str1, str2, i, j) {
  if (i == 0 && j == 0) {
    return str1[i] = str2[j] ? 1 : 0;
  } else if (i == 0) {
    if (str2[j] == str1[i]) {
      return 1
    } else {
      return process1(str1, str2, i, j - 1);
    }
  } else if (j == 0) {
    if (str2[j] == str1[i]) {
      return 1
    } else {
      return process1(str1, str2, i - 1, j);
    }
  } else {//i!=0&&j!=0
          //xi vj
    let p1 = process1(str1, str2, i - 1, j);
    //vi xj 
    let p2 = process1(str1, str2, i, j - 1);
    //
    let p3 = str1[i] == str2[j] ? 1 + process1(str1, str2, i - 1, j - 1) : 0;
    return Math.max(p1, p2, p3)
  }
}


//方法二：动态规划（以结尾位置组织可能性）样本对应模型
function longestCommonSubsequence2(s1, s2) {
  if (s1 == null || s2 == null || s1.length === 0 || s2.length == 0) {
    return 0
  }

  const str1 = s1.split('');
  const str2 = s2.split('');
  let n=str1.length;
  let m=str2.length;
  let arr=[];
  for(let i=0;i<n;i+=1){
    arr[i] =[];
    for(let j=0;j<m;j+=1){
      arr[i][j]=0;
    }
  }


  arr[0][0]=str1[0]==str2[0]?1:0;
  for(let j=1;j<m;j+=1){
    arr[0][j]=str1[0]==str2[j]?1:arr[0][j-1];
  }

  for(let i=1;i<n;i+=1){
     arr[i][0]=str1[i]==str2[0]?1:arr[i-1][0];
  }

  for(let i=1;i<n;i+=1){
    for(let j=1;j<m;j+=1){

       let p1=arr[i-1][j];
       let p2=arr[i][j-1];
       let p3=str1[i]==str2[j]?1+arr[i-1][j-1]:0;
       arr[i][j]=Math.max(p1,p2,p3);
    }
  }

  return arr[n-1][m-1];//  由 process1(str1, str2, str1.length - 1, str2.length - 1);决定的

}
