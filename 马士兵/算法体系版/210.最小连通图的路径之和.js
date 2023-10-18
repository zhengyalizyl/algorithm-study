/**
 * // 请保证graph是连通图 
 * // graph[i][j]表示点i到点j的距离，如果是系统最大值代表无路 
 * // 返回值是最小连通图的路径之和
 */

function prim(graph) {
  let size = graph.length;
  let distances = [];
  let visit = [];
  visit[0] = true;
  for (let i = 0; i < size; i++) {
    distances[i] = graph[0][i];
  }
  let sum = 0;
  for (let i = 1; i < size; i++) {
    let minPath = Number.MAX_VALUE;
    let minIndex = -1;
    for (let j = 0; j < size; j++) {
      if (!visit[j] && distances[j] < minPath) {
        minPath = distances[j];
        minIndex = j;
      }
    } if (minIndex == -1) {
      return sum;
    }
    visit[minIndex] = true;
    sum += minPath;
    for (let j = 0; j < size; j++) {
      if (!visit[j] && distances[j] > graph[minIndex][j]) {
        distances[j] = graph[minIndex][j];
      }
    }
  }
  return sum;
}