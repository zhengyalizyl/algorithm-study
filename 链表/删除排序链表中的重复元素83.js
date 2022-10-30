// 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
// https://leetcode.cn/problems/remove-duplicates-from-sorted-list/

var deleteDuplicates = function(head) {
    if (!head || !head.next) { return head }
    //先建一个虚头
    let ret = new ListNode(0, head);
    let p = ret.next;
    while (p.next) {
        if (p.val == p.next.val) {
            p.next = p.next.next;
        } else {
            p = p.next;
        }
    }
    return ret.next;
};