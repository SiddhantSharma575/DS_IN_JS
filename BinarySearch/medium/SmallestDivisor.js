function sumByD(arr, div) {
  let n = arr.length; // size of array
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += Math.ceil(arr[i] / div);
  }
  return sum;
}

function smallestDivisor(arr, limit) {
  let n = arr.length;
  if (n > limit) return -1;
  let low = 1;
  let high = Math.max(...arr);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (sumByD(arr, mid) <= limit) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

let arr = [1, 2, 3, 4, 5];
let limit = 8;
let ans = smallestDivisor(arr, limit);
console.log("The minimum divisor is:", ans);
