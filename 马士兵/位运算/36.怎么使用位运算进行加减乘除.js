// a+b 就是a^b +(a&b<<1),(不能出现+),只能就这样循环往复,直到(a‘’‘’&b'''')<<1为0，即进位信息为0

function add(a,b){
  let sum=a;
  while(b!=0){
    sum= a^b;//无进位相加信息 ->sum
    b =(a+b)<<1;// 进位信息 ->  b->b'(进位信息)
    a=sum;
  }
  return sum;
}


function negNum(n){
  return add(-n,1);
}

function minus(a,b){
  return add(a,negNum(b))//a-b,但是不能直接相见，-b就是b取反+1。a-b也就是add(a,~b+1);
}

function multi(a,b){
  let res=0;
  while(b!=0){
    if(b&1!=0){
      res=add(res,a)
    }
    a<<1;
    b>>>=1;
  }
  return res;
}