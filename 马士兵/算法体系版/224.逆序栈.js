//给定一个栈，请逆序这个栈，不能申请额外的数据结构，只能使用递归函数
function reverse(stack){
   if(stack.length==0){return }
   let i=process(stack);
   reverse(stack)
   stack.push(i)
}
// 栈底元素移除掉，上面的元素盖下来 
// 返回移除掉的栈底元素
//1,2,3 ->跑完之后12，返回3
function process(stack){
    let res=stack.shift();
    if(stack.length==0){
      return res
    }
    let last =process(stack);
    stack.push(res);
    return last;
}