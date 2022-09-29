// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

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
var reverseList = function(head) {
    if (!head) return head;
    let pre = null;
    let current = head;
    let nextSib = head.next;
    while (current) {
        //指针指向
        current.next = pre;
        pre = current;
        current = nextSib;
        nextSib = nextSib && nextSib.next;
    }
    return pre
};