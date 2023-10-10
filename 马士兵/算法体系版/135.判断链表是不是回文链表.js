/**
 * 给定一个单链表的头节点head,请判断改链表是否为回文结构
 * 
 */

// 1->2->3->2->1 ->null,奇数个 1->2->3->null,null<-2<-1
// 1->2->3->3->2->1->null，偶数个 1->2->3->null null<-3<-2<-1
function isPalindrome(head) {
  if (head == null || head.next === null) {
    return true
  }
  //1.快慢指针
  let slow = head;
  let fast = head;
  while (fast.next != null && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //2. 逆序中点(奇数节点时slow中点、偶数节点时slow是上中点)之后的链表
  let revHead = null;
  let cur = slow.next;
  let next = null;
  slow.next = null;
  while (cur != null) {
    next = cur.next;//把原先下一个的节点保留下来
    cur.next = revHead;
    revHead = cur;
    cur = next;
  }
  // 3. 头尾比较，判断是否是回文
  let p = revHead;
  cur = head;
  let ans = true;
  while (cur != null && p != null) {
    if (cur.val != p.val) {
      ans = false;//因为要把原链表还原，不能直接return
      break;
    }
    cur = cur.next;
    p = p.next;
  }

  // 4. 恢复原链表 
  let pre = null;
  cur = revHead;
  while (cur != null) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  slow.next = pre;
  return ans;
}