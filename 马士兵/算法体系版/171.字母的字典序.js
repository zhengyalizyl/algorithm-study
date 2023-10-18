// 对字符a-z和A-Z
/**
 * 给定一个由字符串组成的数组strs，必须把所有的字符串拼接起来，返回所有可能的拼接结果中字典序最小的结果。
 * 1. a.b <= b.a
 * 2. b.c <= c.b
 * 得出 a.c <= c.a
 */

function lowestString(strs){
   if(strs==null|| strs.length==0){
    return ''
   }
   strs.sort((a,b)=>(a+b).localeCompare(b+a)); //这路就用到了a.b<=b.a
  let res='';
  for(let i =0;i<strs.length;i+=1){
     res += strs[i]
  }

  return res;

}