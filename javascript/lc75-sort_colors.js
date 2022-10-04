var sortColors = function (nums) {
  let i = 0,
    j = nums.length - 1;
  while (nums[i] === 0) i += 1;
  while (nums[j] === 2) j -= 1;
  let k = i;
  while (k <= j) {
    if (nums[k] === 0) {
      [nums[i], nums[k]] = [nums[k], nums[i]];
      i = +1;
      k -= 1;
    } else if (nums[k] === 2) {
      [nums[j], nums[k]] = [nums[k], nums[j]];
      j -= 1;
      k -= 1;
    }
    k += 1;
    while (nums[i] === 0) i += 1;
    while (nums[j] === 2) j -= 1;
    k = Math.max(k, i);
  }
  console.log(nums);
};

sortColors([2, 0, 2, 1, 1, 0]);
