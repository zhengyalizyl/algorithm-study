function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
  }

//先序列化
function serialByPreOrder(root){
  let result=[];
  preorder(root,result);
  return result;
}

function  preorder(root,result){
  if(root==null){
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
  if(val==null){
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

