const mergeSort = (arr) => {
  const length = arr.length;
  if (length <= 1) return arr;
  const mid = Math.round(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  var sorted = [];
  var li = 0;
  var ri = 0;
  while (li < left.length && ri < right.length) {
    if (left[li] < right[ri]) {
      sorted.push(left[li]);
      li += 1;
    } else {
      sorted.push(right[ri]);
      ri += 1;
    }
  }
  sorted.push(...left.slice(li));
  sorted.push(...right.slice(ri));
  return sorted;
};

console.log(
  mergeSort([4, 7, 3, -2, 0, 13, 0, 53, 3, -3, -4, 2, -5, 0, 1, -5, -2, 5])
);
