//分2路
function  splitNum(arr){
  let lessEqualR=-1; //小于等于某个数的的区域指针,这个是扩充位置
  let index=0;
  let mostR=arr.length -1;//数组最后一个索引
  while(index<arr.length){
     if(arr[index]<=arr[mostR]){ //当前数小于某个值，当前数和小于等于区做的下一个数交换，小于区右扩
      [arr[lessEqualR+1],arr[index]] =[arr[index],arr[lessEqualR+1]];
      lessEqualR +=1;
      index+=1;
     }else{
        // 当前数大于某个数，当前数直接跳一下
        index+=1;
     }
  }
}

//分3路
//当前数小于某个值，当前书和小于区的下一个数做交换，小于区右扩。
// 当前数大于某个值，当前数和大于区的前一个数做交换，大于区做左扩，当前数不动
// 等于某个值，就直接跳
// 【3，4，4，6，4，7，0，1，5，2，4】
function  splitNum2(arr){
  let n=arr.length;
  let lessR=-1; //小于某个数的的区域指针,这个是扩充位置。定义为小于区域的右边界
  let index=0;
  let morel=n-1;//大于区域在n-1的位置，定义为大于区域的左边界
  // arr[n-1]做划分值
  while(index<morel){
     if(arr[index]<arr[n-1]){
      [arr[lessR+1],arr[index]] =[arr[index],arr[lessR+1]];
      lessR +=1;
      index+=1;
     }else if(arr[index]>arr[n-1]){
      [arr[morel-1],arr[index]] =[arr[index],arr[morel-1]];
      morel-=1;
     }else{
      index+=1;
     }
  }
  //大于区域的位置要和划分值的位置坐交互
   [arr[morel],arr[n-1]]=[arr[n-1],arr[morel]]
  
}


