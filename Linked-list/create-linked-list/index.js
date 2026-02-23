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

MyLinkedList.prototype.addAtIndex = function (val, index) {
  // cheacking corner cases when given index can't be less then zero and greater then the size of linkedList
  if (index < 0 || index > this.size) return;

  //   if index is 0 use addToHead method to avoid duplicate logic
  if (index === 0) return this.addToHead(val);

  //   if index is last node use addToTail method to avoid duplicate logic
  if (index === this.size) return this.addToTail(val);

  // create new instance of node
  let newNode = new Node(val);
  //   initilize current to head
  let current = this.head;

  //   reach current to node brfore index
  for (let i = 0; i < index - 1; i++) {
    current = current.next;
  }
  //   first point newNode.next -> current.next (So we won't lose the current.next node)
  newNode.next = current.next;
  //   second now point current.next -> newNode
  current.next = newNode;
  /**
   * current -> current.next,             (current)[1] -> [2](current.next)
   * newNode -> current.next              (newNode)[3] -> [2](current.next)
   * current -> newNode                   (current)[1] -> [3](newNode)
   * current -> newNode -> current.next   (current)[1] -> [3](newNode) -> [2](current.next)
   */

  this.size++;
};

MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;

  let current = this.head;
  for (let i = 0; i < index; i++) {
    current = current.next;
  }

  return current.val;
};

MyLinkedList.prototype.print = function () {
  let current = this.head;
  let result = "";

  while (current !== null) {
    result += current.val + " -> ";
    current = current.next;
  }

  console.log(result + "null");
};

let res = new MyLinkedList();

res.addToHead(2);
res.addToHead(3);
res.addToTail(8);
res.print();
let getIndex = res.get(1);
console.log(getIndex);
