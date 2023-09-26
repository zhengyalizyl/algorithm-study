//新加进来的数，现在停在了index的位置，依次往上移动
function headpInsert(arr,index){
  while(arr[index]>arr[Math.floor((index-1)/2)]){
    [arr[index],arr[Math.floor((index-1)/2)]] =[arr[Math.floor((index-1)/2)],arr[index]];
    index=Math.floor((index-1)/2)
  }
}



//从index位置，往下看，不断的下沉
function heapify(arr,index,heapSize){
  let left=index*2+1;
  while(left<heapSize){ //如果有做孩子，可能没有右孩子
    //把较大孩子的下标给largest
   let largest =left+1<heapSize&&arr[left+1]>arr[left]?left+1:left;
   largest =arr[largest]>arr[index]?largest:index;
   if(largest===index){
    break
   }
      //index和较大孩子要交换
   [arr[largest],arr[index]] =[arr[index],arr[largest]];
   index=largest;
   left =index*2+1;
  }
}