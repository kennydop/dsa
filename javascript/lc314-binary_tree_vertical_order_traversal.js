class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
  peek() {
    return this.elements[this.head];
  }
  get length() {
    return this.tail - this.head;
  }
  get isEmpty() {
    return this.length === 0;
  }
}

function verticalOrder(root) {
  var queue = new Queue();
  queue.enqueue([root, 0]);
  var map = {};
  var l = Infinity,
    h = -Infinity;

  while (!queue.isEmpty) {
    var cur = queue.dequeue();
    map[cur[1]] =
      map[cur[1]] === undefined ? [cur[0].data] : [...map[cur[1]], cur[0].data];
    if (cur[0].left) queue.enqueue([cur[0].left, cur[1] - 1]);
    if (cur[0].right) queue.enqueue([cur[0].right, cur[1] + 1]);
    l = Math.min(l, cur[1]);
    h = Math.max(h, cur[1]);
  }

  var res = [];
  for (let i = l; i <= h; i++) {
    var q = map[i];
    res.push(q.sort((a, b) => a - b));
  }

  return res;
}

function buildbt(arr) {
  const head = new Node(arr[0]);

  addch(head, 0);

  function addch(node, pos) {
    if (node.data === null) return;
    if (arr[pos * 2 + 1]) node.left = new Node(arr[pos * 2 + 1]);
    if (arr[pos * 2 + 2]) node.right = new Node(arr[pos * 2 + 2]);
    if (node.left) addch(node.left, pos * 2 + 1);
    if (node.right) addch(node.right, pos * 2 + 2);
  }

  return head;
}

const bt = buildbt([
  1,
  2,
  6,
  null,
  7,
  3,
  null,
  null,
  null,
  4,
  5,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  8,
  null,
]);
console.log(verticalOrder(bt));
