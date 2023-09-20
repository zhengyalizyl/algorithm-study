function findNum(arr,num){
  if(!arr||arr.length===0){
    return false;
  }

  let leftIndex=0;
  let rightIndex = arr.length-1;
  // arr[0....N-1] num

  while(leftIndex<=rightIndex){
    //  let midIndex = (leftIndex+rightIndex)/2;//如果leftIndex和rightIndex很大，这里会溢出
    let midIndex =leftIndex+parseInt((rightIndex-leftIndex)/2)
     if(arr[midIndex]===num){
       if(arr[mid]===num){
         return true
       }else if(arr[midIndex]<num){
        leftIndex = midIndex+1;
       }else{
         rightIndex =midIndex-1;
       }
     }
     
    }
    return false;
}