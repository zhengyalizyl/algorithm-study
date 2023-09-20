function Node(val){
  this.value =val;
  this.next = null;
}

function MyQueue(){
   this.head =null;
   this.tail =null;
   this.length =null;

}


//插入
MyQueue.prototype.isEmpty = function(){
  return this.length===0;
}


MyQueue.prototype.size=function(){
  return this.length;
}

//给个val值，让其链表将其连接起来,押入某个值
MyQueue.prototype.offer=function(val){
  let currentNode = Node(val);
   if(this.tail===null){
     this.head=currentNode;
     this.tail =currentNode;
   }else{
    this.tail.next=currentNode;
    this.tail=currentNode;
   }
   this.length+=1;
}


//弹出
MyQueue.prototype.poll=function(){
  let ans =null;
  if(!this.head){
     ans =this.head.value;
    this.head =this.head.next;
     this.length-=1;
  }
  if(this.head= null){
    this.tail =null;
  }
  return ans;
}

//找出头节点的值
MyQueue.prototype.peek=function(){
  let ans=null;
  if(this.head!==null){
     ans =this.head.value;
  }
  return ans;
}