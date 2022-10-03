const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  const length = nums.length;
  var results = [];
  for (let i = 0; i < length; i++) {
    const a = nums[i];
    if (a === nums[i - 1]) continue;
    var bc = findBC(a, i, nums, length);
    if (bc.length !== 0) results.push(...bc);
  }
  return results;
};

const findBC = (a, i, nums, length) => {
  var bcs = [];
  var r = i + 1;
  var l = length - 1;
  while (r < length && l > 0 && r < l) {
    var sum = a + nums[r] + nums[l];
    if (sum > 0) {
      l = l - 1;
    } else if (sum < 0) {
      r = r + 1;
    } else {
      bcs.push([a, nums[r], nums[l]]);
      r = r + 1;
      while (nums[r] == nums[r - 1] && r < l) {
        r = r + 1;
      }
    }
  }
  return bcs;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
