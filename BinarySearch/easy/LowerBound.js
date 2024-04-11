function lowerBound(arr, key) {
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] == key) {
      return i;
    } else if (i != arr.length - 1 && arr[i] < key) {
      return i + 1;
    }
  }
  return arr.length;
}

function lowerBoundByBS(arr, n, x) {
  let low = 0,
    high = n - 1;
  let ans = n;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    // maybe an answer
    if (arr[mid] >= x) {
      ans = mid;
      // look for smaller index on the left
      high = mid - 1;
    } else {
      low = mid + 1; // look on the right
    }
  }
  return ans;
}

const arr = [1, 2, 2, 3];
const key = 2;
// ans : 3
console.log("Result", lowerBound(arr, key));
console.log("Result", lowerBoundByBS(arr, key));
