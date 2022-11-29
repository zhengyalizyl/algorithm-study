// 请你设计一个队列，支持在前，中，后三个位置的 push 和 pop 操作。

// 请你完成 FrontMiddleBack 类：

// FrontMiddleBack() 初始化队列。
// void pushFront(int val) 将 val 添加到队列的 最前面 。
// void pushMiddle(int val) 将 val 添加到队列的 正中间 。
// void pushBack(int val) 将 val 添加到队里的 最后面 。
// int popFront() 将 最前面 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 -1 。
// int popMiddle() 将 正中间 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 -1 。
// int popBack() 将 最后面 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 -1 。
// 请注意当有 两个 中间位置的时候，选择靠前面的位置进行操作。比方说：

// 将 6 添加到 [1, 2, 3, 4, 5] 的中间位置，结果数组为 [1, 2, 6, 3, 4, 5] 。
// 从 [1, 2, 3, 4, 5, 6] 的中间位置弹出元素，返回 3 ，数组变为 [1, 2, 4, 5, 6] 。


// 链接：https://leetcode.cn/problems/design-front-middle-back-queue

var FrontMiddleBackQueue = function() {
    //设置2个数组，并且约定后面的那个数组一定要大于或者等于前面的那个数组,并且仅仅大于1
    this.fontArr = [];
    this.endArr = [];
};

FrontMiddleBackQueue.prototype.changePostion = function(val) {
    if (this.endArr.length > this.fontArr.length + 1) {
        let temp = this.endArr[0];
        this.endArr.splice(0, 1);
        this.fontArr.push(temp);
    } else if (this.endArr.length < this.fontArr.length) {
        let temp = this.fontArr[this.fontArr.length - 1];
        this.fontArr.splice(this.fontArr.length - 1, 1);
        this.endArr.unshift(temp);
    }
    console.log(this.fontArr, this.endArr)
};

FrontMiddleBackQueue.prototype.isEmpty = function(val) {
    return val.length == 0;
};


/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
    this.fontArr.unshift(val);
    this.changePostion();

};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
    this.fontArr.push(val);
    this.changePostion();
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
    this.endArr.push(val);
    this.changePostion();
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
    if (this.isEmpty(this.endArr)) {
        return -1
    }
    let result
    if (this.isEmpty(this.fontArr)) {
        result = this.endArr.splice(0, 1);
    } else {
        result = this.fontArr.splice(0, 1);
    }

    this.changePostion();
    return result;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
    if (this.isEmpty(this.endArr)) {
        return -1
    }
    let result = 0;
    if (this.fontArr.length == this.endArr.length) {
        result = this.fontArr.pop();
    } else {
        result = this.endArr.splice(0, 1)
    }
    this.changePostion();
    return result;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
    if (this.isEmpty(this.endArr)) {
        return -1
    }
    let result = this.endArr.pop();
    this.changePostion();
    return result;
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */