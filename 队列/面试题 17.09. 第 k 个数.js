// 有些数的素因子只有 3，5，7，请设计一个算法找出第 k 个数。注意，不是必须有这些素因子，而是必须不包含其他的素因子。例如，前几个数按顺序应该是 1，3，5，7，9，15，21。

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/get-kth-magic-number-lcci/

/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function(k) {
    let p3 = 0;
    let p5 = 0;
    let p7 = 0;
    let arr = [1];
    let i = 0;

    while (i < k) {
        //先按每个数字都各自相乘以各自的数，这样就只含有和这几个因子，不包含其他的因子
        let an3 = arr[p3] * 3;
        let an5 = arr[p5] * 5;
        let an7 = arr[p7] * 7;
        //这个是比较这3个数最小的数
        let an = Math.min(an3, an5);
        an = Math.min(an, an7);
        //把最小的数放到数组中
        arr.push(an);
        //最后只要有和最小的相等的那个因子，下标各自都向前+1
        if (an3 == an) {
            p3 += 1;
        }
        if (an5 == an) {
            p5 += 1;
        }
        if (an7 == an) {
            p7 += 1;
        }
        i += 1;
    }
    return arr[k - 1]
};