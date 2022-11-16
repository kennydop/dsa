// function caesarCipher(s, k) {
//   const cletters = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//   ];
//   const sletters = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];
//   let results = "";
//   var type = [];
//   for (let i = 0; i < s.length; i++) {
//     const e = s[i];
//     var index = cletters.findIndex((l) => l === e);
//     if (index !== -1) {
//       type = cletters;
//     } else {
//       index = sletters.findIndex((l) => l === e);
//       type = sletters;
//     }
//     if (index === -1) results = results + e;
//     else if (index + k > 25 || index + k < 0) {
//       index = (index + k) % 26;
//       if (index < 0) index += 26;
//       results = results + type[index];
//     } else {
//       results = results + type[index + k];
//     }
//   }
//   return results;
// }

// console.log(caesarCipher("There's-a-starman-waiting-in-the-sky", 3));
// console.log(
//   "Wkhuh'v-d-vwdupdq-zdlwlqj-lq-wkh-vnb" ===
//     caesarCipher("There's-a-starman-waiting-in-the-sky", 3)
// );
// console.log(caesarCipher("u-v-w-x-y-z", -55));

// var grid = ["eaewew", "asdfgh"];
// var ordered = grid[0].sort();
// console.log(ordered);

const addWithDiffSigns = (num) => {
  var numbers = [];
  var sum = 0;
  while (num > 0) {
    numbers.push(num % 10);
    num = Math.floor(num / 10);
  }
  var sign = 1;
  for (let i = numbers.length - 1; i >= 0; i--) {
    const e = numbers[i];
    sign % 2 === 0 ? (sum -= e) : (sum += e);
    sign++;
  }
  return sum;
};
console.log(addWithDiffSigns(54132));
