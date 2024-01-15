/**
 * arr是货币数组，其中的值都是正数，再给定一个正数aim。
 * 每个值都认为是一张货币，即便是值相同的货币也认为每一张都是不同的，
 * 返回组成aim的方法数。例如：arr = {1,1,1}，aim = 2，
 * 第0个和第1个能组成2，第1个和第2个能组成2，第0个和第2个能组成2，
 * 一共就3种方法，所以返回3。
*/
// 方法一：尝试暴力递归
function coinWays(arr,aim){
  return process(arr,0,aim);
}

//arr[index...]组成正好rest这么多的钱，有几种方法
function process(arr,index,rest){
  if(rest<0){
    return 0
  }

  if(index==arr.length){//没钱了
    return rest==0?1:0
  }

  return  process(arr,index+1,rest)+process(arr,index+1,rest-arr[index])
}


//方法二：
function coinWays2(arr,aim){
  if(aim==0){
    return 1;
  }

  let n=arr.length;
  let arr=new Array(n+1);//因为index==arr.length
  for(let i=0;i<n+1;i+=1){
    arr[i]=new Array(aim+1).fill(0)
  }

  arr[n][0]=1;
  for(let index=n-1;index>=0;index-=1){//process(arr,index+1,rest)+process(arr,index+1,rest-arr[index]),因为第n行的值知道，且依赖于index+1
    for(let rest=0;rest<=aim;rest+=1){
      arr[index][rest]= arr[index+1][rest]+(rest-arr[index]>0?arr[index+1][rest-arr[index]]:0);
    }

  }

  return arr[0][aim];
}