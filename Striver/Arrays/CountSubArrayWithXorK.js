function bruteForce(arr, k) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let xorr = 0;
      for (let k = i; k <= j; k++) {
        xorr = xorr ^ arr[k];
      }
      if (xorr === k) count++;
    }
  }
  return count;
}

function bruteForceTwo(arr, k) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let xorr = 0;
    for (let j = i; j < arr.length; j++) {
      xorr = xorr ^ arr[j];
      if (xorr === k) count++;
    }
  }
  return count;
}

function optimalApproach(arr, k) {
  let xr = 0;
  const mpp = new Map();
  mpp.set(xr, 1);
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    xr = xr ^ arr[i];
    const x = xr ^ k;
    if (mpp.has(x)) {
      cnt += mpp.get(x);
    }
    mpp.set(xr, (mpp.get(xr) || 0) + 1);
  }
  return cnt;
}

let arr = [4, 2, 2, 6, 4];
let k = 6;

console.log("Brute force", bruteForce(arr, k));
console.log("brute Force Two", bruteForceTwo(arr, k));
console.log("Optimal Approach", optimalApproach(arr, k));

