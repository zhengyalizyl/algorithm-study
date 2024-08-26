// 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

var _buildTree = function (preorder, inorder) {
    //找到根结点在中序遍历的位置，继而可以知道，左子树就是根结点的位置-1，右子树就是根节点的位置+1
    if (preorder.length === 0) { return null }
    let position = inorder.indexOf(preorder[0]);
    let leftInorder = [];
    let rightInorder = [];
    let leftPreOrder = [];
    let rightPreOrder = [];
    for (let i = 0; i < position; i += 1) {
        leftInorder.push(inorder[i]);
        leftPreOrder.push(preorder[i + 1]);
    }

    for (let i = position + 1; i < inorder.length; i += 1) {
        rightInorder.push(inorder[i]);
        rightPreOrder.push(preorder[i])
    }
    let root = new TreeNode(preorder[0]);
    root.left = _buildTree(leftPreOrder, leftInorder);
    root.right = _buildTree(rightPreOrder, rightInorder)
    return root;
}
var buildTree = function (preorder, inorder) {
    // preorder 和 inorder 均 无重复 元素
    //前序遍历就是根左右
    //中序遍历就是左根右

    let a = _buildTree(preorder, inorder)
    return a


};



//方法二:

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
let map = {};
var buildTree = function (preorder, inorder) {
    map = {};
    for (let i = 0; i < inorder.length; i++) {
        map[inorder[i]] = i
    }

    return build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1)
};


function build(preorder, prestart, preEnd, inorder, instart, inEnd) {
    if (prestart > preEnd) {
        return null
    }
    const rootVal = preorder[prestart];
    const index = map[rootVal];
    const leftTreeSize = index - instart;
    const leftTree = build(preorder, prestart + 1, prestart + leftTreeSize, inorder, instart, index - 1);
    const rightTree = build(preorder, prestart + leftTreeSize + 1, preEnd, inorder, index + 1, inEnd);
    const root = new TreeNode(rootVal, leftTree, rightTree);
    return root;
}


//方法三:

var buildTree = function (preorder, inorder) {
    return build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1)
};

function build(preorder, prestart, preEnd, inorder, instart, inEnd) {
    if (prestart > preEnd) {
        return null
    }
    const rootVal = preorder[prestart];
    const index = inorder.indexOf(preorder[prestart])
    const leftTreeSize = index - instart;
    const leftTree = build(preorder, prestart + 1, prestart + leftTreeSize, inorder, instart, index - 1);
    const rightTree = build(preorder, prestart + leftTreeSize + 1, preEnd, inorder, index + 1, inEnd);
    const root = new TreeNode(rootVal, leftTree, rightTree);
    return root;
}