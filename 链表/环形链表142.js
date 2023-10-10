// 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

// 不允许修改 链表。

// https://leetcode.cn/problems/linked-list-cycle-ii/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head) return head;
    let slow = head;
    let quick = head;
    // 判断有没有相遇
    while (quick && quick.next) {
        slow = slow.next;
        quick = quick.next.next;
        if (slow == quick) {
            break;
        }
    }
    //快指针知道最后了
    if (!(quick && quick.next)) {
        return null
    }
    //剩下来的，就是慢指针和快指针相遇
    //将慢指针至到初始的位置
    slow = head;
    while (slow != quick) {
        slow = slow.next;
        quick = quick.next;
    }
    return slow

};