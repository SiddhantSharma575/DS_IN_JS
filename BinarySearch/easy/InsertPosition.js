function insertPosition(arr, target) {
  let index = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= target) {
      index = i;
      break;
    }
  }
  return index;
}

function insertPositionOptimized(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let ans = arr.length;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

const arr = [1, 2, 4, 7];
const target = 2;
console.log("INDEX", insertPosition(arr, target));
console.log("INDEX", insertPositionOptimized(arr, target));
