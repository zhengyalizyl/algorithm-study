//返回[0,1)的一个小数
// 任意的x,x属于[0,1）,[0,x]范围上的数出现概率由原来的x调整为x平方
function  xToXPower2(){
      //两次都要命中[0,x),最终的返回值才会得到max的
    return  Math.max(Math.random(),Math.random());
}



function  xToXPower3(){
return  Math.max(Math.random(),Math.max(Math.random(),Math.random()));
}


// 1-（1-x)^2,
function  xToXPower2(){
  //因为是求最小值，2个都得不到的概率
return  Math.min(Math.random(),Math.random());
}
