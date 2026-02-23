// Representation of node(Created Node)
function Node(val) {
  this.val = val;
  this.next = null;
}

// Created Linked List
let MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

MyLinkedList.prototype.addToHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};
