// 有效括号字符串为空 ""、"(" + A + ")" 或 A + B ，其中 A 和 B 都是有效的括号字符串，+ 代表字符串的连接。

// 例如，""，"()"，"(())()" 和 "(()(()))" 都是有效的括号字符串。
// 如果有效字符串 s 非空，且不存在将其拆分为 s = A + B 的方法，我们称其为原语（primitive），其中 A 和 B 都是非空有效括号字符串。

// 给出一个非空有效字符串 s，考虑将其进行原语化分解，使得：s = P_1 + P_2 + ... + P_k，其中 P_i 是有效括号字符串原语。

// 对 s 进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 s 。

// 链接：https://leetcode.cn/problems/remove-outermost-parentheses


/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    //这个因为有包含关系，所以采用栈的方式来计算
    //将左括号即为+1，右括号即为减-1
    //当数字为0的时候，就可以得到要去掉的括号
    let count = 0;
    let arr = [];
    let pre = 0;
    for (let i = 0; i < s.length; i += 1) {
        if (s[i] === '(') {
            count += 1;
        } else {
            count -= 1;
            if (count === 0 && i !== 0) {
                let temp = s.substr(pre + 1, i - pre - 1);
                arr.push(temp);
                pre = i + 1;
            }
        }
    }
    return arr.join('')
};