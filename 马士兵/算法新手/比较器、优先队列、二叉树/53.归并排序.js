function mergeSort1(arr,l,m,r){
    if(arr===null||arr.length<2){
      return
    }
    process(arr,0,arr.length-1)
    
}

//arr[l...r]范围上的数有序
function process(arr,l,r){
  if(l==r){ //base case
    return 
  }

  let mid =l+Math.floor((r-l)/2);
  process(arr,l,mid);
  process(arr,mid+1,r);
  merge(arr,l,mid,r)
}


 function merge(arr,l,m,r){
  //  let help= new Array(r-l+1).fill(0)
  let help=[];
   let i=0;
   let p1=l;
   let p2=m+1;
   while(p1<=m&&p2<=r){
    // help[i++] =arr[p1]<=arr[p2]?arr[p1++]:arr[p2++];
    if(arr[p1]<=arr[p2]){
       help.push(arr[p1]);
      p1+=1;
    }else{
      help.push(arr[p2]);
      p2+=1;
    }

   }

   //要么p1越界，要么p2越界
   //不可能同时越界
   while(p1<=m){
    // help[i++] =arr[p1++];
    help.push(arr[p1]);
    p1+=1;
   }

   while(p2<=r){
    // help[i++] =arr[p2++];//这个的速度快一下
    help.push(arr[p2]);
    p2+=1;
   }

   for(i=0;i<help.length;i+=1){
     arr[l+i]=help[i];
   }

 }

