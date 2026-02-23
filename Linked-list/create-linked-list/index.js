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

MyLinkedList.prototype.addToTail = function (val) {
  // create new instance of node
  let newNode = new Node(val);

  //   Cheacking if list is empty
  if (this.head === null) {
    this.head = newNode;
  } else {
    // initilize current to first(head) node
    let current = this.head;
    // trasverse through list to reach last node
    while (current.next != null) {
      current = current.next;
    }
    // now current points to last node and using current.next adding new node in tail
    current.next = newNode;
  }
  // increase the size of linked list
  this.size++;
};
