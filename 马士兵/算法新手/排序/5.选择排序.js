function selectSort(arr) {
  if (!arr || arr.length === 0) {
    return arr;
  }
  const len = arr.length;
  //0 ~ n-1找到最小值，将其放到0的位置上
  //1 ~ n-1找到最小值，将其放到1的位置上
  //2 ~  n-1 找到最小值，将其放到2的位置上
  //3 ~ n-1

  for (let i = 0; i < len; i += 1) {
    //0 ~ n-1
    //1 ~  n-1
    //2 ~ n-1
    //i ~ n-1
      // 假设最小值是在i位置上
    let minValueIndex =i;
    for(let j=i;j<len;j+=1){
        minValueIndex = arr[j]<arr[minValueIndex] ? j:minValueIndex;
    }

    if (minValueIndex != i) {
      [arr[i], arr[minValueIndex]] = [arr[minValueIndex], arr[i]]
    }
  }
  return arr
}