/**
 * 窗口内最大值或最小值更新结构的实现，假设一个固定大小为W的窗口，依次划过arr，
 * 返回每一次滑出状况的最大值。
 * 例如，arr = [4,3,5,4,3,3,6,7]，W = 3 时，返回：[5,5,5,4,6,7]。
 */

//方法一：
function right(arr,w){
  if(arr==null||w<1||arr.length<w){
    return null
  }

  let n=arr.length;
  let res=new Array(n-w+1);
  let index=0;
  let l=0;
  let r=w-1;
  while(r<n){
    let max=arr[l];
    for(let i=l+1;i<=r;i+=1){
      max=Math.max(max,arr[i])
    }

    res[index++] =max;
    l++;
    r++;
  }
  return res;
}


//方法二：
function  getMaxWindow(arr,w){
  if(arr==null||w<1||arr.length<w){
    return null
  }

  //双端队列
  //qmax窗口最大值的更新结构
  //放下标
  let qmax=[];
  let n=arr.length;
  let res=new Array(n-w+1);
  let index=0;
  for(let r=0;r<n;r+=1){

    //这个是扩展的
    //应该是从大到小的顺序
    while(!qmax.length&&arr[qmax[qmax.length-1]]<=arr[r]){
      qmax.pop();
    }

    qmax.push(r);
    if(qmax[0]==r-w){//这个是l向右移动，列表进行收缩的
      qmax.unshift();
    }

    if(r>=w-1){
      res[index++]=arr[qmax[0]];
    }
  }
  return res;
}