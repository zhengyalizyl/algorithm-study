// 写一个 RecentCounter 类来计算特定时间范围内最近的请求。

// 请你实现 RecentCounter 类：

// RecentCounter() 初始化计数器，请求数为 0 。
// int ping(int t) 在时间 t 添加一个新请求，其中 t 表示以毫秒为单位的某个时间，并返回过去 3000 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 [t-3000, t] 内发生的请求数。
// 保证 每次对 ping 的调用都使用比之前更大的 t 值。

// 链接：https://leetcode.cn/problems/number-of-recent-calls

var RecentCounter = function() {
    this.ret = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.ret.push(t);
    //假设加入的数据比3000大，则和300相加减的数据和每一项比较是否小于
    let sub = this.ret[this.ret.length - 1] - 3000;
    for (let i = 0; i < this.ret.length; i += 1) {
        if (sub > this.ret[i]) {
            this.ret.splice(i, 1);
            //因为前面一项已经把数据删除了，所以需要将i-1，不然循环体又加了1
            i = i - 1;
        }
    }
    return this.ret.length

};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */