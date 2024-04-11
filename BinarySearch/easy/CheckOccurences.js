function checkFirstAndLastOccurenceOptimal(arr, target) {
  let first = -1;
  let last = -1;
  let low = 0;
  let high = arr.length;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      first = mid;
      high = mid - 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  low = 0;
  high = arr.length;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      last = mid;
      low = mid + 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return [first, last];
}

const arr = [2, 4, 6, 8, 8, 8, 11, 13];
const arr2 = [2, 4, 6, 8, 8, 8, 11, 13];
const target = 8;
const target2 = 10;

const [first, last] = checkFirstAndLastOccurenceOptimal(arr, target);
if (first !== -1) {
  console.log(last - first + 1);
} else {
  console.log("not present");
}
