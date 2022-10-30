// 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
// https://leetcode.cn/problems/reverse-linked-list-ii/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

var reverse = function(head, n) {
        if (n === 1) { return head };
        let tail = head.next;
        let p = reverse(head.next, n - 1);
        head.next = tail.next;
        tail.next = head;
        return p;
    }
    //相当于把链表拆成2部分，前面部分不变要增加一个虚拟头节点，后面那个部分相当于翻转第n-m+1个节点
var reverseBetween = function(head, left, right) {
    let res = new ListNode(0, head); //res是头节点
    let p = res;
    const cnt = right - left + 1;
    while (left = left - 1) {
        p = p.next;
    }
    p.next = reverse(p.next, cnt);
    return res.next

};