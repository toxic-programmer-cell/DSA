function Node(val) {
  this.val = val;
  this.next = null;
}

const MyLinkedList = function (arr) {
  let dummy = new Node(0);
  let curr = dummy;

  for (let val of arr) {
    curr.next = new Node(val);
    curr = curr.next;
  }

  return dummy.next;
};

const printList = function (head) {
  let curr = head;
  let list = [];

  while (curr) {
    list.push(curr.val);
    curr = curr.next;
  }

  return list.join("->");
};

const reverseList = function (head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  head = prev;

  return head;
};

let head = MyLinkedList([1, 2, 3, 4, 5]);
console.log(printList(head));

let revHead = reverseList(head);
console.log(printList(revHead));
