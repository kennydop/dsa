const encode = (strs) => {
  var res = "";
  for (let i = 0; i < strs.length; i++) {
    const e = strs[i].length.toString() + strs[i];
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
    while (!isNaN(c)) {
      len = len * mul + c;
      k += 1;
      c = parseInt(str[k]);
    }
    i = k;
    res.push(str.substring(k, k + len));
    i = k + len;
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
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis  minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit  quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur  fugiat, temporibus enim commodi iusto libero magni deleniti quod quam  consequuntur! Commodi minima excepturi repudiandae velit hic maxime doloremque. Quaerat provident commodi consectetur veniam similique ad  earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo  fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore  suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam  totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam  quasi aliquam eligendi, placeat qui corporis!",
    "is",
    "hoax",
    ", ",
    "you do agree",
    "don't you?",
    "?",
  ];
  const encoded = encode(t);
  // console.log("encoded: ", encoded);
  const decoded = decode(encoded);
  // console.log("decoded: ", decoded);
  for (let i = 0; i < decoded.length; i++) {
    const z = decoded[i];
    if (z !== t[i]) return false;
  }
  return true;
};

console.log(test());
