// 给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。

// 注意：如果对空文本输入退格字符，文本继续为空。

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/backspace-string-compare


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    //
    let s1 = [];
    for (let i = 0; i < s.length; i += 1) {
        if (s[i] === '#') {
            s1.pop()
        } else {
            s1.push(s[i])
        }
    };
    let t1 = [];
    for (let i = 0; i < t.length; i += 1) {
        if (t[i] == '#') {
            t1.pop()
        } else {
            t1.push(t[i])
        }
    }
    return s1.join() == t1.join()
};