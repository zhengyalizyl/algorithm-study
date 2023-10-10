/**
 * 克隆链表
 */

 function Node(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function copyListWithRand(head){
  if(head==null){
    return head;
  }

  let cur =head;
  let next=null;
   //copy node and link to every node
   //1->2
   //1->1' ->2 ->2'
   while(cur!=null){
    //cur 老 next老的下一个
    next =cur.next;
    cur.next =new Node(cur.value);
    cur.next.next =next;
    cur=next;
   }

   cur =head;
   let curCopy =null
   //set copy node rand
   //  1->1'->2 ->2'
   while(cur!=null){
    // cur老
    // cur.next新copy
    next =cur.next.next;
    curCopy=cur.next;
    curCopy.rand =cur.rand!=null?cur.rand.next:null;
    cur=next;
   }

   //head head.next
   let res =head.next;
   cur=head;
   //split
   while(cur!=null){
    next=cur.next.next;
    curCopy=cur.next;
    cur.next =next;
    curCopy.next=next!=null?next.next:null;
    cur=next;
   }
   return res;
   
}