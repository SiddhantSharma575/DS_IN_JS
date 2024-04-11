function findMax(arr) {
  let maxi = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    maxi = Math.max(maxi, arr[i]);
  }
  return maxi;
}

function calculateHourse(v, h) {
  let totalH = 0;
  let n = v.length;
  // Find total hours
  for (let i = 0; i < n; i++) {
    totalH += Math.ceil(v[i] / h);
  }
  return totalH;
}

function minimumRateToEatBananas(v, h) {
  let maxi = findMax(v);
  for (let i = 1; i <= maxi; i++) {
    let reqTime = calculateHourse(v, i);
    if (reqTime <= h) {
      return i;
    }
  }
  return maxi;
}

function optimal(v, h) {
  let low = 1;
  let high = findMax(v);

  // Apply binary search
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let totalH = calculateTotalHours(v, mid);
    if (totalH <= h) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

let v = [7, 15, 6, 3];
let h = 8;
let ans = minimumRateToEatBananas(v, h);
console.log("Koko should eat at least " + ans + " bananas/hr.");
