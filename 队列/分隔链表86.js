// 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。

// 你应当 保留 两个分区中每个节点的初始相对位置。

// 链接：https://leetcode.cn/problems/partition-list

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let small = new ListNode(0, head);
    let p1 = small;
    let big = new ListNode(0, head);
    let p2 = big;
    let p = head;
    while (p) {
        let q = p.next;
        if (p.val < x) {
            p.next = null;
            p1.next = p;
            p1 = p;
        } else {
            p.next = null;
            p2.next = p;
            p2 = p;
        }
        p = q;
    }
    p2.next = null;
    p1.next = big.next;

    return small.next;
};