// 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
// https://leetcode.cn/problems/swap-nodes-in-pairs/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var revserN = function(head, n) {
    if (n == 1) { return head }
    let tail = head.next;
    let p = revserN(head.next, n - 1);
    head.next = tail.next;
    tail.next = head;
    return p
}

var _revserN = function(head, n) {
    if (n == 1) { return head };
    let cnt = n;
    let q = head;
    if ((cnt = cnt - 1) && q) {
        q = q.next;
    }
    if (!q) {
        return head;
    }
    return revserN(head, n)

}
var swapPairs = function(head) {
    let res = new ListNode(0, head);
    let p = res;
    let q = p.next;
    while ((p.next = _revserN(q, 2)) != q) {
        p = q;
        q = p.next;
    }
    return res.next
};