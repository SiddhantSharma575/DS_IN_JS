function countSmallerThanMid(A, mid, n) {
    let l = 0, h = n - 1;
    while (l <= h) {
      let md = (l + h) >> 1;
      if (A[md] <= mid) {
        l = md + 1;
      } else {
        h = md - 1;
      }
    }
    return l;
  }
  
  function findMedian(A, row, col) {
    let low = 1;
    let high = 1000000000;
    let n = row;
    let m = col;
    while (low <= high) {
      let mid = (low + high) >> 1;
      let cnt = 0;
      for (let i = 0; i < n; i++) {
        cnt += countSmallerThanMid(A[i], mid, col);
      }
      if (cnt <= (n * m) / 2)
        low = mid + 1;
      else
        high = mid - 1;
    }
    return low;
}

  
let row = 3, col = 3;
let arr = [[1, 3, 8],
           [2, 3, 4],
           [1, 2, 5]];
console.log("The median of the row-wise sorted matrix is: " + findMedian(arr, row, col));