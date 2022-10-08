var isPalindrome = function (head) {
  var slow = head;
  var fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  var prev = null;
  while (slow) {
    var temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  slow = head;
  fast = prev;
  while (fast) {
    if (fast.val !== slow.val) return false;
    fast = fast.next;
    slow = slow.next;
  }
  return true;
};
