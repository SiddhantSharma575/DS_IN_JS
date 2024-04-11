function solve(arr) {
     let low = 0,
       high = arr.length - 1;
     let ans = Infinity;
     let index = -1;
     while (low <= high) {
       let mid = Math.floor((low + high) / 2);
       // If search space is already sorted,
       // then arr[low] will always be
       // the minimum in that search space:
       if (arr[low] <= arr[high]) {
         if (arr[low] < ans) {
           index = low;
           ans = arr[low];
         }
         break;
       }

       // If left part is sorted:
       if (arr[low] <= arr[mid]) {
         // Keep the minimum:
         if (arr[low] < ans) {
           index = low;
           ans = arr[low];
         }

         // Eliminate left half:
         low = mid + 1;
       } else {
         // If right part is sorted:
         // Keep the minimum:
         if (arr[mid] < ans) {
           index = mid;
           ans = arr[mid];
         }

         // Eliminate right half:
         high = mid - 1;
       }
     }
     return index;
}

const arr = [4, 5, 6, 7, 0, 1, 2, 3];
console.log("The Number of times array is rotated are", solve(arr));
