// https://leetcode.cn/problems/divide-two-integers/description/
// 29. 两数相除
// 给你两个整数，被除数 dividend 和除数 divisor。将两数相除，要求 不使用 乘法、除法和取余运算。

// 整数除法应该向零截断，也就是截去（truncate）其小数部分。例如，8.345 将被截断为 8 ，-2.7335 将被截断至 -2 。

// 返回被除数 dividend 除以除数 divisor 得到的 商 。

// 注意：假设我们的环境只能存储 32 位 有符号整数，其数值范围是 [−231,  231 − 1] 。本题中，如果商 严格大于 231 − 1 ，则返回 231 − 1 ；如果商 严格小于 -231 ，则返回 -231 。

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
//  const MAX = Math.pow(2,31)-1, MIN = -Math.pow(2,31);
var divide = function(dividend, divisor) {
  //系统最小值的绝对值没有办法转最小值
 if(dividend===-Math.pow(2,31)&&divisor===-Math.pow(2,31)){
   return 1
  }else if(divisor===-Math.pow(2,31)){
      return 0
  }else if(dividend===-Math.pow(2,31)){
       if(divisor===negNum(1)){
           return Math.pow(2,31)-1
       }else{
         let ans =div(add(dividend,1),divisor);
         return add(ans,div(minus(dividend,multi(ans,divisor)),divisor))
       }
  }else {
      return div(dividend,divisor)
  }
};

function div(a,b){
   let x= isNeg(a)?negNum(a) :a;
 let y =isNeg(b)?negNum(b):b;
 let res=0;
 for(let i=30;i>=0;i=minus(i,1)){
   if((x>>i)>=y){
     res = res|(1<<i);
     x=minus(x,y<<i);
     console.log(x,i)
   }
 }
 return isNeg(a)^isNeg(b)?negNum(res):res;
}

function isNeg(n){
 return n<0;
}

function negNum(n){
 return add(~n,1);
}

function minus(a,b){
 return add(a,negNum(b))//a-b,但是不能直接相见，-b就是b取反+1。a-b也就是add(a,~b+1);
}

function add(a,b){
 let sum=a;
 while(b!=0){
   sum= a^b;//无进位相加信息 ->sum
   b =(a&b)<<1;// 进位信息 ->  b->b'(进位信息)
   a=sum;
 }
 return sum;
}
function multi(a,b){ //比如a是0110，b是0101，
 let res=0;
 while(b!=0){
   if(b&1!=0){ //0101和1与得到0001，010&1=0 01&1 =1
     res=add(res,a) //res和0001相加,上一次和011000相加
   }
   a<<=1; //然后a是01100,011000，0110000
   b>>>=1; //然后b是不带符号的右移一位得到010,010右移一位得倒01
 }
 return res;
}
