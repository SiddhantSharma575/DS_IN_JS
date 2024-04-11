function bruteForceOne(val) {
  return Math.floor(Math.sqrt(val));
}

function bruteForceTwo(val) {
  for (let i = 1; i < val / 2; i++) {
    let current = i * i;
    if (current === val) {
      return i;
    } else if (current > val) {
      return i - 1;
    }
  }
}

function optimalOne(val) {
  let low = 1;
  let high = val;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (mid * mid <= val) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high;
}

const val = 28;
console.log("VALUE", bruteForceOne(val));
console.log("VALUE", bruteForceTwo(val));
console.log("VALUE", optimalOne(val));
