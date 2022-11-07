// 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

//方法一，循环
var reverseList = function(head) {
    if (!head || !head.next) {
        return head;
    }
    let tail = head.next;
    let p = reverseList(head.next);
    head.next = tail.next;
    tail.next = head;
    return p;
};

var isPalindrome = function(head) {
    let p = head;
    let q;
    //先复制一份head
    while (p) {
        q = new ListNode(p.val);
        q.next = p.next;
        p.next = q;
        p = q.next;
    }
    let oldHead = new ListNode(0, head);
    let newHead = new ListNode(0, head);
    p = head;
    let old = oldHead;
    let new2 = newHead;
    let i = 0;
    while (p) {
        q = p.next;
        p.next = null;
        if (i % 2 === 0) {
            old.next = p;
            old = p;
        } else {
            new2.next = p;
            new2 = p;
        }
        i += 1;
        p = q;
    }

    let head2 = reverseList(newHead.next);
    q = head2;
    p = oldHead.next;
    if (!p || !p.next) {
        return true
    }
    while (p.next) {
        if (p.val != q.val) {
            return false
        }
        p = p.next
        q = q.next
    }
    return true
};