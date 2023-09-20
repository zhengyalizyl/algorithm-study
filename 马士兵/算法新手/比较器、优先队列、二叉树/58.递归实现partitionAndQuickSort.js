//arr[l...r]，拿arr[R]做划分值
// [3,2,4,4,5,6,4],l=7,r=13
// l...r < = >
function partition(arr,l,r){
   let lessR=l-1;//小于区域的右边界
   let morel=r;//大于区域的左边界
   let index=l;

   while(index<morel){
    if(arr[index]<arr[r]){
      [arr[lessR+1],arr[index]] =[arr[index],arr[lessR+1]];
      lessR +=1;
      index+=1;
    }else if(arr[index]>arr[r]){
      [arr[morel-1],arr[index]] =[arr[index],arr[morel-1]];
      morel-=1;
    }else{
      index+=1
    }
   }
    //大于区域的位置要和划分值的位置坐交互
    [arr[morel],arr[r-1]]=[arr[r-1],arr[morel]];
    return [lessR+1,morel];//区域的第一个数和区域的最后一个数
}



function quickSort(arr){
    if(arr===null||arr.length<=1){
      return arr;
    }

    process(arr,0,arr.length-1);

}


function process(arr,l,r){
    if(l>=r){
     return
    }
    //l<r
    let equalE =partition(arr,l,r);
    //equalE[0]等于区域的第一个数
    //equalE[1]等于区域的最后一个数
    process(arr,l,equalE[0]-1);
    process(arr,equalE[1]+1,r)
}
