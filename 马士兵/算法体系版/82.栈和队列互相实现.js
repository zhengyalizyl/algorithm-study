//如何用栈结构实现队列结构
// 如何用队列结构实现栈结构

//由栈实现队列
function MyStack(){
  this.arr=[];
}

MyStack.prototype.push=function(val){
this.arr.push(val);
}

MyStack.prototype.pop=function(){
return this.arr.pop();
}

MyStack.prototype.peek=function(){
return this.arr[this.arr.length-1]
}

MyStack.prototype.size=function (){
return this.arr.length;
}

MyStack.prototype.isEmpty=function (){
return this.arr.length===0;
}

//只要pop栈中为空，才能将push栈的数据转到pop栈中,
// 比如1,2,3,4,5
// push栈中就是5,4,3,2,1
// pop栈中1，2，3，4,5
//如果pop栈不为空的话，用户先1，2，3，4，5，pop栈中就有1，2，3，4，5，然后用户再弄6,此时pop栈就是6，1，2，3，4，5
//这个与实际要求的1，2，3，4，5，6不符合
function TwoStackQueue(){
  this.stackPush =new MyStack();
  this.stackPop= new MyStack();
}

//push栈向pop栈导入数据
TwoStackQueue.prototype.pushToPop=function(){
   if(this.stackPop.isEmpty()){
      while(!this.stackPush.isEmpty()){
        this.stackPop.push(this.stackPush.pop())
      }
   }
}


TwoStackQueue.prototype.add=function(val){
   this.stackPush.push(val);
   this.pushToPop();
}


TwoStackQueue.prototype.poll=function(){
  if(this.stackPop.isEmpty()&&this.stackPush.isEmpty()){
    throw new Error('栈是空的')
  }
  //走到这里的时候必然有一个为空
  this.pushToPop();
  let temp= this.stackPop.pop();
  return temp;
}


TwoStackQueue.prototype.peek=function(){
  if(this.stackPop.isEmpty()&&this.stackPush.isEmpty()){
    throw new Error('栈是空的')
  }
   //走到这里的时候必然有一个为空
  this.pushToPop();
  let temp= this.stackPop.peek();
  return temp;
}



//先进先出
function MyQueue(){
    this.arr=[];
}

MyQueue.prototype.push=function(val){
  this.arr.push(val)
}


MyQueue.prototype.pop=function(){
  if(this.isEmpty()){
    return 
  }
  return arr.shift();
}

MyQueue.prototype.isEmpty=function (){
 return this.arr.length==0;
}


MyQueue.prototype.peek=function(){
  if(this.isEmpty()){
    return 
  }
  return this.arr[0]
}

MyQueue.prototype.size=function (){
  return this.arr.length;
  }


//由队列实现栈
//用户给的是1，2，3，4，5，弹出的是5，4，3，2，1
//


function TwoQueueStack(){
  this.queue =new MyQueue();
  this.help =new MyQueue();
}

TwoQueueStack.prototype.push=function(val){
  this.queue.push(val)
}

TwoQueueStack.prototype.pop=function(){
  while(this.queue.size()>1){ //当queue只剩下一个数据
     this.help.push(this.queue.pop())
  }

  let ans=this.queue.pop();//经过此操作，此时queue里面没有数据了
  //此时需要help和queue互换
  let temp =this.queue;
   this.quue=this.help;
   this.help =temp;
  return  ans;

}

TwoQueueStack.prototype.peek=function(){
  while(this.queue.size()>1){ //当queue只剩下一个数据
    this.help.push(this.queue.pop())
 }
 let ans=this.queue.pop();//经过此操作，此时queue里面没有数据了
 this.help.push(ans);
   //此时需要help和queue互换
   let temp =this.queue;
   this.quue=this.help;
   this.help =temp;
  return  ans;
}


TwoQueueStack.prototype.isEmpty=function(){
  return this.queue.isEmpty();
}