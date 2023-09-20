// a+b 就是a^b +(a&b<<1),(不能出现+),只能就这样循环往复,直到(a‘’‘’&b'''')<<1为0，即进位信息为0

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const MAX = Math.pow(2,31)-1, MIN = -Math.pow(2,31);
var divide = function(dividend, divisor) {
   //系统最小值的绝对值没有办法转最小值
  if(dividend===MIN&&divisor===MIN){
    return 1
   }else if(divisor===MIN){
       return 0
   }else if(dividend===MIN){
        if(divisor===negNum(1)){
            return MAX
        }else{
          let ans =div(add(dividend,1),divisor); //因为最小值的绝对值没有对应的
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
    if((b&1)!=0){ //0101和1与得到0001，010&1=0 01&1 =1
      res=add(res,a) //res和0001相加,上一次和011000相加
    }
    a<<=1; //然后a是01100,011000，0110000
    b>>>=1; //然后b是不带符号的右移一位得到010,010右移一位得倒01
  }
  return res;
}
