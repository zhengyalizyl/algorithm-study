/**
 * 给定一个整型数组arr代表数值不同的纸牌排成一条线玩家A和玩家B依次
 * 拿走每一张牌规定玩家A先拿玩家B后拿但每个玩家每次只能拿最左
 * 或者最右的牌玩家A和玩家B智商一样请返回最后获胜者的分数
 */

//方法-：
//根据规则，返回获胜者的分数
function win1(arr) {
  if (arr == null || arr.length == 0) {
    return 0
  }
  const first = f(arr, 0, arr.length - 1);
  const second = g(arr, 0, arr.length - 1);
  return Math.max(first, second);
}

//arr[l...r],先手获得的最好分数返回
function f(arr, l, r) {
  if (l === r) {
    return arr[l]
  }

  let p1 = arr[l] + g(arr, l + 1, r);//依赖于后手的
  let p2 = arr[r] + g(arr, l, r - 1);//依赖于后手
  return Math.max(p1, p2)
}
//arr[l...r],后手获得的最好分数返回
function g(arr, l, r) {
  if (l == r) {
    return 0
  }
  const p1 = f(arr, l + 1, r);//对手拿走了l位置的数,
  const p2 = f(arr, l, r - 1);//对手拿走了r位置的数
  //由于自己是后手，是对手做决定，也就是对手f要最小
  return Math.min(p1, p2)
}


//方法二：缓存
function win2(arr) {
  if (arr == null || arr.length == 0) {
    return 0
  }

  let n = arr.length;
  let fmap = [];//n*n
  let gmap = [];
  for (let i = 0; i < n; i += 1) {
    fmap[i] = [];
    gmap[i] = [];
    for (let j = 0; j < n; j += 1) {
      fmap[i][j] = -1;
      gmap[i][j] = -1;
    }
  }

  const first = f2(arr, 0, arr.length - 1, fmap, gmap);
  const second = g2(arr, 0, arr.length - 1, fmap, gmap);
  return Math.max(first, second);
}


//arr[l...r],先手获得的最好分数返回
function f2(arr, l, r, fmap, gmap) {
  if (fmap[l][r] != -1) {
    return fmap[l][r]
  }

  let ans = 0;

  if (l === r) {
    ans = arr[l]
  }

  let p1 = arr[l] + g2(arr, l + 1, r, fmap, gmap);//依赖于后手的
  let p2 = arr[r] + g2(arr, l, r - 1, fmap, gmap);//依赖于后手
  ans = Math.max(p1, p2);
  fmap[l][r] = ans;
  return ans
}
//arr[l...r],后手获得的最好分数返回
function g2(arr, l, r, fmap, gmap) {
  if (gmap[l][r]) {
    return gmap[l][r]
  }
  let ans = 0
  if (l == r) {
    ans = 0;
  }
  const p1 = f2(arr, l + 1, r, fmap, gmap);//对手拿走了l位置的数,
  const p2 = f2(arr, l, r - 1, fmap, gmap);//对手拿走了r位置的数
  //由于自己是后手，是对手做决定，也就是对手f要最小
  ans = Math.min(p1, p2);
  gmap[l][r] = ans;
  return ans
}


//方法三：
function win3(arr) {
  if (arr == null || arr.length == 0) {
    return 0
  }

  let n = arr.length;
  let fmap = [];//n*n
  let gmap = [];
  for (let i = 0; i < n; i += 1) {
    fmap[i] = [];
    gmap[i] = [];
    for (let j = 0; j < n; j += 1) {
      fmap[i][j] = 0;
      gmap[i][j] = 0;
    }
  }

  for (let i = 0; i < n; i += 1) {
    fmap[i][i] = arr[i];
  }

  for (let startCol = 1; startCol < n; i += 1) {
    let l = 0;
    let r = startCol;
    while (row < n) { //因为行在上一层限制死了，不会越界，故只需要判断列越界
      fmap[l][r] = Math.max(arr[l] + gmap[l + 1][r], arr[r] + gmap[l][r - 1]);
      gmap[l][r] = Math.min(fmap[l + 1][r], fmap[l][r - 1]);
      l += 1;
      r += 1;
    }
  }
  return Math.max(fmap[0][n - 1], gmap([0][n - 1]));

}