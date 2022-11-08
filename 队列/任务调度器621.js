// 给你一个用字符数组 tasks 表示的 CPU 需要执行的任务列表。其中每个字母表示一种不同种类的任务。任务可以以任意顺序执行，并且每个任务都可以在 1 个单位时间内执行完。在任何一个单位时间，CPU 可以完成一个任务，或者处于待命状态。

// 然而，两个 相同种类 的任务之间必须有长度为整数 n 的冷却时间，因此至少有连续 n 个单位时间内 CPU 在执行不同的任务，或者在待命状态。

// 你需要计算完成所有任务所需要的 最短时间 。
// 链接：https://leetcode.cn/problems/task-scheduler

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    //这里分为2种情况，第一种每个任务调度器没有空余的时间
    //另一种是有空余时间，空余时间
    //空余时间是最先把字符串出现最多的先摆放，然后把冷却时间摆放
    //设出现最多元素的次数是m，出现冷却时间的为n，k是出现最多的字母个数则(m-1)*(n+1)+k
    //由于tasks[i] 是大写英文字母，数组的下标是A-Z;
    const tasksLength = tasks.length;
    let task2 = [];
    for (let i = 0; i < 26; i += 1) {
        task2.push(0)
    }
    for (let i = 0; i < tasks.length; i += 1) {
        task2[tasks[i].charCodeAt() - "A".charCodeAt()] += 1;
    }
    const m = task2.sort((a, b) => b - a)[0];
    task2 = task2.filter(item => item == m);
    const k = task2.length;
    return Math.max(tasksLength, (m - 1) * (n + 1) + k)
};