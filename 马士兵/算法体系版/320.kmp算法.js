/**
 * 【问题引入】假设有一个字符串 s1 = "abc123def" 和一个字符串 s2 = "123"，问在 s1 中是否存在一个子串(必须是连续的) 和 s2 一样，若存在则返回 s1 中匹配上 s2 的开始位置（先不考虑多个匹配，对于当前问题返回 3），若不存在返回 -1。
 * 
 */
//方法一：暴力匹配，时间复杂度 O(N*M)
function indexOfByForce(s,m){
  if(s==null||m==null||m.length<1||s.length<m.length){
    return -1;
  }
  let cs= s.split('');
  let cm=m.split('');
  for(let i=0;i<cs.length;i++){
    let matched=true;
    for(let j=0;j<cm.length;j+=1){
      if(i+j<cs.length&&cs[i+j]==cm[j]){
        continue;
      }
      matched=false;
      break;
    }
    if(matched){
      return i
    }
  }
  return -1;
}



/**
 * 认识 next 数组
在认识KMP算法之前，先了解一个信息：前缀串与后缀串的最长匹配长度。

【举例】对于字符串 "abcabck"，我们考查 'k' 字符之前的字符串 "abcabc" 的所有前缀串遇后缀串、但不包含该串本身：

前缀子串：a、ab、abc、abca、abcab
后缀子串：c、bc、abc、cabc、bcabc
相等长度：0、0 、3 、0 、0
所以 'k' 字符位置的信息是 3。

那么，求解出每个位置的这个信息，组成的数组就是 next 数组，利用 next 数组可以加速匹配过程。
 */

