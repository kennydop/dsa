//1
function solution(A) {
  var map = {};
  var recSides = [];
  const len = A.length;
  for (let i = 0; i < len; i++) {
    const e = A[i];
    map[e] === undefined ? (map[e] = 1) : (map[e] += 1);
  }

  var added = new Set();
  for (let i = 0; i < len; i++) {
    const e = A[i];
    const app = map[e];
    if (app > 1 && !added.has(e)) {
      added.add(e);
      recSides = [...recSides, ...new Array(Math.floor(app / 2)).fill(e)];
    }
  }

  var min = Infinity;
  const recSidesLength = recSides.length;
  if (recSidesLength < 2) return -1;
  for (let i = 0; i < recSidesLength; i++) {
    const e = recSides[i];
    for (let j = i + 1; j < recSidesLength; j++) {
      const k = recSides[j];
      min = Math.min(min, Math.abs(e - k));
    }
  }

  return min;
}

//2
function solution(S) {
  var i = 0,
    count = 0,
    len = S.length;
  const starter = S.charAt(i);
  if (starter !== "a") {
    switch (starter) {
      case "b":
        count += 1;
        break;
      case "c":
        count += 2;
        break;

      default:
        count += 0;
        break;
    }
  }
  while (i < len) {
    switch (S.charAt(i) + S.charAt(i + 1)) {
      case "aa":
        count += 2;
        break;
      case "ac":
        count += 1;
        break;
      case "bb":
        count += 2;
        break;
      case "ba":
        count += 1;
        break;
      case "cc":
        count += 2;
        break;
      case "cb":
        count += 1;
        break;
      default:
        count += 0;
        break;
    }
    i += 1;
  }
  return count;
}
