// 给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。
// https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/

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
var deleteDuplicates = function(head) {
    if (!head || !head.next) return head;
    //建立一个虚头
    let ret = new ListNode(0, head);
    let p = ret;
    while (p.next) {
        if (p.next.next && p.next.val === p.next.next.val) {
            //能到这一步，说明找到了相同的
            let q = p.next.next;
            while (q && q.val == p.next.val) {
                q = q.next;
            }
            //走到这一步，说明的下个相同的下个节点了
            p.next = q; //这部相当于过滤掉相同的节点信息
        } else {
            p = p.next
        }
    }
    return ret.next
};