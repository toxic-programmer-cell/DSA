function Node(val) {
  this.val = val;
  this.next = null;
}

// Creating Linked list
const MyLinkedList = function (arr, pos = -1) {
  let dummy = new Node(0);
  let curr = dummy;
  let cycleNode = null;
  let index = 0;

  for (let val of arr) {
    curr.next = new Node(val);
    curr = curr.next;

    if (index === pos) {
      cycleNode = curr;
    }

    index++;
  }

  if (pos !== -1) {
    curr.next = cycleNode;
  }

  return dummy.next;
};

// printing linked list
const PrintList = function (head, limit) {
  let curr = head;
  let list = [];
  let count = 0;

  while (curr && count < limit) {
    list.push(curr.val);
    curr = curr.next;
    count++;
  }

  return list.join("->");
};

// cheaking for cycle
let hasCycle = function (head) {
  let curr = head;
  let set = new Set();

  while (curr && curr.next) {
    if (set.has(curr)) return true;
    set.add(curr);
    curr = curr.next;
  }

  return false;
};

let head = MyLinkedList([1, 2, 3, 4, 5]);

console.log(PrintList(head, 20));
console.log(hasCycle(head));
