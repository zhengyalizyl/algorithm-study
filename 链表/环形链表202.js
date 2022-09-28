// 编写一个算法来判断一个数 n 是不是快乐数。

// 「快乐数」 定义为：

// 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
// 然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
// 如果这个过程 结果为 1，那么这个数就是快乐数。
// 如果 n 是 快乐数 就返回 true ；不是，则返回 false 。

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function getNext(m) {
        let sum = 0;
        while (m) {
            sum += (m % 10) * (m % 10);
            m = parseInt(m / 10)
        };
        return sum;
    }
    //类似于环形链表，将1看成链表的指针是否为null
    if (n == 1) return true;
    let slow = n;
    let quick = n;
    while (quick != 1) {
        slow = getNext(slow);
        quick = getNext(getNext(quick));
        if (quick == slow) {
            //为了防止成环
            break;
        }
    }
    return quick == 1;

};