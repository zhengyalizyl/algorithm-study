/**
 * 给定一个只包含正数的数组arr，arr中任何一个子数组sub，
 * 一定都可以算出 A指标：(sub累加和 )*(sub中的最小值)是什么，那么所有子数组中，这个值最大是多少？
 * 
*/
// 方法一：暴力枚举每一个子数组，计算指标A(子数组累加和*子数组最小值)
function maxIndicator(arr){
  let max=Number.MIN_VALUE;
  for(let i=0;i<arr.length;i+=1){
     for(let j=i;j<arr.length;j+=1){
       let sum=0;
       let minNum=Number.MAX_VALUE;
       for(let k=i;k<=j;k+=1){
         sum+arr[k];
         minNum=Math.min(minNum,arr[k])
       }
       max=Math.max(max,sum*minNum)
     }
  }
  return max;
}


//方法二：单调栈+前缀和
function maxIndicator2(arr){
   let n=arr.length;
   let sums=new Array(n);
   sums[0]=arr[0];
   //获得前缀和
   for(let i=1;i<n;i+=1){
     sums[i]=sums[i-1]+arr[i]
   }

   let max=Number.MIN_VALUE;
    let stack=[];
    for(let i=0;i<n;i+=1){
      //arr[stack[0]]==arr[i]是算错的，但是后面还是会算正确
      // >=: 可能存在重复值，会导致计算错误，但是最后一个相等值会计算正确
      while(!stack.length&&arr[stack[0]]>=arr[i]){
        let j=stack.pop();
        max=Math.max(max,(stack.length?sums[i-1]:(sums[i-1]-sums[stack[0]]))*arr[j])
      }
      stack.push(i)
    }

    while(!stack.length){
      let j=stack.pop();
       max=Math.max(max,(stack.length?sums[n-1]:(sums[i-1]-sums[stack[0]]))*arr[j])
    }
    return max;
}
