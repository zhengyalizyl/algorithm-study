// 堆排序：
// 先让整个数组都变成大根堆，建立堆的过程：① 从上到下的方法，时间复杂度 O(N*logN)；② 从下到上的方法，时间复杂度为 O(N)。
// 把堆的最大值和堆末尾的值交换，然后减少堆的大小，再去调整堆，一直周而复始，时间复杂度为O(N*logN)。
// 堆的大小减到 0 之后，排序完成。

//把数全部给你
function headpSort1(arr) {
  if (arr === null || arr.length < 2) {
    return
  }
  //0(n*logn)
  for (let i = arr.length - 1; i >= 0; i += 1) {
    heapify(arr, i, arr.length)
  }

  let heapSize = arr.length;
  heapSize -= 1;
  [arr[0], arr[heapSize]] = [arr[heapSize], arr[0]];
  //0(n*logn)
  while (heapSize > 0) { //o(n)
    heapify(arr, 0, heapSize); //o(logn)
    heapSize -= 1;
    [arr[0], arr[heapSize]] = [arr[heapSize], arr[0]];//o(1)
  }
}

//把数一个个给你和全部给你都可以用
function headpSort(arr) {
  if (arr === null || arr.length < 2) {
    return
  }

  //0(n*logn)
  for (let i = 0; i < arr.length; i + 1) {//o(n)
    headpInsert(arr, i);//o(logN)
  }

  let heapSize = arr.length;
  heapSize -= 1;
  [arr[0], arr[heapSize]] = [arr[heapSize], arr[0]];//断连
  //0(n*logn)
  while (heapSize > 0) { //o(n)
    heapify(arr, 0, heapSize); //o(logn)
    heapSize -= 1;
    [arr[0], arr[heapSize]] = [arr[heapSize], arr[0]];//o(1)
  }
}




//新加进来的数，现在停在了index的位置，依次往上移动
function headpInsert(arr, index) {
  let temp = Math.floor((index - 1) / 2);
  while (arr[index] > arr[temp]) {
    [arr[index], arr[temp]] = [arr[temp], arr[index]];
    index = temp;
  }
}



//从index位置，往下看，不断的下沉
function heapify(arr, index, heapSize) {
  let left = index * 2 + 1;
  while (left < heapSize) { //如果有做孩子，可能没有右孩子
    //把较大孩子的下标给largest
    let largest = left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left;
    largest = arr[largest] > arr[index] ? largest : index;
    if (largest === index) {
      break
    }
    //index和较大孩子要交换
    [arr[largest], arr[index]] = [arr[index], arr[largest]];
    index = largest;
    left = index * 2 + 1;
  }
}