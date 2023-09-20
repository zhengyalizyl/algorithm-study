// https://leetcode.cn/problems/sum-lists-lcci/

// 面试题 02.05. 链表求和

// 给定两个用链表表示的整数，每个节点包含一个数位。

// 这些数位是反向存放的，也就是个位排在链表首部。

// 编写函数对这两个整数求和，并用链表形式返回结果。

 

// 示例：

// 输入：(7 -> 1 -> 6) + (5 -> 9 -> 2)，即617 + 295
// 输出：2 -> 1 -> 9，即912
// 进阶：思考一下，假设这些数位是正向存放的，又该如何解决呢?

// 示例：

// 输入：(6 -> 1 -> 7) + (2 -> 9 -> 5)，即617 + 295
// 输出：9 -> 1 -> 2，即912



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//  3->4->6->9->9
// 7->9->8
// 0->4->5->0->0>1
var addTwoNumbers = function(l1, l2) {
  let len1 =listLength(l1);
  let len2=listLength(l2);
  let long=len1>=len2?l1:l2;
  let short=len1<len2?l1:l2;
   //1. long和short有，需要有个进位标志，（3+7+0)%10 =0,（3+7+0)/10 =1,进位信息是1
   //  （4+9+1)%10 =4,(4+9+1)/10=1;(6+8+1)%10=5,(6+8+1)/10=1;
   // 2.long有,(9+1)%10=0,(9+1)/10=1;(9+1)%10=0,(9+1)/10=1;0+1=1
   console.log(long,short,len1,len2)
   let curl = long;
   let curs=short;
   let last=curl;//因为要将得到的结果放在长的链表上
   let carryNum =0; //进位标志位的长度
   let curSumNum=0;
    while(curs!==null){
      console.log(curl)
     curSumNum=curl.val+curs.val+carryNum;
     carryNum = Math.floor(curSumNum/10);
     curl.val =curSumNum%10;//因为要将得到的结果放在长的链表上
     last =curl;
     curl=curl.next;
      curs=curs.next;
    }

    while(curl!==null){
        curSumNum =curl.val+carryNum;
         carryNum = Math.floor(curSumNum/10);
         curl.val =curSumNum%10;
         last=curl;
         curl=curl.next;
    }

    if(carryNum!==0){
        last.next =new ListNode(1)
    }
    return long


};

//求链表的长度
function listLength(head){
  let sum=0;
  while(head!==null){
      sum+=1;
      head=head.next;
  }
  return sum;
}
