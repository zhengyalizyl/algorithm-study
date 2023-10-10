/**
 * 常见面试题
 * 给定两个可能有环也可能无环的单链表，头节点head1和head2.
 * 请实现一个函数，如果两个链表相交，请返回相交的第一个节点，如果不相交，返回null
 * 要求：如果两个链表长度之和为N，时间复杂度请达到o(n),额外空间复杂度请达到o(1)
 * 
 * 
 */


function getIntersectNode(head1, head2) {
  if (head1 == null || head2 == null) {
    return null
  }
  //分别获取2个链表的入环节点
  let loop1 = getLoopNode(head1);
  let loop2 = getLoopNode(head2);

  // 2. 情况一：两个链表都无环 
  if (loop1 == null && loop2 == null) {
    return getIntersectWithNoLoop(head1, head2);
  }

  // 3. 情况二：两个链表都有环
  if (loop1 != null && loop2 != null) {
    return getIntersectWithBothLoop(head1, loop1, head2, loop2);
  }

  // 4. 情况三：一个有环、一个无环，一定不相交 
  return null;

}

//找到链表第一个入环节点，如果无环，返回null
function getLoopNode(head) {
  //定义一个快慢指针，如果有环，必定会有快慢指针相等的时候
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return null
    }
  }

  //走到这里有2种可能
  if (fast === null || fast.next === null) {
    return null
  }

  //到这里只有一种可能就是成环
  //剩下来的，就是慢指针和快指针相遇
  //将快指针至到初始的位置,然后快慢指针一起走一步下去
  fast = head;
  while (slow != fast) {
    slow = slow.next;
    fast = fast.next;
  }
  // 再次相遇的点，就是入环节点
  return slow;
}

// 如果两个链表都无环，返回第一个相交节点，如果不相交，返回null
// 长链表第一走走差值步
function getIntersectWithNoLoop(headA, headB) {
  let cur1 = headA;
  let cur2 = headB;
  let cnt = 0;//计算其节点的差值
  while (cur1.next !== null) {
    cnt++;
    cur1 = cur1.next;
  }
  while (cur2.next !== null) {
    cnt--;
    cur2 = cur2.next;
  }

  if (cur1 != cur2) { //如果相交，最后的一个节点一定相等
    return null
  }
  cur1 = cnt > 0 ? headA : headB;//谁长，谁的头变成cur1
  cur2 = cur1 === headA ? headB : headA;//谁短，谁的头变成cur2
  cnt = Math.abs(cnt);
  // cur1 先走 cnt 步 
  while (cnt-- > 0) cur1 = cur1.next;
  // 然后cur1、cur2一起走 
  while (cur1 != cur2) {
    cur1 = cur1.next;
    cur2 = cur2.next;
  }
  // 相遇的点，就是相交点
  return cur1;
}

// 指针A、B分别遍历listA和listB，A或B遍历到尾之后再遍历listB或listA。当两指针相遇时即为交点，否则两个链表不相交。
function getIntersectWithNoLoop2(headA, headB) {
  let A = headA
  let B = headB
  while (A !== B) {
    A = A !== null ? A.next : headB
    B = B !== null ? B.next : headA
  }
  return A
}

// 如果两个链表都有环，返回第一个相交节点，如果不相交，返回null// 如果两个链表都有环，返回第一个相交节点，如果不相交，返回null
function getIntersectWithBothLoop(head1, loop1, head2, loop2) {
  // 1. 情况一：如果两个链表的入环节点不相等 
  if (loop1 != loop2) {
    // 假设从loop1下个节点开始往下走一圈 
    let cur = loop1.next;
    while (cur != loop1) {
      // 如果能和loop2相遇，则找到了相交点 
      if (cur == loop2) return loop1;
      cur = cur.next;
    }
    // 否则没找到相交点 
    return null;
  }

  // 2. 情况一：如果两个链表的入环节点相等 
  // 计算head1、head2到入环节点的节点个数差值 
  let cur1 = head1;
  let cur2 = head2;
  let cnt = 0;
  while (cur1 != loop1) {
    cnt++;
    cur1 = cur1.next;
  }
  while (cur2 != loop2) {
    cnt--;
    cur2 = cur2.next;
  }
  cur1 = cnt > 0 ? head1 : head2;
  cur2 = cur1 == head1 ? head2 : head1;
  cnt = Math.abs(cnt);
  // cur1 先走cnt步 
  while (cnt-- > 0) cur1 = cur1.next;
  // 然后cur1、cur2一起走
  while (cur1 != cur2) {
    cur1 = cur1.next;
    cur2 = cur2.next;
  }
  // 相遇的点，就是相交点
  return cur1;
}
