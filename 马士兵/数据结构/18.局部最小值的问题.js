/*
局部最小:
  1. [0]<[1]
  2. [n-2]>[n-1]
  3. 左边 >[i]<右边

*/

//arr 整体无序
//arr 相邻的数不相等
function oneMinIndex(arr){
   if(!arr||arr.length===0)
   return -1;
   if(arr.length===1){
    return 0;
   }
   if(arr[0]<arr[1]){
    return 0
   }
   let len=arr.length;
   if(arr[len-1]<arr[len-2]){
     return len-1
   }

   let  leftIndex=0;
   let  rightIndex=len-1;
   let ans= -1;
   while(leftIndex<=rightIndex){
    let midIndex =leftIndex+ parseInt((rightIndex-leftIndex)/2);
    if(arr[midIndex]<arr[midIndex-1]&&arr[midIndex]>arr[midIndex+1]){
      and=midIndex;
      break;
    }
    if(arr[midIndex]>arr[midIndex-1]){
      rightIndex = midIndex-1;
      continue;
    }
    if(arr[midIndex]>arr[midIndex+1]){
      leftIndex = midIndex+1;
      continue;
    }
   }
   return ans;

}