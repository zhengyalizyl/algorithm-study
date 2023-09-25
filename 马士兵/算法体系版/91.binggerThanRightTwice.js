//num的右边有多少个数乘以2后依然比num要小
//这个就是逆序对的变形题
// https://leetcode.cn/problems/reverse-pairs/

// 493. 翻转对
// 给定一个数组 nums ，如果 i < j 且 nums[i] > 2*nums[j] 我们就将 (i, j) 称作一个重要翻转对。

// 你需要返回给定数组中的重要翻转对的数量。

// 示例 1:

// 输入: [1,3,2,3,1]
// 输出: 2
// 示例 2:

// 输入: [2,4,3,5,1]
// 输出: 3
// 注意:

// 给定数组的长度不会超过50000。
// 输入数组中的所有数字都在32位整数的表示范围内。

function biggerThanRightTwice(arr){
  if(!arr||arr.length<2){
    return 0
  }

  return process(arr,0,arr.length-1)
}

function process(arr,l,r){
  if(l===r){
      return 0
  }
  let mid =l+((r-l)>>1)
  return  process(arr,l,mid) +process(arr,mid+1,r) +merge(arr,l,mid,r)
}

//14689 112334
function merge(arr,l,m,r){
  //[l..m] [m+1...r]
     let res=0;
   // 目前囊括进来的术，是从[m+1,j) 
   let j=m+1;
   for(let i=l;i<=m;i+=1){
     while(j<=r&&(arr[i]>(arr[j]*2))){
          j++;
     }
          res+=j-m-1;
   }
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

  return res;

}