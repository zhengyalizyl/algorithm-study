/**
 * 给定一个字符串str，给定一个字符串类型的数组arr，出现的字符都是小写英文。
 * arr每一个字符串，代表一张贴纸，你可以把单个字符剪开使用，目的是拼出str来，
 * 返回需要至少多少张贴纸可以完成这个任务。例子：str= "babac"，arr = {"ba","c","abcd"}。
 * 如果 ba + ba + c，那么需要3；如果 abcd + abcd，那么需要2；如果 abcd+ba，那么需要2。所以返回2。
 * 测试链接地址：https://leetcode.cn/problems/stickers-to-spell-word
 */
//方法一：超出时间限制
function minStickers(stickers, target) {
  let ans = process(stickers, target);
  return ans == Number.MAX_VALUE ? -1 : ans;
}

//所有贴纸stickers，每一种贴纸都有无穷张
//target
//最少张数
function process(stickers, target) {
  if (target.length === 0) {
    return 0;
  }

  let min = Number.MAX_VALUE;
  for (let first of stickers) {
    let rest = minus(target, first);
    if (rest.length != target.length) {
      min = Math.min(min, process(stickers, rest))
    }
  }
  return min + (min === Number.MAX_VALUE ? 0 : 1);//没有算第一张的数
}

function minus(s1, s2) {
  const str1 = s1.split('');
  const str2 = s2.split('');
  let count = [];//长度为26
  for (let i = 0; i < 26; i += 1) {
    count[i] = 0;
  }
  for (let cha of str1) {
    count[cha.charCodeAt() - 'a'.charCodeAt()]++;
  }
  for (let cha of str2) {
    count[cha.charCodeAt() - 'a'.charCodeAt()]--;
  }

  let builder = '';
  for (let i = 0; i < 26; i += 1) {
    if (count[i] > 0) {
      for (let j = 0; j < count[i]; j += 1) {
        builder += String.fromCharCode(i + 97);
      }
    }
  }

  return builder;
}


//方法二：优化-词频统计+贪心剪枝（还是不够高效，会超出时间限制）
function minStickers2(stickers, target) {
  let n = stickers.length;
  //关键优化（用词频标替代贴纸数组）
  let counts = [];//n*26
  for (let i = 0; i < n; i += 1) {
    counts[i] = [];
    for (let j = 0; j < 26; j += 1) {
      counts[i][j] = 0;
    }
  }
  for(let i=0;i<n;i+=1){
    let str=stickers[i];
    for(let cha of str){
      counts[i][cha.charCodeAt() - 'a'.charCodeAt()]++;
    }
  }
  let ans = process2(counts, target);
  return ans == Number.MAX_VALUE ? -1 : ans;
}

//stickers[i]数组，当初i号贴纸的字符统计stickers->所有的贴纸
//所有贴纸stickers，每一种贴纸都有无穷张
//target
//最少张数
function process2(stickers, t) {
  if (t.length === 0) {
    return 0;
  }

  //target作出词频统计
  //target aabbc  2 2 1...
   //             0 1 2...
 
  let target =t.split('');
  let tcounts = [];//长度为26
  for (let i = 0; i < 26; i += 1) {
    tcounts[i] = 0;
  }
 
  for(let cha of target){
    tcounts[cha.charCodeAt() - 'a'.charCodeAt()]++;
  }

  let n=stickers.length;
  let min = Number.MAX_VALUE;
  
  for(let i=0;i<n;i+=1){
    //尝试以一张贴纸是什么
    let sticker=stickers[i];
    //最关键的优化（重要的剪枝，这一步是贪心）
    if(sticker[target[0].charCodeAt() - 'a'.charCodeAt()]>0){
      let builder = '';
      for (let j = 0; j < 26; j+= 1) {
        if (tcounts[j] > 0) {
          let num=tcounts[j]-sticker[j];
          for (let k = 0; k< num; k+= 1) {
            builder += String.fromCharCode(j + 97);
          }
        }
      }
    
      min=Math.min(min,process2(stickers,rest))
    }
  }
  return min + (min === Number.MAX_VALUE ? 0 : 1);//没有算第一张的数
}


//方法三：记忆搜索
function minStickers3(stickers, target) {
  let n = stickers.length;
  //关键优化（用词频标替代贴纸数组）
  let counts = [];//n*26
  for (let i = 0; i < n; i += 1) {
    counts[i] = [];
    for (let j = 0; j < 26; j += 1) {
      counts[i][j] = 0;
    }
  }
  for(let i=0;i<n;i+=1){
    let str=stickers[i];
    for(let cha of str){
      counts[i][cha.charCodeAt() - 'a'.charCodeAt()]++;
    }
  }
  let map=new Map();
  map.set("",0)
  let ans = process3(counts, target,map);
  return ans == Number.MAX_VALUE ? -1 : ans;
}

//stickers[i]数组，当初i号贴纸的字符统计stickers->所有的贴纸
//所有贴纸stickers，每一种贴纸都有无穷张
//target
//最少张数
function process3(stickers, t,map) {
  if(map.has(t)){
    return map.get(t);
  }

  //target作出词频统计
  //target aabbc  2 2 1...
   //             0 1 2...
 
  let target =t.split('');
  let tcounts = [];//长度为26
  for (let i = 0; i < 26; i += 1) {
    tcounts[i] = 0;
  }
 
  for(let cha of target){
    tcounts[cha.charCodeAt() - 'a'.charCodeAt()]++;
  }

  let n=stickers.length;
  let min = Number.MAX_VALUE;
  
  for(let i=0;i<n;i+=1){
    //尝试以一张贴纸是什么
    let sticker=stickers[i];
    //最关键的优化（重要的剪枝，这一步是贪心）
    if(sticker[target[0].charCodeAt() - 'a'.charCodeAt()]>0){
      let builder = '';
      for (let j = 0; j < 26; j+= 1) {
        if (tcounts[j] > 0) {
          let num=tcounts[j]-sticker[j];
          for (let k = 0; k< num; k+= 1) {
            builder += String.fromCharCode(j + 97);
          }
        }
      }
    
      min=Math.min(min,process3(stickers,builder,map))
    }
  }
  let ans= min + (min === Number.MAX_VALUE ? 0 : 1);//没有算第一张的数
  map.set(t,ans);
  return ans;
}


