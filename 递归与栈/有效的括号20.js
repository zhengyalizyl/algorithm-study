// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。

// 链接：https://leetcode.cn/problems/valid-parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = [];
    for (let i = 0; i < s.length; i += 1) {
        switch (s[i]) {
            case "(":
            case "[":
            case "{":
                arr.push(s[i])
                break;
            case ")":
                {
                    if (arr.length === 0 || arr.length > 0 && arr[arr.length - 1] !== '(') {
                        return false;
                    }
                    arr.pop()
                    break;
                }
            case "}":
                {
                    if (arr.length === 0 || arr.length > 0 && arr[arr.length - 1] !== '{') {
                        return false;
                    }
                    arr.pop()
                    break;
                }
            case "]":
                {

                    if (arr.length === 0 || arr.length > 0 && arr[arr.length - 1] !== '[') {
                        return false;
                    }
                    arr.pop();
                    break;
                }


        }
    }
    return arr.length === 0
};