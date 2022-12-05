// 给你一个由 '('、')' 和小写字母组成的字符串 s。

// 你需要从字符串中删除最少数目的 '(' 或者 ')' （可以删除任意位置的括号)，使得剩下的「括号字符串」有效。

// 请返回任意一个合法字符串。

// 有效「括号字符串」应当符合以下 任意一条 要求：

// 空字符串或只包含小写字母的字符串
// 可以被写作 AB（A 连接 B）的字符串，其中 A 和 B 都是有效「括号字符串」
// 可以被写作 (A) 的字符串，其中 A 是一个有效的「括号字符串」
// 链接：https://leetcode.cn/problems/minimum-remove-to-make-valid-parentheses


/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    //这个也是包含关系,
    let count = 0;
    let ss = '';
    //正着扫描一边，去掉右括号，没有办法去掉多余的左括号
    for (let i = 0; i < s.length; i += 1) {
        if (s[i] != ')') {
            count += (s[i] == '(' ? 1 : 0);
            ss += s[i];
        } else {
            if (count == 0) {
                continue;
            }
            count -= 1;
            ss += s[i]

        }
    }

    let res = '';
    count = 0;
    //反着扫一遍，去掉左括号
    for (let i = ss.length - 1; i >= 0; i -= 1) {
        if (ss[i] != '(') {
            count += (ss[i] == ')' ? 1 : 0);
            res = ss[i] + res;
        } else {
            if (count == 0) {
                continue;
            }
            count -= 1;
            res = ss[i] + res;

        }
    }
    return res

};