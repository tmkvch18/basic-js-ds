const { NotImplementedError } = require("../lib/errors");
const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.last = null;
    this.length = 0;
  }

  getUnderlyingList() {
    const createObj = (node) => {
      if (!node) return null;

      return {
        value: node.value,
        next: createObj(node.next),
      };
    };

    return createObj(this.head);
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (!this.length) {
      this.head = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length += 1;
  }

  dequeue() {
    if (!this.head) return undefined;

    const deleted = this.head.value;

    this.head = this.head.next;
    this.length -= 1;

    return deleted;
  }
}

module.exports = {
  Queue,
};
