function Node(val) {
  this.val = val;
  this.next = null;
}

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

let head = MyLinkedList([1, 2, 3, 4, 5], 2);

console.log(PrintList(head, 20));
// console.log(head);
