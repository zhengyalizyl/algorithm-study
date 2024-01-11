/**
 * 请同学们自行搜索或者想象一个象棋的棋盘，然后把整个棋盘放入第一象限，
 * 棋盘的最左下角是(0,0)位置。那么整个棋盘就是横坐标上9条线、纵坐标上10条线的区域，
 * 给你三个 参数 x，y，k，返回“马”从(0,0)位置出发，必须走k步，最后落在(x,y)上的方法数有多少种?
 */
//方法一：
function ways(a, b, k) {
  return jump(0,0,k,a,b)
}
//当前来到的位置是(x,y)
//还剩下rest步需要跳
//跳完rest步，正好跳到a,b的方法数是多少？
function jump(x, y, rest, a, b) {
  if (x < 0 || x > 9 || y < 0 || y > 8) {//越界
    return 0;//返回的方法数为0
  }
  if (rest == 0) {
    return (x == a && y == b) ? 1 : 0;
  }

  let p1 = jump(x + 2, y + 1, rest - 1, a, b);
  let p2 = jump(x + 1, y + 2, rest - 1, a, b);
  let p3 = jump(x - 1, y + 2, rest - 1, a, b);
  let p4 = jump(x - 2, y + 1, rest - 1, a, b);
  let p5 = jump(x - 2, y - 1, rest - 1, a, b);
  let p6 = jump(x - 1, y - 2, rest - 1, a, b);
  let p7 = jump(x + 1, y - 2, rest - 1, a, b);
  let p8 = jump(x + 2, y - 1, rest - 1, a, b);

   return p1+p2+p3+p4+p5+p6+p7+p8;

}



//方法二：
function ways(a, b, k) {
  let arr=[];//10*9*(k+1)
  for(let i=0;i<10;i+=1){
    arr[i]=[];
    for(let j=0;j<9;j+=1){
      arr[i][j]=[];
      for(let z=0;z<k+1;z+=1){
        arr[i][j][k]=0;
      }
    }
  }

  arr[a][b][0]=1;// return (x == a && y == b) ? 1 : 0;
  for(let rest=1;rest<k+1;rest+=1){
    for(let x=0;x<10;x+=1){
      for(let y=0;y<9;y+=1){
        let p1 = pick(arr,x + 2, y + 1, rest - 1);
        let p2 = pick(arr,x + 1, y + 2, rest - 1);
        let p3 = pick(arr,x - 1, y + 2, rest - 1);
        let p4 = pick(arr,x - 2, y + 1, rest - 1);
        let p5 = pick(arr,x - 2, y - 1, rest - 1);
        let p6 = pick(arr,x - 1, y - 2, rest - 1);
        let p7 = pick(arr,x + 1, y - 2, rest - 1);
        let p8 = pick(arr,x + 2, y - 1, rest - 1);
        arr[x][y][rest] =p1+p2+p3+p4+p5+p6+p7+p8;
      }
    }
  }
  

  return arr[0,0,k]
}


function pick(arr,x,y,rest){
  if (x < 0 || x > 9 || y < 0 || y > 8) {//越界
    return 0;//返回的方法数为0
  }
  return arr[x][y][rest]
}