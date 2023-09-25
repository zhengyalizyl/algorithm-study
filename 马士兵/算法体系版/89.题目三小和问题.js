// 比左边小的数都要相加
// 【6，3，2，1，6，7】//比如比6小的数是3，2，1
//   0 0 0 0 3+2+1 6+3+2+1+6
//   6+18=24;



// 4，2，1，3，0，6，3，9
// 就是求出那个数(a)的右边有多少个数(x)比他大，就会有多少个这个数*那个数，即a*x
// 只有垮组产生小和
function smallSum(arr){
  if(arr===null||arr.length<2){
    return 0
  }
  return process(arr,0,arr.length-1);
}

//arr[l..r]既要排好序，也需要求小和返回
// 所有merge时，产生的小和累加
// 左 排序 merge
// 右 排序 merge
//  merge
function process(arr,l,r){
   if(l==r){
    return 0
   }

   let mid=l+((r-l)>>1);
   return process(arr,l,mid) //左边产生的小和
         +process(arr,mid+1,r) //右边产生的小和
         +merge(arr,l,mid,r)//自己merge产生的小和

}

// 【6，3，2，1，6，7】=>先小范围的排序，然后分成最大的236 167
function merge(arr,l,m,r){
   let help=[];
   let p1=l;
   let p2=m+1;//这就保证了垮组比较
   let res=0;
   while(p1<=m&&p2<=r){
    // 236 167 垮组比较
    //由于2比1要大，不满足，2比1要大不满足，6比
    //如果右边的最左边的比2要小，说明，右边的每一个都比2要大
   // p2>p1,说明右边比p2更右侧的都比p2要大，即r-p2+1
    res+=arr[p1]<arr[p2]?(r-p2+1)*arr[p1]:0;//这里为什么<而不是小于等于，是因为当等于的时候，因为右边具体知道某个数
    if(arr[p1]<arr[p2]){
      help.push(arr[p1]);//这个时间消费太长
       p1+=1;
   }else{
     help.push(arr[p2]);
      p2+=1;
    }

   }
 
    //要么p1越界，要么p2越界
   //不可能同时越界
   while(p1<=m){
    help.push(arr[p1]);
    p1+=1;
   }

   while(p2<=r){
    help.push(arr[p2]);
    p2+=1;
   }

   for(i=0;i<help.length;i+=1){
     arr[l+i]=help[i];
   }

   return res;

}