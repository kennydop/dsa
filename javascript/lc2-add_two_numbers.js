var addTwoNumbers = function (l1, l2) {
  var res = new ListNode();
  var curr = res;
  var carry = 0;
  var sum = 0;
  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
    curr.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    sum = carry;
    curr = curr.next;
  }
  return res.next;
};
