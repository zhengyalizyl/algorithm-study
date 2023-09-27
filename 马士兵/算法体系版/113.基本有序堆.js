// 已知一个基本有序的数组，基本有序是指，如果把数组排好顺序的话，每个元素移动的距离一定不超过k。k相对于数组长度来说是比较小的。请选择一个合适的排序策略，对这个数组进行排序。

// 0位置的数一定在 [0,min(k, n)] 范围上最小值,最小的点一定在0上
// 1位置的数一定在 [1,min(k+1, n)] 范围上最小值 
// i位置的数一定在 [i,min(k+i, n)] 范围上最小值 
// 所以可以基于小根堆，每次在 [i,min(k+i, n)] 范围上找一个最小值放到i位置，然后再放进去一个数，依次循环往复

//[2，1，4，5，3]  k=2
// min =2
function sortedArrDistancelessk(arr,k){
  if(k==0){
    return 
  }

  let  n=arr.length;
  let min=Math.min(n,k);
  let i=0;
   let j=0;
   let ans=[];
   while(i<min){
       ans.push(arr[i++])
   }
   ans=ans.sort((a,b)=>a-b);//i-min(k,n)的排序，最小值在i上,
  //  这里ans=[1，2]
   for(;i<n;i++,j++){
      ans.push(arr[i]);
      ans=ans.sort((a,b)=>a-b);//i-min(k,n)的排序，最小值在i上
      arr[j] =ans.shift();//这里没有必要去
   }
  // 最后如果还有元素，则依次取出放回原数组
   while(ans.length>0){
    arr[j++] =ans.shift();
   }
}