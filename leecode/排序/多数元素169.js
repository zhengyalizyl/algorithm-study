//https://leetcode.cn/problems/majority-element/description/

// 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

 

// 示例 1：

// 输入：nums = [3,2,3]
// 输出：3
// 示例 2：

// 输入：nums = [2,2,1,1,1,2,2]
// 输出：2
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  //第一种，如果元素出现次数大于数组长度的一半，那最中间的那个元素一定是出现次数最多的元素
  nums=nums.sort((a,b)=>a-b);
  return nums[Math.floor(nums.length/2)]
 
};

var majorityElement2 = function(nums) {
 let arr=[];
 //将所有的数组的数据的次数都统计起来，其中value是nums的元素，而count是该元素出现的次数
 for(let i=0;i<nums.length;i+=1){
 const index=arr.findIndex(item=>item.value===nums[i]);
 if(index>-1){
     arr[index].count+=1
 }else{
    arr.push({
         value:nums[i],
         count:1
    })
 }
 }
 //通过查找count的最大值，来找到对应的元素
 const newArr=arr.sort((a,b)=>b.count-a.count);
 return newArr[0].value;
 
};

