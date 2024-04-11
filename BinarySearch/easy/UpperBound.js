function upperBound(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (i != 0 && arr[i] > target) {
      return i;
    }
  }
  return arr.length;
}

function optimal(arr, x, n) {
  let low = 0,
    high = n - 1;
  let ans = n;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    // maybe an answer
    if (arr[mid] > x) {
      ans = mid;
      //look for smaller index on the left
      high = mid - 1;
    } else {
      low = mid + 1; // look on the right
    }
  }
  return ans;
}

let arr = [3, 5, 8, 9, 15, 19];
let target = 9;
console.log("UPPER BOUND", upperBound(arr, target));
console.log("UPPER BOUND", optimal(arr, target, arr.length));
