//用循环数组实现一个循环队列
function MyQueue(limit){
   this.limit=limit;
   this.pushi=0;//end
   this.polli=0;//begin
   this.size=0;
}

MyQueue.prototype.push=function(val){
     if(this.size===this.limit){
      throw new Error('队列满了，不能再加了')
     }
     this.size+=1;
     arr[pushi] =val;
     pushi =nextIndex(pushi,this.limit)
}


MyQueue.prototype.pop=function(){
  if(this.size===0){
   throw new Error('队列满了，不能再加了')
  }
  this.size-=1;
   let ans =arr[polli];
   polli =nextIndex(polli,this.limit)
   return ans;
}

MyQueue.prototype.isEmpty=function (){
  return this.size==0;
}


function nextIndex(i,limit){
  return i<limit-1?i+1:0;
}