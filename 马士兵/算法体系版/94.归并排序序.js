// https://leetcode.cn/problems/count-of-range-sum/description/
// 327. 区间和的个数


// 给你一个整数数组 nums 以及两个整数 lower 和 upper 。求数组中，值位于范围 [lower, upper] （包含 lower 和 upper）之内的 区间和的个数 。

// 区间和 S(i, j) 表示在 nums 中，位置从 i 到 j 的元素之和，包含 i 和 j (i ≤ j)。
// 示例 1：
// 输入：nums = [-2,5,-1], lower = -2, upper = 2
// 输出：3
// 解释：存在三个区间：[0,0]、[2,2] 和 [0,2] ，对应的区间和分别是：-2 、-1 、2 。
// 示例 2：

// 输入：nums = [0], lower = 0, upper = 0
// 输出：1

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
//  sum[i..j] =arr[0..i] -arr[0..i-1];
//  结论：假设 0~i 整体累加和是 x，题目 [L,U] 必须以 i 位置结尾的子数组累加和有多少在 [L,R] 范围上。等同于去求：在 i 之前的所有前缀和中有多少个前缀和在 [x-U,x-L] 上。

// 13445 27889,原始目标是【0，5】
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


//arr[l...r]已经不传进来了，只传进来sum(前缀和数组)
//求的东西在原始的arr[l...r]中，有多少个子数组累加和在[lower,upper]上
function count(nums,l,r,lower,upper){
   if(l===r){
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
//不merge但是对于右组中的每个数，求左组中有多少个数位于[x-upper,x-lower]
function mergeSort(arr,l,m,r,lower,upper){
 let ans=0;
 let windowL=l;
 let windowR=l;
 //因为窗口不回退，所以for循环只有一层
 for(let i=m+1;i<=r;i+=1){
     let min=arr[i]-upper;
     let max= arr[i]-lower;
     // 窗口左边界没超 && 左边界位置的前缀和小于最小值，则左边界++
      while(windowR<=m&&arr[windowR]<=max){
          windowR++;
      }
      // 窗口右边界没超 && 右边界位置的前缀和小于等于最大值，则右边界++
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
