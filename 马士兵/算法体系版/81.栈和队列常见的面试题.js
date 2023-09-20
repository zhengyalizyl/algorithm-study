//实现一个特殊的栈，在基本功能的基础上，再实现返回栈中最小元素的功能
// 1.pop.push.getMin操作的时间复杂度都是o(1)
// 2.设计的栈类型可以使用现成的栈结构

//思路：准备2个栈，一个是数据栈，一个是min栈，要让min栈和数据栈同步增加
//大于之前的压入的数据，就把之前的数据压入到min栈中。如果小于之前压入的数据，就把此时的数据压入到min栈中，这样就能保证数据栈和min栈同步增长了


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

 //方法一：不是同步增加
 function MyStack1(){
    this.stackData=new MyStack();
    this.stackMin=new MyStack();
 }
 MyStack1.prototype.push=function(val){
      if(this.stackMin.isEmpty()){
        this.stackMin.push(val)
      }else if(val<=this.getMin()){
        this.stackMin.push(val)
      }
      this.stackData.push(val)
 }


 MyStack1.prototype.pop=function(){
  if(this.stackData.isEmpty()){
     throw new Error('栈已经空了')
  }
  let val= this.stackData.pop();
  if(val==this.getMin()){
    this.stackMin.pop()
  }
  return val;
}


MyStack1.prototype.getMin=function(){
    if(this.stackMin.isEmpty()){
      throw new Error('栈已经空了')
    }
    return this.stackMin.peek();
}

 //方法一：同步增加
 function MyStack2(){
  this.stackData=new MyStack();
  this.stackMin=new MyStack();
}
MyStack1.prototype.push=function(val){
    if(this.stackMin.isEmpty()){
      this.stackMin.push(val)
    }else if(val<=this.getMin()){
      this.stackMin.push(val)
    }else{
      // 数据栈和最小栈比较
       let newMin =this.stackMin.peek();//
       this.stackMin.push(newMin);
    }
    this.stackData.push(val)
}


MyStack1.prototype.pop=function(){
if(this.stackData.isEmpty()){
   throw new Error('栈已经空了')
} 
 let val= this.stackData.pop();
  this.stackMin.pop()
   return val;
}


MyStack1.prototype.getMin=function(){
  if(this.stackMin.isEmpty()){
    throw new Error('栈已经空了')
  }
  return this.stackMin.peek();
}