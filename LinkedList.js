/* eslint-disable quotes */
const _Node = require("./_Node");

// const _Node = new Node();

class LinkedList {
  constructor() {
    this.head = null;
  }

  // find(item) {
  //   if (!this.head) {
  //     return null;
  //   }
  //   let currNode = this.head;

  //   while (currNode.value !== item) {
  //     if (currNode.next !== null) {
  //       return null; //couldn't find item
  //     } else {
  //       currNode = this.next;
  //     }
  //   }

  //   return currNode;
  // }

  insertFirst(value) {
    //point to the head since it is either null or the first element

    this.head = new _Node(value, this.head);
  }

  insertBefore(item, beforeItem) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    let currentNode = this.head;
    let prevNode = this.head;
    while (currentNode.value !== beforeItem) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    prevNode.next = new _Node(item, currentNode);
  }

  insertAFter(item, afterItem) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    let currentNode = this.head;

    while (currentNode !== null && currentNode.value !== afterItem) {
      currentNode = currentNode.next;
    }
    let oldNext = currentNode.next;
    currentNode.next = new _Node(item, oldNext);
  }

  insertAt(item, position) {
    if (position < 0) {
      console.log('out of bounds!');
      return;
    }
    if (this.head === null) {
      this.insertFirst(item);
    }
    let currentNode = this.head;
    let prevNode = this.head;
    for (let i = 1; i < position; i++) {
      if (currentNode === null) {
        console.log('index is out of bounds!');
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    let oldNext = currentNode.next;
    currentNode.next = new _Node(item, oldNext);
  }

  insertLast(value) {
    if (this.head === null) {
      this.insertFirst(value);
    } else {
      let currNode = this.head;
      while (currNode.next !== null) {
        currNode = currNode.next;
      }
      //set the last node's next
      currNode.next = new _Node(value, null);
    }
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    //if it is the first one
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    //all others
    let currNode = this.head;
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    } else {
      previousNode.next = currNode.next;
      //how come we don't delete it from memory? will it be garbage collection
    }
  }
}

module.exports = LinkedList;
