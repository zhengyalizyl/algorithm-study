// 一个数组中有一种数出现k次，其它数出现了M次，M>1,K<M。找到出现k次数，要求额外空间复杂度o(1)，时间复杂度o(n)

// 1 <= arr[i] < 2^31
function onlyKTimes(arr,k,m){
  let t= new Array(32).fill(0);
  // t[0] 0位置的1出现几个
  // t[i] i位置的1出现几个
  for(let i=0;i<arr.length;i+=1){
    let num =arr[i];
    for(let j=0;j<=31;j+=1){ //因为arr[i] < 2^31，故这里j最多得于31位
      if(((num>>j)&1)!=0){ // 依次提取出arr[i]上的数字，(num>>i)&1)!=0,代表arr每个位置上有1
          t[j] +=1;
      }
    }
  }

  let ans=0;
  for(let i=0;i<32;i+=1){
     if(t[i]%m!=0){ //说明k在i位上有1
        ans |=(1<<i);//将i的有1的数字放到ans上
     }
     return ans;
  }
}


// https://leetcode.cn/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof/description/

// 剑指 Offer 56 - II. 数组中数字出现的次数 II

// 在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。
// 示例 1：

// 输入：nums = [3,4,3,3]
// 输出：4
// 示例 2：

// 输入：nums = [9,1,7,9,7,9,7]
// 输出：1
 

// 限制：

// 1 <= nums.length <= 10000
// 1 <= nums[i] < 2^31


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  return onlyKTimes(nums,1,3)
};

function onlyKTimes(arr,k,m){
let t= new Array(32).fill(0);
// t[0] 0位置的1出现几个
// t[i] i位置的1出现几个
for(let i=0;i<arr.length;i+=1){
 let num =arr[i];
 for(let j=0;j<=31;j+=1){ //因为arr[i] < 2^31，故这里j最多得于31位
   if(((num>>j)&1)!=0){ // 依次提取出arr[i]上的数字，(num>>i)&1)!=0,代表arr每个位置上有1
       t[j] +=1;
   }
 }
}
let ans=0;
for(let i=0;i<32;i+=1){
  if((t[i]%m)!=0){ //说明k在i位上有1,这样就可以把出现k的那个取出来
     console.log(t[i])
     ans|=(1<<i);//将i的有1的数字放到ans
     // ans+= ((t[i]%m)<<i);//因为对其取余的余数必然是k的那个上的
  } 
}

return ans;
}