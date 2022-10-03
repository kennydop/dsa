const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const josephus = (n) => {
  var bin = Number(n).toString(2);
  var start = bin.charAt(0);
  bin = bin.slice(1).concat(start);
  return parseInt(bin, 2);
};

rl.question("Enter n: ", function (answer) {
  const n = answer;
  console.log(josephus(n));
  rl.close();
});
