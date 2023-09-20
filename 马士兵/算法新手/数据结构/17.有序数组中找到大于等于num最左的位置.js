//arr有序，>=num最左
function mostLeftNoMoreNum(arr,num){
    if(arr==null||arr.length===0){
      return -1;
    }

    let leftIndex=0;
    let rightIndex=arr.length-1;
    let ans=-1;
    while(leftIndex<=rightIndex){
      let midIndex =leftIndex+parseInt((rightIndex-leftIndex)/2)
      if(arr[midIndex]>=num){
        ans =mid;
        rightIndex =midIndex-1;
      }else{
        leftIndex =midIndex+1;
      }
    }
    return ans;
}


//arr有序，<=num最右的位置
function mostRightNoMoreNum(arr,num){
  if(arr==null||arr.length===0){
    return -1;
  }

  let leftIndex=0;
  let rightIndex=arr.length-1;
  let ans=-1;
  while(leftIndex<=rightIndex){
    let midIndex =leftIndex+parseInt((rightIndex-leftIndex)/2)
    if(arr[midIndex]<=num){
      ans =mid;
      leftIndex =midIndex+1;
    }else{
      rightIndex =midIndex-1;
    }
  }
  return ans;
}