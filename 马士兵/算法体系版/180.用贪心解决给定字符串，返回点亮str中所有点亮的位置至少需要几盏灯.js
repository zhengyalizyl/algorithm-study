/**
 * 给定一个字符串str，只由'X'和'.'两种字符构成。'X'表示墙，不能放灯，也不需要点亮；'.'表示居民点，可以放灯，需要点亮。如果灯放在i位置，可以让i-1，i和i+1三个位置被点亮；返回如果点亮str中所有需要点亮的位置，至少需要几盏灯。
 * 
 * 贪心思路】

i 位置是 'X’，不管，来到 i + 1位置
i 位置是 '.' ，i + 1是 'X’，i 位置需要放灯，来到 i + 2位置
i 位置是 '.' ，i + 1是 '.'，i + 2是 '.'，i + 1 位置需要放灯，来到 i + 3位置（此步即是贪心）
i 位置是 '.' ，i + 1是 '.'，i + 2是 'X’，i 或 i + 1 位置需要放灯，来到 i + 3位置

 */


function minLight(road) {
  let str = road.toCharArray();
  let i = 0;
  let light = 0;
  while (i < str.length) {
    if (str[i] == 'X') {
      i++;
    }
    else {
      light++;
      if (i + 1 == str.length) {
        break;
      } else { //有i+1的位置
        if (str[i + 1] == 'X') {
          i += 2;
        } else {
          i += 3;
        }
      }
    }
  }
  return light;
}
