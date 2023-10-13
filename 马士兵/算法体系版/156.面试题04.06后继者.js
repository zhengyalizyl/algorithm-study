//  https://leetcode.cn/problems/successor-lcci/description/
// 面试题 04.06. 后继者
// 设计一个算法，找出二叉搜索树中指定节点的“下一个”节点（也即中序后继）。

// 如果指定节点没有对应的“下一个”节点，则返回null。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
  if(root==null){
      return null
  }
   let ans=[]
    inorder(root,ans);
    const find=ans.findIndex(item=>item==p.val);
    console.log(ans,find)
    if(find<0||find===ans.length-1){
      return null
    }
    return new TreeNode(ans[find+1])
};


// 中序打印所有节点 
function inorder(root, ans) {
 if (root == null) return;
 //1
 inorder(root.left, ans);
 //2.
 // console.log(root.val);
 ans.push(root.val)
 //3.
 inorder(root.right, ans);
}