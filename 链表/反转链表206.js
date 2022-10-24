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
//方法一，循环
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

//方法二：递归 【1，2，3，4，5】
var reverseList = function(head) {
    if (!head || !head.next) {
        return head
    }
    let tail = head.next;
    let p = reverseList(head.next);
    //这里相当于 1,2,3,4    5
    //1,2,3  5, 4
    //1,2   5,4,3
    //1  5,4,3,2
    head.next = tail.next;
    tail.next = head;
    return p
};