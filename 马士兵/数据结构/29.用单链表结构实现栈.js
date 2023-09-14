function Node(val){
  this.value =val;
  this.next = null;
}

function MyStack(){
   this.head =null;
   this.length =null;

}


//插入
MyStack.prototype.isEmpty = function(){
  return this.length===0;
}


MyStack.prototype.size=function(){
  return this.length;
}

//给个val值，让其链表将其连接起来,押入某个值
MyStack.prototype.offer=function(val){
  let currentNode = Node(val);
   if(this.head===null){
     this.head=currentNode;
   }else{
     currentNode.next =head;
    this.head=currentNode;
      
   }
   this.length+=1;
}


//弹出
MyStack.prototype.poll=function(){
  let ans =null;
  if(!this.head){
     ans =this.head.value;
    this.head =this.head.next;
     this.length-=1;
  }
  return ans;
}

//找出头节点的值
MyStack.prototype.peek=function(){
  let ans=null;
  if(this.head!==null){
     ans =this.head.value;
  }
  return ans;
}