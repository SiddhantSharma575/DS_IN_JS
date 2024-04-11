function binarySearch(arr, target, left, right) {
  if (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) {
      return true;
    } else if (target < arr[mid]) {
      return binarySearch(arr, target, left, mid);
    } else {
      return binarySearch(arr, target, mid + 1, right);
    }
  }
  return false;
}

const arr = [3, 4, 6, 7, 9, 12, 16, 17];
const target =222;
const left = 0;
const right = arr.length - 1;
console.log("PRESENT OR NOT", binarySearch(arr, target, left, right));
