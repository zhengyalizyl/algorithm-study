//只能知道，x会以固定概率返回0和1，但是x的内容，不知道
function x(){
  return Math.random()<0.84?0:1
}

//等概率的返回0和1
function f(){
  let  ans=x();
   //ans = 0 1
   // ans =1 0
  while(ans=x()){
    ans =x();
  }
  return ans
}