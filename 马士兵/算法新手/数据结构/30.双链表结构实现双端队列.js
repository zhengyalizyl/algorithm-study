function Node(val){
  this.value =val;
  this.next = null;
  this.last =null;
}


function MyDeque(){
   this.head =null;
   this.tail =null;
   this.size =null;
  }

  MyDeque.prototype.isEmpty=function(){
     return this.size=0;
  }

  MyDeque.prototype.size =function (){
    return this.size;
  }

  MyDeque.prototype.pushHead=function(val){
    let currentNode =Node(val);
    if(this.head ==null){
       this.head =currentNode;
       this.tail =currentNode;
    }else{
      currentNode.next =this.head;
      this.head.last =currentNode;
      this.head =currentNode;
    }
    this.size+=1;
  }


  MyDeque.prototype.pushTail=function(val){
    let currentNode =Node(val);
    if(this.tail==null){
       this.head =currentNode;
       this.tail =currentNode;
    }else{
      this.tail.next =currentNode;
      currentNode.next =this.tail;
      this.tail =currentNode;
    }
    this.size+=1;
  }


MyDeque.prototype.pollHead=function(){
  let ans= null;
  if(this.head===null){
       return ans;
  }
  this.size -=1;
  ans =this.head.value;
  if(head===tail){
    this.head =null;
    this.tail==null;
  }else{
    this.head =this.head.next;
    this.head.last =null;
  }
  return ans;
}
MyDeque.prototype.pollTail=function(){
  let ans= null;
  if(this.tail===null){
       return ans;
  }
  this.size -=1;
  ans =this.tail.value;
  if(head===tail){
    this.head =null;
    this.tail==null;
  }else{
    this.tail =this.tail.last;
    this.tail.next =null;
  }
  return ans;
}



