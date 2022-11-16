const encode = (strs) => {
  var res = "";
  for (let i = 0; i < strs.length; i++) {
    const e = strs[i].length.toString() + "%" + strs[i];
    res += e;
  }
  return res;
};

const decode = (str) => {
  var res = [];
  var i = 0,
    j = 0;
  while (i < str.length) {
    var len = parseInt(str[i]);
    var k = i + 1;
    var c = parseInt(str[k]);
    var mul = 10;
    while (str[k] != "%") {
      len = len * mul + c;
      k += 1;
      c = parseInt(str[k]);
    }
    i = k + 1;
    res.push(str.substring(k + 1, k + len + 1));
    i = k + len + 1;
  }
  return res;
};

const test = function () {
  const t = [
    "we",
    "say",
    ":",
    "this",
    " ",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur",
    "is",
    "hoax",
    ", ",
    "you do agree",
    "don't you?",
    "?",
  ];
  const encoded = encode(t);
  console.log("encoded: ", encoded);
  const decoded = decode(encoded);
  console.log("decoded: ", decoded);
  for (let i = 0; i < decoded.length; i++) {
    const z = decoded[i];
    if (z !== t[i]) return false;
  }
  return true;
};

console.log(test());
