// 给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。
// https://leetcode.cn/problems/binary-tree-postorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var postOrder = function(root, ans) {
    if (!root) return []
    postOrder(root.left, ans); //0
    postOrder(root.right, ans); //1
    ans.push(root.val); //2
}

var postorderTraversal = function(root) {
    //第一种方法，采用递归，后序遍历是根结点在最后，左右根，先递归左边，再递归右边，最后递归根
    //  let ans=[];
    //  postOrder(root,ans);
    //  return ans
    //第二种方法，后序遍历是根结点在最后，左右根，先递归左边，再递归右边，最后递归根,采用栈的方式进行,root->left->left.left->将左子树left.left弹出，root->left->left.right,将左子树的left.right弹出，最后弹出left，然后放入右子树 root->right->right.left,将右子树right.left弹出，root->right->right.right,将右子树的right.right弹出，最后弹出right，最后将root弹出
    if (!root) { return root }
    let stack = []; //保存的当前进栈的数字,及相关的节点地址
    let stack2 = []; //0代表即将把root左子树push进来，1代表即将root右子树Push进来，2代表输出栈元素,记录其过程,程序状态栈
    let ans = [];
    stack.push(root);
    stack2.push(0); //相当于把root压进来，即将压入根结点的左子树
    while (stack.length > 0) {
        let status = stack2.pop();
        switch (status) {
            case 0:
                {
                    //说明此时是根结点进栈
                    stack2.push(1); //根结点的状态码从0改为1
                    if (stack[stack.length - 1].left) {
                        stack.push(...stack[stack.length - 1].left);
                        stack2.push(0);
                    }
                    break;
                }
            case 1:
                {
                    //说明此时是左子树结点进栈
                    stack2.push(2); //根结点的状态码从1改为2
                    //    console.log(stack2,stack)
                    if (stack[stack.length - 1].right) {
                        stack.push(stack[stack.length - 1].right)
                        stack2.push(1);
                    }
                    break;
                }
            case 2:
                {
                    console.log(stack)
                    ans.push(stack.pop().val);
                }
        }

    }
    return ans
};