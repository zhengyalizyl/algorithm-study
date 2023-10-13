// 方法：基于递归套路
/** 
【思路分析】针对任意一棵子树 X，考虑可能的情况：

1. 与X无关（最大子BST不包含X）
  （1）x左子树搜索二叉树maxSubBstTreeSize的个数
   (2) x右子树搜索二叉树maxSubBstTreeSize个数
2. 与X有关（最大子BST包含X）
   （1）左右子树都是BST，X整体是BST，
   （2）x左子树的最大值和右子树的最大值。左子树最大值 < X节点值 < 右子树最小值
   （3）x左子树的个数size，x右子树的个数size
得到的信息有：
 (1) maxSubBstTreeSize
（2）BST
（3）max
（4）min
（5）size
// 如果BST为true，那么说明以x为头的这是一个平衡二叉树，此时maxSubBstTreeSize =size，
// 如果maxSubBstTreeSize!=size,说明x不是一个搜索二叉树，所以第二个条件可以省掉

所以，对于子树 X，需要从左右子树收集以下信息：

① 最大BST子树——左右子树所能获得的最大BST
② 最大BST子树大小——左右子树所能获得的最大BST大小
③ 左右子树的最大值和最小值——若与X有关，则左子树最大值 < X节点值 < 右子树最小值，并且需要保证左右子树都是BST，也就是①的子树需要保证是当前X的子树
*
*/

function maxSubBstSize(root){
  if(root==null){
    return null;
  }
  process(root).maxSubBstTreeSize;
}


 function process(root){
  if(root!=null){ //最大值和最小值不知道返回什么，故返回空
    return null
  }
  let leftInfo =process(root.left);
  let rightInfo =process(root.right);

  let size=1;
  let max=root.val;
  let min=root.val;
  if(leftInfo!=null){
     max=Math.max(max,leftInfo.max);
     min=Math.min(min,leftInfo.min);
     size += leftInfo.size

  }

  if(rightInfo!=null){
    max=Math.max(max,rightInfo.max);
    min=Math.min(min,rightInfo.min);
    size += rightInfo.size;

 }

  let p1=-1;//左边的最大搜索二叉树节点个数，因为最后要比较max,所以-1会落败
  if(leftInfo!=null){
     p1=leftInfo.maxSubBstTreeSize
  }

  let p2=-1;//右边的最大搜索二叉树节点个数，因为最后要比较max,所以-1会落败
  if(rightInfo!=null){
    p2 =rightInfo.maxSubBstTreeSize
  }

  //判断是不是左边是不是搜索二叉树
  let leftBst= leftInfo ==null?true:(leftInfo.maxSubBstTreeSize ==leftInfo.size);
  let rightBst =rightInfo ==null?true:(rightInfo.maxSubBstTreeSize  ==rightInfo.size);
  let p3=-1;
  if(leftBst&&rightBst){
     let leftMaxLessX =leftInfo==null?true:(leftInfo.max<x.value);
     let rightMinMoreX =rightInfo==null?true:(x.value<rightInfo.min);
     if(leftMaxLessX&&rightMinMoreX){
       let leftSize =leftInfo ==null?0:leftInfo.size;
       let rightSize =rightInfo == null?0:rightInfo.size
       p3= leftSize+rightSize+1;
     }
   }
 

 let maxSubBstTreeSize = Math.max(p1,p2,p3)

  return {
     maxSubBstTreeSize,
     size,
     max,
     min
  }
 }

