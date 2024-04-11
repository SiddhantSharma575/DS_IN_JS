function solve(arr) {
  let low = 0;
  let high = arr.length - 1;
  let ans = Infinity;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[low] <= arr[mid]) {
      ans = Math.min(ans, arr[low]);
      low = mid + 1;
    } else {
      ans = Math.min(ans, arr[mid]);

      high = mid - 1;
    }
  }
  return ans;
}

const arr = [3, 4, 5, 1, 2];
console.log("Minimum element", solve(arr));
