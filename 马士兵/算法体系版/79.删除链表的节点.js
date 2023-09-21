// https://leetcode.cn/problems/shan-chu-lian-biao-de-jie-dian-lcof/description/
// 剑指 Offer 18. 删除链表的节点
// 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。

// 返回删除后的链表的头节点。

// 注意：此题对比原题有改动

// 示例 1:

// 输入: head = [4,5,1,9], val = 5
// 输出: [4,1,9]
// 解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
// 示例 2:

// 输入: head = [4,5,1,9], val = 1
// 输出: [4,5,9]
// 解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
  if(head===null){
      return head;
  }
  //新建一个虚拟头节点
 let vnode =new ListNode();
 let cur =head;//进行循环的头节点
 vnode.next =head;
 let pre =vnode; //虚拟头节点
 while(cur!=null){
      if(cur.val!=val){
        pre =pre.next;
      }else{
        if(pre.next!=null){
             pre.next=pre.next.next
        }else{
             pre.next=null;
        }
      }
      cur=cur.next;
 }
 return  vnode.next;
};

var deleteNode1 = function(head, val) {
  if(head===null){
      return head;
  }
  //新建一个虚拟头节点
 let vnode =new ListNode();
 vnode.next =head;
 let pre =vnode; //虚拟头节点
 while(pre.next!=null){
      if(pre.next.val!=val){
        pre =pre.next;
      }else{
           pre.next=pre.next.next;
      }
 }
 return  vnode.next;

};


