/*
 * 假设有排成一行的N个位置记为1~N，N一定大于或等于2。
 * 开始时机器人在其中的M位置上(M 一定是 1~N中的一个)，
 * 如果机器人来到1位置，那么下一步只能往右来到2位置；
 * 如果机器人来到N位置，那么下一步只能往左来到 N-1 位置；
 * 如果机器人来到中间位置，那么下一步可以往左走或者往右走；
 * 规定机器人必须走 K 步，最终能来到P位置(P也是1~N中的一个)的方法有多少种。
 * 给定四个参数 N、M、K、P，返回方法数。
 */


//方法一：暴力递归
function waysByRecurse(N, start, aim, k) {
  if (N < 2 || start < 1 || start > N || aim < 1 || aim > N || k < 1) {
    return -1
  }
  process1(start, k, aim, N)
}

//机器人当前来到的位置是cur
//机器人还有rest步需要走
//最终的目标是aim
//有哪些位置?1-N
//返回:机器人从cur出发，走过rest步之后，最终停到aim的方法数，是多少
function process1(cur, rest, aim, N) {
  if (rest === 0) {//如果已经不需要走了，走完了
    return cur === aim ? 1 : 0
  }

  //rest>0,还有步数要走
  if (cur === 1) {//1->2
    return process1(2, rest - 1, aim, N)
  }
  if (cur === N) { //N->N-1
    return process1(N - 1, rets - 1, aim, N)
  }
  //机器人停到中间位置上
  return process1(cur - 1, rest - 1, aim, N) + process1(cur + 1, rest + 1, aim, N)

}



//方法二：缓存法,从顶向下的动态规划又叫做记忆化搜索
function waysByRecurse2(N, start, aim, k) {
  if (N < 2 || start < 1 || start > N || aim < 1 || aim > N || k < 1) {
    return -1
  }
  let arr = [];//二维数组，存储长度为n+1,k+1
  //n+1 * k+1
  for (let i = 0; i <= N; i += 1) {
    arr[i] = [];
    for (let j = 0; j <= k; j += 1) {
      arr[i][j] = -1;
    }
  }
  //arr就是缓存表
  //arr[cur][rest]=-1 ->process2(cur,rest)之前没有算过
  //arr[cur][rest]！=-1 ->process2(cur,rest)之前算过，返回值放在了arr[cur][rest]
  process2(start, k, aim, N, arr)
}

//cur范围:1-N
//rest剩余步数范围0-k
function process2(cur, rest, aim, N, arr) {

  if (arr[cur][test] != -1) {
    return arr[cur][rest];
  }

  //之前没算过
  let ans = 0;
  if (rest == 0) {//如果已经不需要走了，走完了
    ans = cur === aim ? 1 : 0;
  } else if (cur == 1) {
    ans = process2(2, rest - 1, aim, N, arr);
  } else if (cur == N) {
    ans = process2(N - 1, rets - 1, aim, N, arr);
  } else {
    ans = process2(cur - 1, rest - 1, aim, N, arr) + process2(cur + 1, rest + 1, aim, N, arr)
  }
  arr[cur][rest] = ans;
  return ans;

}


//方法三:根据方法一进行优化成二维动态规划表
function waysByRecurse3(N, start, aim, k) {
  if (N < 2 || start < 1 || start > N || aim < 1 || aim > N || k < 1) {
    return -1
  }

  //228.机器人走路3.jpg中，为什么0那行不用是因为1，2，3，4，5，位置没有0，只有1，2，3，4，5
  let arr = [];//二维数组，存储长度为n+1,k+1
  //n+1 * k+1
  for (let i = 0; i <= N; i += 1) {
    arr[i] = [];
    for (let j = 0; j <= k; j += 1) {
      arr[i][j] = 0;
    }
  }

  arr[aim][0] = 1;//这个就是方法一的base case
  //因为第一列的位置已经搞定了，所以可以从第2列开始
  for (let rest = 1; rest <= k; rest += 1) { //列
    arr[1][rest] = arr[2][rest - 1];//第2行上面
    for (let cur = 2; cur < N; cur += 1) { //行
      arr[cur][rest] = arr[cur - 1][rest - 1] + arr[cur + 1][rest - 1];
    }
    arr[N][rest] = arr[N - 1][rest - 1];//最下面那一行
  }
  return arr[start][k];

}