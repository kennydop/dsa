var lengthOfLongestSubstring = function (s) {
  var i = 0;
  var j = 0;
  const count = s.length;
  var set = new Set();
  var length = 0;
  while (j < count) {
    while (set.has(s.charAt(j))) {
      set.delete(s.charAt(i));
      i += 1;
    }
    set.add(s.charAt(j));
    length = Math.max(length, j - i + 1);
    j += 1;
  }
  return length;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
