// https://leetcode.cn/problems/merge-two-sorted-lists/
// 21. 合并两个有序链表
// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
// 输入：l1 = [1,2,4], l2 = [1,3,4]
// 输出：[1,1,2,3,4,4]

// 示例 2：

// 输入：l1 = [], l2 = []
// 输出：[]
// 示例 3：

// 输入：l1 = [], l2 = [0]
// 输出：[0]
 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  if(list1===null||list2===null){
      return list1==null? list2:list1
  }
  //先比较哪个的头是小的，将来返回的是小头作为节点
 let head= list1.val<=list2.val? list1:list2
 let smallHead =head.next;
 let bigHead= head==list1? list2:list1;
  let pre=head;//pre指向的是head的地址
  while(smallHead!==null&&bigHead!==null){
      if(smallHead.val<=bigHead.val){
          pre.next =smallHead;
          smallHead =smallHead.next;
      }else{
          pre.next =bigHead;
          bigHead=bigHead.next;
      }
      pre =pre.next;
  }
  pre.next =smallHead!=null?smallHead:bigHead;
  return head;
};




//方法二:建一个虚拟节点
var mergeTwoLists = function(list1, list2) {
    if(list1===null||list2===null){
        return list1==null? list2:list1
    }
    //可以建立一个虚节点,得到的结果就是虚拟节点的下一位
   let vnode =new ListNode();
   let head= list1.val<=list2.val? list1:list2
   let smallHead =head;
   let bigHead= head==list1? list2:list1;
    vnode.next =head;
    let current=vnode;//current指向的是head的地址
    while(smallHead!==null&&bigHead!==null){
        if(smallHead.val<=bigHead.val){
            current.next =smallHead;
            smallHead =smallHead.next;
        }else{
            current.next =bigHead;
            bigHead=bigHead.next;
        }
        current =pre.next;
    }
    current.next =smallHead!=null?smallHead:bigHead;
    return  vnode.next;
 };