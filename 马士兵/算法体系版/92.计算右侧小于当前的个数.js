// https://leetcode.cn/problems/count-of-smaller-numbers-after-self/description/
// 315. 计算右侧小于当前元素的个数

// 给你一个整数数组 nums ，按要求返回一个新数组 counts 。数组 counts 有该性质： counts[i] 的值是  nums[i] 右侧小于 nums[i] 的元素的数量。

 

// 示例 1：

// 输入：nums = [5,2,6,1]
// 输出：[2,1,1,0] 
// 解释：
// 5 的右侧有 2 个更小的元素 (2 和 1)
// 2 的右侧仅有 1 个更小的元素 (1)
// 6 的右侧有 1 个更小的元素 (1)
// 1 的右侧有 0 个更小的元素
// 示例 2：

// 输入：nums = [-1]
// 输出：[0]
// 示例 3：

// 输入：nums = [-1,-1]
// 输出：[0,0]
 

// 提示：

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @return {number[]}
 */
//方式一：正常的排序
var countSmaller = function(nums) {
  let arr=nums;
    if(!arr||arr.length<2){
    return [0]
  }
   let ans=[];
    for(let i=0;i<arr.length;i+=1){
       ans[i]={
          value:arr[i],
          index:i,
          count:0
       }
    }
   process(ans,0,ans.length-1);
   let res = [];
    for (let i = 0; i < ans.length; i++) {
        res[ans[i].index] = ans[i].count; 
    }
    return res;
};

function process(arr,l,r){
  if(l===r) return ;
  let mid =l+((r-l)>>1)
  process(arr,l,mid);//
  process(arr,mid+1,r);
  merge(arr,l,mid,r);
}

//14689 112334
function merge(arr,l,m,r){
  //[l..m] [m+1...r]
   // 目前囊括进来的数，是从[m+1,j) 
   let j=m+1;
   for(let i=l;i<=m;i+=1){
     while(j<=r&&(arr[i].value>(arr[j].value))){
          j++;//因为这里加了一个
     }
       arr[i].count+=(j-m-1);
   }
  
   let help =[];
   let p1=l;
   let p2=m+1;
   let k=0;
   while(p1<=m&&p2<=r){
    if(arr[p1].value<=arr[p2].value){
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
}


//方式二：逆序对
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  let arr=nums;
    if(!arr||arr.length<2){
    return [0]
  }
   let ans=[];
    for(let i=0;i<arr.length;i+=1){
       ans[i]={
          value:arr[i],
          index:i,
          count:0
       }
    }
   process(ans,0,ans.length-1);
   let res = [];
    for (let i = 0; i < ans.length; i++) {
        res[ans[i].index] = ans[i].count; 
    }
    return res;
};

function process(arr,l,r){
  if(l===r) return ;
  let mid =l+((r-l)>>1)
  process(arr,l,mid);//
  process(arr,mid+1,r);
  merge(arr,l,mid,r);
}

//14689 112334
function merge(arr,l,m,r){  
   let  i=m;
   let j=r;
    while(i>=l&&j>m){
       if(arr[i].value> arr[j].value){
         arr[i--].count+=j-m;
       }else{
          j--;
       }
    }
   let help =[];
   let p1=l;
   let p2=m+1;
   let k=0;
   while(p1<=m&&p2<=r){
    if(arr[p1].value<=arr[p2].value){
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
}

