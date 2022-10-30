var getFun = function(n) {
    let sum = 0;
    let m = n
    while (m) {
        sum += parseInt(m % 10) * parseInt(m % 10);
        m = parseInt(m / 10)
    }
    return sum;
}

var isHappy = function(n) {
    //思路：这个相当于看链表中是否有闭环
    //那就用快慢指针的方法
    let quick = n
    let slow = n;

    do {
        quick = getFun(getFun(quick)); //走了2步
        slow = getFun(slow); //走了一步
    } while (quick != slow && quick != 1)
    return quick == 1

};

var getSumHappy = function(n) {
    let sumHappy = 0;
    for (let i = 1; i < n; i += 1) {
        if (isHappy(i)) {
            sumHappy += 1
        }
    }
    return sumHappy;
}