var isValid = function (s) {
  const len = s.length;
  if (len < 2) return false;
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  var stack = [];
  for (let i = 0; i < len; i++) {
    var e = s[i];
    if (stack.length > 0 && map[stack[stack.length - 1]] === e) {
      stack.pop();
    } else {
      stack.push(e);
    }
  }
  return stack.length === 0;
};

console.log(isValid("{{{}[}]}}"));
