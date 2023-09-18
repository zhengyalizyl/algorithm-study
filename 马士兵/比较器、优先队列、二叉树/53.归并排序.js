function mergeSort1(arr,l,m,r){
    if(arr===null||arr.length<2){
      return
    }
    process(arr,0,arr.length-1)
    
}

//arr[l...r]范围上的数有序
function process(arr,l,r){
  if(l==r){
    return 
  }

  let mid =l+Math.floor((r-l)/2);
  process(arr,l,mid);
  process(arr,mid+1,r);
  merge(arr,l,mid,r)
}


 function merge(arr,l,m,r){
   let help= new Array(r-l+1).fill(0)
   let i=0;
   let p1=l;
   let p2=m+1;
   while(p1<=m&&p2<=r){
    help[i++] =arr[p1]<=arr[p2]?arr[p1++]:arr[p2++];
   }

   //要么p1越界，要么p2越界
   //不可能同时越界
   while(p1<=m){
    help[i++] =arr[p1++];
   }

   while(p2<=r){
    help[i++] =arr[p2++]
   }

   for(i=0;i<help.length;i+=1){
     arr[l+i]=help[i];
   }



 }

