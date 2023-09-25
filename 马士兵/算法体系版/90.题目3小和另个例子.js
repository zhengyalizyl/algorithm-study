//逆序对
// https://leetcode.cn/problems/shu-zu-zhong-de-ni-xu-dui-lcof/

// LCR 170. 交易逆序对的总数
// 在股票交易中，如果前一天的股价高于后一天的股价，则可以认为存在一个「交易逆序对」。请设计一个程序，输入一段时间内的股票交易记录 record，返回其中存在的「交易逆序对」总数。
// 示例 1:

// 输入：record = [9, 7, 5, 4, 6]
// 输出：8
// 解释：交易中的逆序对为 (9, 7), (9, 5), (9, 4), (7, 5), (7, 4), (7, 6), (5, 4), (6, 4)。
 

// 限制：

// 0 <= record.length <= 50000

//求右边有多少个数比这个数小
/**
 * @param {number[]} record
 * @return {number}
 */
var reversePairs = function(record) {
  let arr=record;
  if(arr===null||arr.length<2){
     return 0
   }
  return process(arr,0,arr.length-1);
 };
 
 function process(arr,l,r){
    if(l==r){
     return 0
    }
 
    let mid=l+((r-l)>>1);
    return process(arr,l,mid) //左边产生的小和
          +process(arr,mid+1,r) //右边产生的小和
          +merge(arr,l,mid,r)//自己merge产生的小和
 
 }
 //1236 2446
 //需要从右往左进行merge，即需要从后往前走，谁大拷贝谁的原则
 //左边的6先与右边的6比较，这个相等，先拷贝右边的6，因为知道右边那块有多少个数比左边的那块6的少，
 //此时右边向前进一位，走到4那里
 //此时因为6比4大，所以拷贝6，左边的6向左移动一位，移动到3那里了
// 发现3比4小，所以此时拷贝了4，右边的又向左走了一位，走到4那里
//发现3比4小，所以此时拷贝了4，右边的又向左走了一位，走到2那里了
// 发现3比2大，此时拷贝了3，左边的左走一步，走到了2那里
// 2与2比较，此时先拷贝右边的2，右边向左走一位，停止了
// 
 function merge(arr,l,m,r){
    let help=Array(r-l+1);
    let p1=m;
    let p2=r;//这就保证了垮组比较
    let res=0;
    let k=r-l;
    while(p1>=l&&p2>=m+1){
      //为什么这里是p2-m呢？   
      //左边的6比右边的6大，那么即左边的6，比右边的最右侧都大，那么比右边的所有的数都大
     res+=arr[p1]>arr[p2]?(p2-m):0;//这里为什么>而不是大于等于，是因为当等于的时候，因为左边的知道右边比左边多少的个数
     if(arr[p1]<=arr[p2]){
        help[k--]=arr[p2--];
       // help.unshift(arr[p2]);//这个是大的那个数，用这种方法时间消耗很长
       //  p2-=1
    }else{
     //  help.unshift(arr[p1]);
     //   p1-=1;
       help[k--]=arr[p1--];
     }
    }
  
     //要么p1越界，要么p2越界
    //不可能同时越界
    while(p1>=l){
     // help.unshift(arr[p1]);
     // p1-=1;
     help[k--] =arr[p1--]
    }
 
    while(p2>=m+1){
     // help.unshift(arr[p2]);
     // p2-=1;
      help[k--] =arr[p2--]
    }
 
   //  console.log(help,'help')
    for(i=0;i<help.length;i+=1){
      arr[l+i]=help[i];
    }
 
    return res;
 
 }
 
 





 //方法二：

 /**
 * @param {number[]} record
 * @return {number}
 */
var reversePairs = function(record) {
  let arr=record;
  if(arr===null||arr.length<2){
     return 0
   }
  return process(arr,0,arr.length-1);
 };
 
 function process(arr,l,r){
    if(l==r){
     return 0
    }
 
    let mid=l+((r-l)>>1);
    return process(arr,l,mid) //左边产生的小和
          +process(arr,mid+1,r) //右边产生的小和
          +merge(arr,l,mid,r)//自己merge产生的小和
 
 }
 
 //14689 112334
 function merge(arr,l,m,r){
   //[l..m] [m+1...r]
      let res=0;
    // 目前囊括进来的数，是从[m+1,j) 
    let j=m+1;
    for(let i=l;i<=m;i+=1){
      while(j<=r&&(arr[i]>(arr[j]))){
           j++;
      }
           res+=j-m-1;
    }
    let help =Array.from(r-l+1).fill(0);
    let p1=l;
    let p2=m+1;
    let k=0;
    while(p1<=m&&p2<=r){
     if(arr[p1]<=arr[p2]){
       help[k++] =arr[p1++];
     }else{
        help[k++] =arr[p2++];
     }
    }
 
    while(p1<=m){
     help[k++] =arr[p1++];
    }
 
    while(p2<=r){
     help[k++] =arr[p2++];
    }
 
    for(i=0;i<help.length;i+=1){
     arr[l+i]=help[i];
   }
 
   return res;
 
 }
 
 