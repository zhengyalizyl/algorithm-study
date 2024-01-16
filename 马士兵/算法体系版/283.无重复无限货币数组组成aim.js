/**
 * arr是面值数组，其中的值都是正数且没有重复，再给定一个正数aim。
 * 每个值都认为是一种面值，且认为张数是无限的，返回组成aim的最少货币数。
 */
function minCoins(arr,aim){
  return process(arr,0,aim)
}

//arr[index...]面值，每种面值张数自由选择
//搞出rest正好这么多钱,返回最小张数
//
function  process(arr,index,rest){
  if(rest<0){
    return Number.MAX_VALUE;
  }

  if(index===arr.length){
    return rest ==0?0:Number.MAX_VALUE;
  }else{
    let ans =Number.MAX_VALUE;
    for(let zhang=0;zhang*arr[index]<=rest;zhang+=1){
       let next=process(arr,index+1,rest-zhang*arr[index]);
       if(next!=Number.MAX_VALUE){
        ans=Math.min(ans,next+zhang)
       }
    }
    return ans
  }
}


//方法二：动态规划
function dp1(arr,aim){
   if(aim==0){
    return 0;
   }
   let n=arr.length;
   let dp=new Array(n+1);
   for(let i=0;i<n+1;i+=1){//process(arr,0,aim)
      dp[i]=new Array(aim+1).fill(0);//因为let i = 0; i <= m; i += 1)
   }

   dp[n][0]=0;
   for(let j=1;j<=aim;j+=1){
    dp[n][j]=Number.MAX_VALUE;
   }

   for(let index=n-1;index>=0;index-=1){
    for(let rest=0;rest<=aim;rest+=1){
      let ans =Number.MAX_VALUE;
      for(let zhang=0;zhang*arr[index]<=rest;zhang+=1){
         let next=dp[index+1][rest-zhang*arr[index]];
         if(next!=Number.MAX_VALUE){
          ans=Math.min(ans,next+zhang)
         }
      }
      dp[index][rest]=ans;
    }
  }
  return dp[0][aim];
}



//方法三：斜率优化
function dp2(arr,aim){
   if(aim==0){
    return 0;
   }
   let n=arr.length;
   let dp=new Array(n+1);
   for(let i=0;i<n+1;i+=1){//process(arr,0,aim)
      dp[i]=new Array(aim+1).fill(0);//因为let i = 0; i <= m; i += 1)
   }

   dp[n][0]=0;
   for(let j=1;j<=aim;j+=1){
    dp[n][j]=Number.MAX_VALUE;
   }

   for(let index=n-1;index>=0;index-=1){
    for(let rest=0;rest<=aim;rest+=1){
       dp[index][rest] =dp[index+1][rest];
       //rest-arr[index]>=0，代表列不越界
       //dp[index][rest-arr[index]]!=Number.MAX_VALUE代表x无效，说明其余的b,c,d,e都无效
       if(rest-arr[index]>=0&&dp[index][rest-arr[index]]!=Number.MAX_VALUE){
        dp[index][rest]=Math.min(dp[index][rest],dp[index][rest-arr[index]]+1)
       }
    }
    return dp[0][aim];
   }
}