// 给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。

// 构造这个链表的 深拷贝。 深拷贝应该正好由 n 个 全新 节点组成，其中每个新节点的值都设为其对应的原节点的值。新节点的 next 指针和 random 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。复制链表中的指针都不应指向原链表中的节点 。
// 
// 例如，如果原链表中有 X 和 Y 两个节点，其中 X.random --> Y 。那么在复制链表中对应的两个节点 x 和 y ，同样有 x.random --> y 。

// 返回复制链表的头节点。

// 用一个由 n 个节点组成的链表来表示输入/输出中的链表。每个节点用一个 [val, random_index] 表示：

// val：一个表示 Node.val 的整数。
// random_index：随机指针指向的节点索引（范围从 0 到 n-1）；如果不指向任何节点，则为  null 。
// 你的代码 只 接受原链表的头节点 head 作为传入参数。


// 链接：https://leetcode.cn/problems/copy-list-with-random-pointer


/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) { return head; }
    //遇到有2个指针的问题
    //首先，先复制这个指针
    let p = head;
    let q;
    while (p) {
        q = new Node(p.val);
        q.next = p.next;
        q.val = p.val;
        q.random = p.random;
        p.next = q; //需要把链表的指向改一下
        p = q.next; //p要移动
    }

    //其次，将复制的那个点的指针指向正确的位置，比如1‘->2,改成1' ->2'
    p = head.next;
    while (p) {
        if (p.random) {
            p.random = p.random.next;
        }
        p = p.next;
        if (p) {
            p = p.next;
        }
    }

    //第三步，将其复制的链表与原本被复制的链表断开
    let copyHead = head.next;
    p = head;
    while (p) {
        q = p.next;
        p.next = p.next.next;
        if (p.next) { q.next = p.next.next };
        p = p.next;
    }

    return copyHead
};