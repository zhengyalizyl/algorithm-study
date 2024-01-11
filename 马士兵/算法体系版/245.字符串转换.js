/**
 * 规定1和A对应、2和B对应、3和C对应...26和Z对应，那么一个数字字符串比如"111”就可以转化为："AAA"、"KA"和"AK"。
 * 给定一个只有数字字符组成的字符串str，返回有多少种转化结果。
 */

function number(str) {
  if (str === null || str.length == 0) {
    return 0
  }

  return process(str.split(''), 0)
}

//str[0...i-1]转换无需过问
//str[i...]去转换，返回有多少种转换方法
function process(str, i) {
  if (i == str.length) {//比如102，此时i指向2的后面那位了，超出索引的范围
    return 1;
  }

  //i没有到最后，说明有字符
  if (str[i] == '0') { //之前的决定有问题，比如305
    return 0
  }
  //str[i]!='0'
  //可能性一，i单转
  let ways = process(str, i + 1);
  if (i + 1 < str.length && ((str[i] - '0') * 10 + str[i + 1] - '0' <= 26)) {
    ways += process(str, i + 2);
  }
  return ways
}



//方法二:从右往左,因为return process(str.split(''), 0)，要最左边的
function f(s) {
  if (str === null || str.length == 0) {
    return 0
  }
  let str = s.split('');
  let n = str.length;
  let arr = [];//n+1
  for (let i = 0; i < n + 1; i += 1) {
    arr[i] = 1;
  }
  arr[n] = 1;
  for (let i = n - 1; i >= 0; i--) {//
    if (str[i] != '0') {
      let ways = arr[i+1];
      if (i + 1 < str.length && ((str[i] - '0') * 10 + str[i + 1] - '0' <= 26)) {
        ways += arr[i+2]
      }
      arr[i] =ways;
    }
  }

 return  arr[0];//由这个return process(str.split(''), 0)决定的

}