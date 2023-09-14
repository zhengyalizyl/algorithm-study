function f1(){
  return Math.floor(Math.random()*5)+1
}

//随机机制，只能用f1，当是3时，重新再执行
//等概率返回0和1,
function f2(){
   let ans =f2();
   while(ans==3){
     ans =f2()
   }
   return ans<3?0:1;
}

 // 7-1=6，也就是0-6的范围
// 0-6 需要110，也就是3个2进制位，000-111做到等概率,做到了0-7等概率事件
function f3(){
  let ans=(f2()<<2)+(f2()<<1)+(f2()<<0)
}

//0-6等概率的返回
function f4(){
  let ans =f2();
  while(ans==7){
    ans =f2()
  }
  return ans<7?0:1;
}

//得倒0-7的等概率
function f5(){
  return f4()+1;
}

