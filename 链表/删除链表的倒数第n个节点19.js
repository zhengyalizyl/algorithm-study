// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
// https://leetcode.cn/problems/remove-nth-node-from-end-of-list/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //建立一个虚头
    let ret = new ListNode(0, head);
    let p = ret;
    let q = p;
    //删除倒数第n个节点，相当于有一个点虚头的点多走n步，为q，另外一个从虚头开始走为p
    //当那个多走n步的指针指向尾节点时候(q.next为null时)，p指的那个节点指向恰好是删除节点的前一个指针
    while (n) {
        q = q.next;
        n = n - 1;
    }
    while (q.next) {
        p = p.next;
        q = q.next;
    }
    p.next = p.next.next;
    return ret.next;
};