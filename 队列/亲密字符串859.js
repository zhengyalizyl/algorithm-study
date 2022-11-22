// 给你两个字符串 s 和 goal ，只要我们可以通过交换 s 中的两个字母得到与 goal 相等的结果，就返回 true ；否则返回 false 。

// 交换字母的定义是：取两个下标 i 和 j （下标从 0 开始）且满足 i != j ，接着交换 s[i] 和 s[j] 处的字符。

// 例如，在 "abcd" 中交换下标 0 和下标 2 的元素可以生成 "cbad" 。

// 链接：https://leetcode.cn/problems/buddy-strings

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    //出现亲密字符串的有2种条件
    //s 和 goal 由小写英文字母组成
    let arr = [];
    if (s.length != goal.length) {
        return false;
    }
    for (let i = 0; i < 26; i += 1) {
        arr.push(0)
    }
    for (let i = 0; i < s.length; i += 1) {
        arr[s[i].charCodeAt() - 'a'.charCodeAt()] += 1;
    }
    //相同的字符串必须有aabc和aabc这个是亲密字符串，abc和abc不是字符串
    if (s == goal) {
        for (let i = 0; i < 26; i += 1) {
            if (arr[i] > 1) {
                return true
            }
        }
        return false
    }
    //不相同的字符串如aabcdef和aaecdbf这个可以找到第一个不相同的位置
    let i = 0;
    //记录一下此时的第一个位置时i,
    while (s[i] == goal[i]) i += 1;
    //再找下一个不相同的位置
    let j = i + 1;
    while (j < s.length && s[j] == goal[j]) {
        j += 1;
    }
    //跳出这个循环有2钟情况，第一种已经到字符串的末尾了,一直没有找到不同的位置或者是找到末尾刚好能满足条件
    if (j == s.length) {
        return false
    }
    //另一种是找到的不同的位置
    if (s[i] != goal[j] || s[j] != goal[i]) {
        return false
    }
    j += 1;
    //接下来循环剩下来的字符串有没有不相同的
    while (j < s.length) {
        if (s[j] != goal[j]) {
            return false
        }
        j += 1;
    }
    return true


};