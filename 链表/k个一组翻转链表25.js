// 给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。
//  k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
// 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
// https://leetcode.cn/problems/reverse-nodes-in-k-group

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

//反转节点为n的链表
var revserN = function(head, n) {
    if (n == 1) {
        return head;
    }
    let tail = head.next;
    let q = revserN(head.next, n - 1);
    head.next = tail.next;
    tail.next = head;
    return q;
}

var _reverseN = function(head, n) {
    let cnt = n;
    let p = head;
    //当个数减少到0时，如果链表还没有的指向还没有到null,说明链表的长度大于要翻转的个数
    while ((cnt = cnt - 1) && p) {
        p = p.next;
    }
    if (!p) { return head }
    //如果够，则说明需要翻转
    return revserN(head, n)

}

var reverseKGroup = function(head, k) {
    //1.首先建立一个虚拟头节点
    let res = new ListNode(0, head);
    let p = res;
    let q = p.next; //指的翻转链表的第一个

    //建一个翻转的那个点,则说明链表已经翻转完了
    // [1,2,3,4,5,6]
    //第一次翻转[2,1,3,4,5,6]
    // p.next=_reverseN(q,k)原因是什么？？？？
    //因为_reverseN(q,k)后，p.next指向的是1的那个链表，需要把p.next指向翻转后的2
    while ((p.next = _reverseN(q, k)) != q) {
        console.log(p.next, p)
        p = q;
        q = p.next; //重新指向需要翻转链表的头部

    }
    return res.next

};