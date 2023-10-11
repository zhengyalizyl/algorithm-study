/**
 * N叉树如何通过二叉树来序列化、并完成反序列化，测试链接：https://leetcode.cn/problems/encode-n-ary-tree-to-binary-tree/
 */

function Node(val, children) {
  this.val = val;
  this.children = children;
};
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

// 编码方案：让每个节点的子节点，都挂在左子树的右边界上
// Encodes an n-ary tree to a binary tree.
function encode(root){
  if(root==null){
    return null
  }
  let newRoot =new TreeNode(root.val);//多叉数的根节点也是二叉树的根节点
  newRoot.left =en(root.children);
  return newRoot
}

function en(children){
  let root =null;
  let cur=null;
  for(let child  in children){
    let node =new TreeNode(child.val);
    if(root==null){ //说明还没有根节点，此时的node是其根节点
       root=node;
    }else{
       cur.right=node; 
    }
    cur=node; 
    cur.left=en(child.children);//深度优先遍历
  }
  return root;
}

// Decodes your binary tree to an n-ary tree.
function decode(root){
  if(root==null){
    return null;
  }
  return  new Node(root.val,de(root.left));//左边是其子孩子
}


function de(root){
   let children =[];
   while(root!=null){
    let cur =new Node(root.val,de(root.left));//由于多叉数转二叉树时是深度遍历，所以先把自己的子孩子搞定，再和兄弟们集合
    children.push(cur);
    root=root.right;
   }
   return children;
}



