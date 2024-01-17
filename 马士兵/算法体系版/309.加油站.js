/**
 * 在一条环路上有 n 个加油站，其中第 i 个加油站有汽油 gas[i] 升。
 * 你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。
 * 你从其中的一个加油站出发，开始时油箱为空。给定两个整数数组 gas 和 cost ，
 * 如果你可以绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1 。如果存在解，则保证它是唯一的。
 */
function right(gas,cost){
   let good=goodGas(gas,cost);
   for(let i=0;i<gas.length;i+=1){
    if(good[i]){
      return i
    }
   }
   return -1;

}

function goodGas(gas,cost){
  let n=gas.length;
  let m=n*2;
  let arr=new Array(m);
  //将gas、cost转化成一个数组
  for(let i=0;i<n;i+=1){
    arr[i]=gas[i]-cost[i];
    arr[i+n] =gas[i]-cost[i];
  }

 //将arr转换成累加和
 for(let i=1;i<m;i+=1){
   arr[i]+=arr[i-1];
 }

 //实现一个双端队列，维护arr数组最小值位置
 let qmin=[];
 //初始化窗口长度n 范围内qmin
 for(let i=0;i<n;i+=1){
  while(!qmin.length&&arr[qmin[qmin.length-1]]>=arr[i]){
     qmin.push(i)
  }
 }

  let ans =new Array(n).fill(false);
  for(let offset=0,i=0,j=n;j<m;offset=arr[i++]){
    if(arr[qmin[0]]-offset>=0){ //就是每次减前一个释放的那个数，如果大于等于0，就说明可以往前走
      ans[i]=true;
    }
    if(qmin[0]==i){
      qmin.unshift();
    }
    while(!qmin.length&&arr[qmin[qmin.length-1]]>=arr[j]){
       qmin.pop();
    }
    qmin.push(j)
  }
  return ans;
}