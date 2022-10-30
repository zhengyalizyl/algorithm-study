// 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
// https://leetcode.cn/problems/rotate-list/


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
var rotateRight = function(head, k) {
    // 相当于向左移动了整个链表的长度-k
    //先求出链表的长度
    let n = 1;
    if (!head || !head.next) { return head }
    let p = head;
    while (p.next) {
        n += 1;
        p = p.next;
    }
    p.next = head; //将链表的最后一个指针指向链表的第一个
    k = k % n; //移动的节点比链表要长，后面几圈是循环的，不需要再移动了
    k = n - k; //最终得到向右移动多少个位置
    while (k) {
        k = k - 1;
        p = p.next;
    }
    let q = p.next;
    p.next = null; //将其第k个节点后断掉
    return q;

};