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

let result = MyLinkedList([1, 2, 3, 4]);
console.log(result);
