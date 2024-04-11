function bruteForce(arr, target) {
  let max = -Infinity;

  for (let i = 0; i < arr.length - 1; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === target) {
        max = Math.max(j - i + 1, max);
      }
    }
  }
  return max;
}

function optimalApproach(arr, target) {
  let sum = 0;
  let maxi = -1;
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum == 0) {
      maxi = i + 1;
    } else if (map.has(sum)) {
      maxi = Math.max(maxi, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }
  return maxi;
}

let arr = [9, -3, 3, -1, 6, -5];
console.log("Brute Force", bruteForce(arr, 0));
console.log("Optimal Approach", optimalApproach(arr, 0));
