function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
  }
// 二叉树可以通过先序、后序或者按层遍历的方式序列化和反序列化，
// 但是，无法通过中序遍历方式实现序列化和反序列化。因为不同的两棵树，可能得到同样的中序序列，即便补了空位置也可能一样。
// 比如如下两棵树，补足空位置的中序遍历结果都是{ null, 1, null, 2, null}

//先序列化
function serialByPreOrder(root){
  let result=[];
  preorder(root,result);
  return result;
}

function  preorder(root,result){
  if(root==null){ //代表什么时候结束了
    result.push(null)
  }else{
     result.push(root.val);
     preorder(root.left,result);
     preorder(root.right,result);
  }
}

//先序反序列化
function deserialByPreOrder(preOrderList){
   if(preOrderList==null||preOrderList.length===0){
    return null
   }
   return preOrder1(preOrderList)
}

function preOrder1(preOrderList){
  let val=preOrderList.shift();
  if(val==null){ //代表什么时候结束了
    return null
  }

  let root =new TreeNode(val);
  root.left =preOrder1(preOrderList);
  root.right=preOrder1(preOrderList)
  return root;
}


//后序序列化
function serialByPostOrder(root){
  let result=[];
  postorder(root,result);
  return result;
}

function  postorder(root,result){
  if(root==null){
    result.push(null)
  }else{
    preorder(root.left,result);
    preorder(root.right,result);
    result.push(root.val);
  }
}

//后序反序列化
function deserialByPosteOrder(postOrderList){
  if(postOrderList===null||postOrderList.length===0){
   return null
  }
  return postOrder1(postOrderList)
}

function postOrder1(postOrderList){
  // postOrderList 从左往右是 `左右根`，反过来就是 `根右左`
 let val=postOrderList.pop();
 if(val==null){
   return null
 }

 let root =new TreeNode(val);
 root.right=preOrder1(postOrderList);
 root.left =preOrder1(postOrderList);
 return root;
}


//层序-序列化
function serialByLevelOrder(root){
   let ans=[];
   if(head==null){
     ans.push(null)
   }else{
      ans.push(root.val);
      let queue =[];
      queue.push(root);
      while(queue.length>0){
        let node=queue.shift();
        if(node.left!=null){
          ans.push(node.left.val);
          queue.push(node.left);
        }else{
           ans.push(null)
        }

        if(node.right!=null){
          ans.push(node.right.val);
          queue.push(node.right);
        }else{
          ans.push(null)
        }

      }
   }
   return ans;

}



//层序-反序列化
function deserialBylevelOrder(levelOrderList){
  if(levelOrderList==null||levelOrderList.length==0){
    return null
  }

  let root=generateTreeNode(levelOrderList.shift());
  let  result =[];
  if(root!=null){
     result.push(root)
  }
  while(result.length>0){
    let node=result.shift();
    node.left=generateTreeNode(levelOrderList.shift());
    node.right=generateTreeNode(levelOrderList.shift());
    if(node.left!=null){
         result.push(node.left)
    }
    if(node.right!=null){
      result.push(node.right)
    }
  }
  return root;

}

function  generateTreeNode(val){
   if(val==null){
     return null
   }
   return new TreeNode(val)
}



