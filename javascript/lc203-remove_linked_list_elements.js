var removeElements = function (head, val) {
  var dhead = new ListNode();
  var prev = dhead;
  var curr = head;
  while (curr) {
    if (curr.val === val) {
      curr = curr.next;
      if (curr == null) {
        prev.next = curr;
      }
    } else {
      prev.next = curr;
      curr = curr.next;
      prev = prev.next;
    }
  }
  return dhead.next;
};
