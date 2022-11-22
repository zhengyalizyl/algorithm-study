// 在柠檬水摊上，每一杯柠檬水的售价为 5 美元。顾客排队购买你的产品，（按账单 bills 支付的顺序）一次购买一杯。

// 每位顾客只买一杯柠檬水，然后向你付 5 美元、10 美元或 20 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 5 美元。

// 注意，一开始你手头没有任何零钱。

// 给你一个整数数组 bills ，其中 bills[i] 是第 i 位顾客付的账。如果你能给每位顾客正确找零，返回 true ，否则返回 false 。

// 链接：https://leetcode.cn/problems/lemonade-change

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    //总共出现钱的总类5，10，20
    let sum5 = 0;
    let sum10 = 0;
    let sum20 = 0;
    for (let i = 0; i < bills.length; i += 1) {
        switch (bills[i]) {
            case 5:
                sum5 += 1;
                break;
            case 10:
                sum10 += 1;
                break;
            case 20:
                sum20 += 1;
        }
        if (bills[i] == 10) {
            if (sum5 < 1) {
                return false
            }
            sum5 -= 1;
        } else if (bills[i] == 20) {
            if (sum5 >= 1 && sum10 >= 1) {
                sum5 -= 1;
                sum10 -= 1;
            } else if (sum5 >= 3) {
                sum5 -= 3;
            } else {
                return false
            }
        }

    }
    return true

};