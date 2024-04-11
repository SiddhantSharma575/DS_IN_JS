function kthMissing(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= k) k++;
    else break;
  }
  return k;
}

function missingK(vec, n, k) {
  let low = 0,
    high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let missing = vec[mid] - (mid + 1);
    if (missing < k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return k + high + 1;
}


const arr = [2, 3, 4, 7, 11];
const k = 5;

console.log(kthMissing(arr, k));
