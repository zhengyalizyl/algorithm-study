/**
 * 给定一个单链表的头节点head,请判断改链表是否为回文结构
 * 
 */

function listPartion(head,pivot){
  let sH=null;//small head
  let sT=null;//small tail
  let eH=null;//equal head
  let eT=null;//equal tail
  let mH=null;//big head
  let mT=null;//big tail
  let next=null;//savle next node

  while(head!=null){
    next =head.next;//记住下一步指针
    head.next =null;
    if(head.value<pivot){
      if(sH===null){
        sH=head;
        sT=head;
      }else{
           sT.next=head;
           sT=head;
      }
    }else if(head.value===pivot){
      if(eH===null){
         eH=head;
         eT=head;
      }else {
        eT.next=head;
        eT=head;
      }
    }else{
      if(mH===null){
        mH=head;
        mT=head;
      }else{
        mT.next=head;
        mT=head;
      }
    }
    head=next;
  }

  //小于区域的尾巴，连等于区域的头，等于区域的尾巴连大于区域的头
  if(sT!=null){//如果有小于区域
      sT.next=eH;
      eT=eT=null?sT:eT;//下一步，谁去连大于区域的头，谁就变成eT
  }
  //下一步，一定是需要用eT去连大于区域的头
  // 有等于区域，eT ->等于区域的尾结点
  // 无等于区域，eT ->小于区域的尾结点 
  // eT尽量不为空的节点
  //上面的if,不管跑了还是没有eT
  //all reconnect
  if(eT!=null){//如果小于区域和等于区域，不是都没有
    eT.next=mH;
  }
  return sH!=null?sH:(eH!=null?eH:mH);
}