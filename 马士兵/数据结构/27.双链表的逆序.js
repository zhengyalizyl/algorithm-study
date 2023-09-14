// 给你双链表的头节点 head ，请你反转链表，并返回反转后的链表。
// null<-1-><-2-><-3-><-4-><-5->null
function  reverseDoubleLinkList(head){
  if (!head) return head;
  let pre = null;
  let next= head;
  while(!head){
      next=head.next;
      head.next =pre;
      head.last =next;
      pre= head;
      head=next;
  }
  return pre;
}