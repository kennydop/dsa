function solution(A) {
  var j = 0,
    rows = 0,
    tallest = A[j];
  const count = A.length;
  while (j < count) {
    if (A[j] >= tallest) {
      tallest = A[j];
      rows += 1;
    }
    j += 1;
  }
  return rows;
}

console.log(solution([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
console.log(solution([]));
