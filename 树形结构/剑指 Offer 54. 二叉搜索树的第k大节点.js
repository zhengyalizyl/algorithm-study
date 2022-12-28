// 给定一棵二叉搜索树，请找出其中第 k 大的节点的值。
// https://leetcode.cn/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

var getCount = function(root) {
    if (!root) { return 0 }
    return getCount(root.left) + getCount(root.right) + 1;
}


var getArr = function(root, ans) {
    if (!root) { return [] }
    getArr(root.left, ans);
    ans.push(root.val);
    getArr(root.right, ans);
}

var kthLargest = function(root, k) {
    //方法一:
    //左根右，中序遍历可以把数据从小到大的排序，
    //如果k小于右边的个数，说明在右子树，如果大于右边的k树+1，则证明在左子树，如果k等于右边的个数+1，那么说明在根结点  
    let count = getCount(root.right); //得到右边的个数
    if (k < count + 1) {
        return kthLargest(root.right, k) //从右边的子树找
    }
    if (k == count + 1) {
        return root.val //说明是根结点
    }
    return kthLargest(root.left, k - count - 1); //从左边子树找


    //方法二,将左根右，中序遍历可以把数据从小到大的排序，得到一个数组
    // let ans=[];
    // getArr(root,ans);
    // return ans[ans.length-k];
};