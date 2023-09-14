// https://leetcode.cn/problems/reverse-nodes-in-k-group/
// 25. K 个一组翻转链表

// 给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。

// k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

// 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

 //a->b->c->d->e->f ->g->h->null;
 var reverseKGroup = function(head, k) {
  let start =head;
  //首先将其划分,
  let end =getKGroupEnd(start,k);
 if(end ===null){
     return head;
 }
 //说明第一组已经凑齐了k个数
 head=end;//head指向的是end背后的地址
 reverse(start,end);// c->b->a->d->e->f->g->h->null
 let lastEnd =start;//上一组的结尾节点,lastStart指向a
  while(lastEnd.next!==null){
      start= lastEnd.next;
      end= getKGroupEnd(start,k);
      if(end===null){
          return head;
      }
      reverse(start,end);
      lastEnd.next=end;
      lastEnd=start;
  }
  return head //刚好是k的整数倍

};


function getKGroupEnd(start,k){ 
    while(k-1!==0&&start!==null){
        start =start.next;
        k-=1
    }
    return start;
}

//  s->a->b->c->d->e->f
function reverse(start,end){
   end =end.next;
   let pre=null;
   let cur =start;
   let next =null;
   while(cur!=end){
      next=cur.next;
      cur.next =pre;
      pre =cur;
      cur =next;
   }
   start.next =end;// s->f
}