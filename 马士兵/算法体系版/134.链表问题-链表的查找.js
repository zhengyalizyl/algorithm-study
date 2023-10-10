/**
 * 输入链表头节点，奇数长度返回中点，偶数长度返回上中点；
 * 输入链表头节点，奇数长度返回中点，偶数长度返回下中点；
 * 输入链表头节点，奇数长度返回中点前一个，偶数长度返回上中点前一个；
 * 输入链表头节点，奇数长度返回中点前一个，偶数长度返回下中点前一个。
 * 
 * 
 */


// 输入链表头节点，奇数长度返回中点，偶数长度返回上中点
function midOrUpMidNode( head) {
  // 空节点、1个节点、2个节点，都是返回head
  if (head == null || head.next == null || head.next.next == null) return head;
  // 3个节点或以上，定义快、慢指针
 let slow = head, fast = head;
  // 当快指针可以走两步时，慢指针每次走一步，快指针走两步
  while (fast.next != null && fast.next.next != null) {
      slow = slow.next;
      fast = fast.next.next;
  }
  return slow;
}

// 输入链表头节点，奇数长度返回中点，偶数长度返回下中点
function midOrDownMidNode(head) {
  // 空节点、1个节点，都是返回head
  if (head == null || head.next == null) return head;
  // 2个节点或以上，定义快、慢指针
 let slow = head, fast = head;
  // 当快指针可以走两步时，慢指针每次走一步，快指针走两步
  while (fast.next != null && fast.next.next != null) {
      slow = slow.next;
      fast = fast.next.next;
  }
  // fast.next == null 说明是奇数个节点，否则是偶数个节点
  return fast.next == null ? slow : slow.next;
}

//1->2->3->4
// 输入链表头节点，奇数长度返回中点前一个，偶数长度返回上中点前一个
function midOrUpMidPreNode(head) {
  // 空节点、1个节点、2个节点，都是返回null
  if (head == null || head.next == null || head.next.next == null) return null;
  // 3个节点或以上，定义快、慢指针
  let slow = head, fast = head;
  // fast先走2步
  fast = fast.next.next;
  // 当快指针还可以走两步时，慢指针每次走一步，快指针走两步
  while (fast.next != null && fast.next.next != null) {
      slow = slow.next;
      fast = fast.next.next;
  }
  return slow;
}

//1->2->3->4
// 输入链表头节点，奇数长度返回中点前一个，偶数长度返回下中点前一个
function midOrDownMidPreNode(head) {
  // 空节点、1个节点，都是返回null
  if (head == null || head.next == null) return null;
  // 2个节点，返回head
  if (head.next.next == null) return head;
  // 3个节点或以上，定义快、慢指针
 let slow = head, fast = head;
  // fast先走1步
  fast = fast.next;
  // 当快指针还可以走两步时，慢指针每次走一步，快指针走两步
  while (fast.next != null && fast.next.next != null) {
      slow = slow.next;
      fast = fast.next.next;
  }
  return slow;
}
