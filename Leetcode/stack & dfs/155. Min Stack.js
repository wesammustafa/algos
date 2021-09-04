/**
 * initialize your data structure here.
 */
 var MinStack = function() {
    this.minStack = [];
    this.stack = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(x);
    }
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
    var x = this.stack.pop();
    if (x === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
}

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */