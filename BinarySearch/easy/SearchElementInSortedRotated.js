function search(arr, target) {
  let low = 0;
  let high = arr.length;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[low] <= arr[mid]) {
      if (arr[low] <= target && target <= arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (arr[mid] <= target && target <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}

function searchInARotatedSortedArrayII(arr, k) {
  let n = arr.length; // size of the array.
  let low = 0,
    high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    //if mid points the target
    if (arr[mid] === k) return true;

    //Edge case:
    if (arr[low] === arr[mid] && arr[mid] === arr[high]) {
      low = low + 1;
      high = high - 1;
      continue;
    }

    //if left part is sorted:
    if (arr[low] <= arr[mid]) {
      if (arr[low] <= k && k <= arr[mid]) {
        //element exists:
        high = mid - 1;
      } else {
        //element does not exist:
        low = mid + 1;
      }
    } else {
      //if right part is sorted:
      if (arr[mid] <= k && k <= arr[high]) {
        //element exists:
        low = mid + 1;
      } else {
        //element does not exist:
        high = mid - 1;
      }
    }
  }
  return false;
}

let arr = [7, 8, 9, 1, 2, 3, 4, 5, 6];
let n = 9,
  k = 1;
let ans = search(arr, k);
if (ans === -1) console.log("Target is not present.");
else console.log("The index is:", ans);
