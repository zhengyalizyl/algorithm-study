// 你现在是一场采用特殊赛制棒球比赛的记录员。这场比赛由若干回合组成，过去几回合的得分可能会影响以后几回合的得分。

// 比赛开始时，记录是空白的。你会得到一个记录操作的字符串列表 ops，其中 ops[i] 是你需要记录的第 i 项操作，ops 遵循下述规则：

// 整数 x - 表示本回合新获得分数 x
// "+" - 表示本回合新获得的得分是前两次得分的总和。题目数据保证记录此操作时前面总是存在两个有效的分数。
// "D" - 表示本回合新获得的得分是前一次得分的两倍。题目数据保证记录此操作时前面总是存在一个有效的分数。
// "C" - 表示前一次得分无效，将其从记录中移除。题目数据保证记录此操作时前面总是存在一个有效的分数。
// 请你返回记录中所有得分的总和。
// 链接：https://leetcode.cn/problems/baseball-game
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let arr = [];
    let temp = 0;
    for (let i = 0; i < operations.length; i += 1) {
        switch (operations[i]) {
            case 'C':
                arr.pop();
                break;
            case 'D':
                temp = arr[arr.length - 1] * 2;
                arr.push(temp)
                break;
            case '+':
                temp = arr[arr.length - 1] * 1 + arr[arr.length - 2] * 1;
                arr.push(temp)
                break;
            default:
                arr.push(operations[i] * 1)
        }
    }
    const sum = arr.reduce((pre, next) => {
        pre += next;

        return pre
    }, 0)
    return sum
};