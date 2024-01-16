/**
 * 给定一个正数数组arr，请把arr中所有的数分成两个集合。
 * 如果arr长度为偶数，两个集合包含数的个数要一样多；如果arr长度为奇数，
 * 两个集合包含数的个数必须只差一个。
 * 请尽量让两个集合的累加和接近，返回最接近的情况下，较小集合的累加和。
 */

//方法一：
function right(arr) {
  if (arr == null || arr.length < 2) {
    return 0
  }

  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  sum=parseInt(sum/2);
  if ((arr.length & 1) == 0) {
    return process(arr, 0, arr.length / 2, sum)
  }
  return Math.max(process(arr, 0, arr.length/2, sum), process(arr, 0, arr.length / 2 + 1, sum))
}
//arr[i...]自由选择，挑选的个数一定要是picks个，累加和<=rest,离rest最近的返回
function process(arr, i, picks, rest) {
  if (i == arr.length) {
    return picks == 0 ? 0 : -1;//没有数的时候，如果是刚好挑完，就是0
  } else {

    let p1 = process(arr, i + 1, picks, rest);
    //使用arr[i]这个数
    let p2 = -1;
    let next = -1;
    if (arr[i] <= rest) {
      next = process(arr, i + 1, picks - 1, rest - arr[i]);//这个可能是一个无效解
    }
    if (next != -1) {
      p2 = arr[i] + next;
    }

    return Math.max(p1, p2)

  }

} 

//方法二：动态规划
function right2(arr){
  if (arr == null || arr.length < 2) {
    return 0
  }

  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
   
  sum=parseInt(sum/2);
   let n=arr.length;
   let m=parseInt((n+1)/2);//向上取整
   let dp=[];
   for(let i=0;i<n+1;i+=1){
     dp[i]=[];
     for(let j=0;j<m+1;j+=1){
      dp[i][j]=[];
      for(let k=0;k<sum+1;k+=1){
         dp[i][j][k]=-1;
      }
     }
   }


  for(let rest=0;rest<=sum;rest+=1){
    dp[n][0][rest]=0;// return picks == 0 ? 0 : -1;//没有数的时候，如果是刚好挑完，就是0
  }

  for(let i=n-1;i>=0;i-=1){
    for(let picks=0;picks<=m;picks+=1){
       for(let rest=0;rest<=sum;rest+=1){
        let p1 =dp[i + 1][picks][rest];
        //使用arr[i]这个数
        let p2 = -1;
        let next = -1;
        if (picks-1>=0&&arr[i] <= rest) {
          next = dp[i + 1][picks - 1][rest - arr[i]];//这个可能是一个无效解
        }
        if (next != -1) {
          p2 = arr[i] + next;
        }
    
         dp[i][picks][rest]=Math.max(p1, p2)

       }
    }
  }

   if ((arr.length & 1) == 0) {
    return  dp[0][arr.length / 2][sum]
  }
  return Math.max(dp[0][arr.length/2][sum],dp[0][arr.length / 2 + 1][sum])


}