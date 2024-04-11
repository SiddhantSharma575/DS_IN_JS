function fourSum(nums, target) {
  let n = nums.length;
  let ans = [];

  // Sort the given array:
  nums.sort((a, b) => a - b);

  // Calculating the quadruplets:
  for (let i = 0; i < n; i++) {
    // Avoid duplicates while moving i:
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < n; j++) {
      // Avoid duplicates while moving j:
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      // 2 pointers:
      let k = j + 1;
      let l = n - 1;
      while (k < l) {
        let sum = nums[i] + nums[j] + nums[k] + nums[l];
        if (sum === target) {
          let temp = [nums[i], nums[j], nums[k], nums[l]];
          ans.push(temp);
          k++;
          l--;

          // Skip the duplicates:
          while (k < l && nums[k] === nums[k - 1]) k++;
          while (k < l && nums[l] === nums[l + 1]) l--;
        } else if (sum < target) {
          k++;
        } else {
          l--;
        }
      }
    }
  }

  return ans;
}

let arr = [1, 0, -1, 0, -2, 2];
let target = 0;

console.log(fourSum(arr, target));
