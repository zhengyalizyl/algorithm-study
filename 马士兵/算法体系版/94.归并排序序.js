/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
// 一个数组的长度是5
// 以0结尾的有0-0有a个达标
// 以1结尾的有1-1，0-1，有b个达标
// 以2结尾的有2-2，1-2，0-2有c个达标
// 以3结尾的有3-3，2-3,1-3,0-3有d个达标
// ...
// 所有达标的就是a+b+c+d+....

//  sum[i..j] =arr[0..i] -arr[0..i-1];
//  结论：假设 0~i 整体累加和是 x，题目 [L,U] 必须以 i 位置结尾的子数组累加和有多少在 [L,R] 范围上。等同于去求：在 i 之前的所有前缀和中有多少个前缀和在 [x-U,x-L] 上。

// 13445 27889,原始目标是【0，5】,因为是排好序的，所以上限和下限不回退
//则 右边的2是[-3,2]
//  7的是[2,7]
// 8是[3,8]
// 8是[3,8]
//9是[4,9]
//然后看左组的数，有多少个落在这个区域
var countRangeSum = function(nums, lower, upper) {
  if(!nums||nums.length===0){
      return 0;
  }
  
  //前缀和
  let sum=Array.from(nums.length);//sum代表前i项的累加和
   //相当于求有多少个数落在[x-u,x-l]
  sum[0]=nums[0];
  for(let  i= 1;i<nums.length;i+=1){
      sum[i] =sum[i-1]+nums[i];
  }
  
  return count(sum,0,nums.length-1,lower,upper)
};

//原始数据
// 2，5，8，9，11，15   6，7，7，8，10，11  原始数据和原始区间[-1,2]
//对于右组的6来说的范围是[4,7],让其l和r从左边往右滑，先让R滑动，不能超过7，那么此时在5的位置上。然后l滑动，要大于等于4的第一个位置就停止，发现也只能到5的位置，此时有1个满足
// 对于7来说其范围[5,8],让其l和r继续往右滑，先让R滑动，不能超过8，那么此时在8的位置上。然后l滑动，要大于等于5的位置就停止，此时不需要滑动，此时有2个满足
// 对于7来说其范围[5,8],让其l和r继续往右滑，先让R滑动，不能超过8，那么此时在8的位置上。然后l滑动，要大于等于5的位置就停止，此时不需要滑动，此时有2个满足
// 对于8来说其范围[6,9],让其l和r继续往右滑，先让R滑动，不能超过9，那么此时在9的位置上。然后l滑动，要大于等于6的位置就停止，此时移动到8的位置，此时有2个满足
// 对于10来说其范围[8,11],让其l和r继续往右滑，先让R滑动，不能超过11，那么此时在11的位置上。然后l滑动，要大于等于8的位置就停止，此时不需要滑动，此时有3个满足
// 对于11来说其范围[9,12],让其l和r继续往右滑，先让R滑动，不能超过12，那么此时在11的位置上。然后l滑动，要大于等于9的位置就停止，此时移动到9的位置，此时有2个满足

//arr[l...r]已经不传进来了，只传进来sum(前缀和数组)
//求的东西在原始的arr[l...r]中，有多少个子数组累加和在[lower,upper]上
function count(nums,l,r,lower,upper){
   if(l===r){
        //说明单独这个数，就达标了
       if(nums[l]>=lower&&nums[l]<=upper){
           return 1;//0...l
       }
       return 0;
   }

   let mid=l+((r-l)>>1);
   let left=count(nums,l,mid,lower,upper);//左边有多少个达标的
   let right=count(nums,mid+1,r,lower,upper);//右边都多少个达标的
   let merge=mergeSort(nums,l,mid,r,lower,upper);
   return left +right+merge;
}
//不merge但是对于右组中的每个数x，求左组中有多少个数位于[x-upper,x-lower]
function mergeSort(arr,l,m,r,lower,upper){
 let ans=0;
 let windowL=l;
 let windowR=l;
   //因为是排好序的，所以上限和下限不回退
  //因为窗口不回退，所以for循环只有一层
 for(let i=m+1;i<=r;i+=1){
     let min=arr[i]-upper;//这里进行了区间范围的转化
     let max= arr[i]-lower;
      // 窗口右边界没超 && 右边界位置的前缀和小于等于最大值，则右边界++
      while(windowR<=m&&arr[windowR]<=max){
          windowR++;
      }
      // 窗口左边界没超 && 左边界位置的前缀和小于最小值，则左边界++
      while(windowL<=m&&arr[windowL]<min){
          windowL++;
    }
    //窗口的表达[l...r）
    ans+=Math.max(0,windowR-windowL)
 }
 //正常merge
 let help =Array.from(r-l+1).fill(0);
   let p1=l;
   let p2=m+1;
   let k=0;
   while(p1<=m&&p2<=r){
    if(arr[p1]<=arr[p2]){
      help[k++] =arr[p1++];
    }else{
       help[k++] =arr[p2++];
    }
   }

   while(p1<=m){
    help[k++] =arr[p1++];
   }

   while(p2<=r){
    help[k++] =arr[p2++];
   }

   for(i=0;i<help.length;i+=1){
    arr[l+i]=help[i];
  }

  return ans;
}
