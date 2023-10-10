// https://leetcode.cn/problems/reverse-linked-list/description/
// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
// 1->2->3->4->5->null
function  reverseLinkList(head){
  if (!head) return head;
  let pre = null;
  let next= head;
  while(!head){
      next=head.next;
      head.next =pre;
      pre= head;
      head=next;
  }
  return pre;
}