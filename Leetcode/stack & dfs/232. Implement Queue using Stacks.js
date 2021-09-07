// Time Complexity O(1)
// Space Complexity O(N)

/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.enqueueStack = [];
  this.dequeueStack = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.enqueueStack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  this.shiftStacks();
  return this.dequeueStack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  this.shiftStacks();
  this.dequeueStack[this.dequeueStack.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.enqueueStack.length === 0 && this.dequeueStack.length === 0;
};

MyQueue.prototype.shiftStacks = function () {
  if (this.dequeueStack.length === 0) {
    while (this.enqueueStack.length > 0) {
      this.dequeueStack.push(this.enqueueStack.pop());
    }
  }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
