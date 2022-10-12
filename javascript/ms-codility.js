//2
function solution(blocks) {
  const count = blocks.length;
  var dist = 0;
  for (let i = 0; i < count; i++) {
    const e = blocks[i];
    var left = i;
    var right = i;
    while (
      blocks[left] <= blocks[left - 1] ||
      blocks[right] <= blocks[right + 1]
    ) {
      if (left > 0 && blocks[left] <= blocks[left - 1]) {
        left -= 1;
      }
      if (right < count && blocks[right] <= blocks[right + 1]) {
        right += 1;
      }
    }
    const tempdist = right - left + 1;
    dist = Math.max(dist, tempdist);
  }
  return dist;
}

console.log(solution([]));
