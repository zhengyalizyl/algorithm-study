function insertSort(arr){
  if (!arr || arr.length === 0) {
    return arr;
  }
  const len = arr.length;
  // 0 ~ 0 的位置上有序
  // 0 ~ 1 的位置上有序
  // 0 ~ 2 的位置上有序
  // 0 ~ 3 的位置上有序
  // 0 ~ 4 的位置上有序
  // 0～i 的位置上有序
  // 0 ~ n-1的位置上有序
  // 相当于后面的插入到前面有序中
  for(let i =1;i<len;i+=1){ //0-i做到有序
    let newNumIndex=i;
     //左边没有数，并且左边的数小于右边的数，就不应该循环
     while(newNumIndex>0&&arr[newNumIndex-1]>arr[i]){
      [arr[newNumIndex],arr[newNumIndex-1]] =[arr[newNumIndex-1],arr[newNumIndex]];
      newNumIndex -=1
     }
  }
  return arr;
}
