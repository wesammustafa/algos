/**
 * Initialize your data structure here.
 */
 var MyStack = function() {
    this.primaryQueue = [];
    this.secondaryQueue = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.primaryQueue.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  while (this.primaryQueue.length > 1) {
    this.secondaryQueue.push(this.primaryQueue.shift());
  }

  let bottom = this.primaryQueue.shift();

  let temp = this.secondaryQueue;
  this.secondaryQueue = this.primaryQueue;
  this.primaryQueue = temp;

  return bottom;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  while (this.primaryQueue.length > 1) {
    this.secondaryQueue.push(this.primaryQueue.shift());
  }

  let bottom = this.primaryQueue[0];
  this.secondaryQueue.push(this.primaryQueue.shift());

  let temp = this.secondaryQueue;
  this.secondaryQueue = this.primaryQueue;
  this.primaryQueue = temp;

  return bottom;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.primaryQueue.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */