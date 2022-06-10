// Queue class
class Queue {
  // Array is used to implement a Queue
  constructor() {
    this.items = [];
  }

  // Functions to be implemented
  // enqueue(item)
  enqueue(item) {
    this.items.push(item);
  }
  // dequeue()
  dequeue() {
    if (this.isEmpty()) return "Underflow";

    return this.items.shift();
  }
  // front()
  front() {
    if (this.isEmpty()) return "No element in Queue";
    return this.items[0];
  }
  // isEmpty()
  isEmpty() {
    return this.items.length === 0;
  }
  // printQueue()
  printQueue() {
    let result = "";
    for (let i = 0; i < this.items.length; i++) result += this.items[i] + " ";
    return result;
  }
}

let queue = new Queue();

console.log(queue.dequeue());

console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);

console.log(queue.front());

console.log(queue.dequeue());

console.log(queue.front());

console.log(queue.dequeue());

console.log(queue.printQueue());
