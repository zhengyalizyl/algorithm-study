/**
 * 给定两个长度都为N的数组weights和values，
 * weights[i]和values[i]分别代表 i号物品的重量和价值。给定一个正数bag，
 * 表示一个载重bag的袋子，装的物品不能超过这个重量，返回能装下的最大价值。
 * weights里面可以有0
 */

//所有货，重量和价值，都在w和v数组里
//为了方便，其中没有负数
//bag背包容量，不能超过这个载重
//返回：不超重的情况下，能够得到的最大价值
function maxValue(w,v,bag){
  if(w==null||v==null||w.length!=v.length||w.length==0){
    return 0
  }
  return process(w,v,0,bag)

}

//当前考虑到了index号货物，index..。所有的货物都可以自由选择
//做的选择不能超过背包容量
//返回最大价值

function process(w,v,index,bag){
  if(bag<0){ //背包没有容量了
    return -1;
  }
   if(index==w.length){
    return 0;
   }

   //有货，index位置有货
   //bag有空间，0
   //不要当前的货
   let p1=process(w,v,index+1,bag);
   //要当前的货
   let next=process(w,v,index+1,bag-w[index]);
   let p2=0;
   if(next!=-1){ //比如w=[7],v=[15]防止越界
    p2=v[index]+next;
   }
   return Math.max(p1,p2)
}

//方法二：
function f(w,v,bag){
  if(w==null||v==null||w.length!=v.length||w.length==0){
    return 0
  }
  
  
  //index 0-n
  //rest 负-bag
  let n=w.length;
  let arr=[];//n+1 * bag+1
  //arr[n][...]=0;
  for (let i = 0; i < n+1; i += 1) {
     arr[i]=[];
    for (let j = 0; j <bag+1; j += 1) {
        arr[i][j]=0;
    }
  }

  for(let i=n-1;i>0;i-=1){
    for(let rest=0;rest<=bag;rest+=1){
      let p1=arr[i+1][rest];
      let p2=0;
      let next=rest-w[i]<0?-1:arr[i+1][rest-w[index]];
      if(next!=-1){ //比如w=[7],v=[15]防止越界
        p2=v[index]+next;
       }
       arr[i][index]=Math.max(p1,p2)
    }
  }

  return arr[0][bag]//这个是由 return process(w,v,0,bag)决定
}