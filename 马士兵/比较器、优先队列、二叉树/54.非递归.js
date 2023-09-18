
function mergeSort2(arr){
  if(arr===null||arr.length<2){
    return
  }
   let step=1;
   let n=arr.length;
   while(step<n){
    let l=0;
     while(l<n){
      let m=0;
      if(n-1>=step){
        m=l+step-1;//有可能右边的数字凑不齐,这里可能溢出
      }else{
        m=n-1
      }

      //l...m
      if(m=n-1){
        break;
      }
      let r=0
      if(n-1-(m+1)+1>=step){
        r=m+step
      }else{
        r=n-1;
      }

      //l...m m+1...r
      merge(arr,l,m,r);

      if(r==n-1){
        break
      }else{
        l=r+1;
      }

     }

    //  step*=2;//这里可能溢出
    if(step>(n/2)){ //这里保证了不会被溢出
      break;
    }else{
      step*=2;
    }

   }
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