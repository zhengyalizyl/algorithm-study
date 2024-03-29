// str 固定参数 
// 来到了str[index]字符，index是位置 
// str[0..index-1]已经走过了！之前的决定，都在path上
// 之前的决定已经不能改变了，就是path 
// str[index....]还能决定，之前已经确定，而后面还能自由选择的话， 
// 把所有生成的子序列，放入到ans里去
function process(str, index, ans, path) {
  if (index == str.length) {
    ans.push(path);
    return
  }

  //没有要index位置的字符
  let no = path;
  process(str, index + 1, ans, no);
  let yes = path + str[index];
  //要了index位置的字符
  process(str, index + 1, ans, yes)
}

//这个s是字符串
function subs(s) {
  let str = s.split('');
  let ans = [];
  let path="";
  process(str, 0, ans, path);
  return ans;
}


//1，2，3，4，5，6
//子序列：1，2或者1，2，3或者1，3，4，5