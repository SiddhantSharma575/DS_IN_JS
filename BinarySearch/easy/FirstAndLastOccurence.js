function checkFirstAndLastOccurence(arr, target) {
  let first = -1,
    last = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      first = i;
      break;
    }
  }
  for (let i = arr.length; i > first; i--) {
    if (arr[i] === target) {
      last = i;
      break;
    }
  }
  return [first, last];
}

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

console.log(
  "FIRST AND LAST OCCURENCES ARE : ",
  checkFirstAndLastOccurence(arr, target)
);
console.log(
  "FIRST AND LAST OCCURENCES ARE : ",
  checkFirstAndLastOccurence(arr2, target2)
);

console.log(
  "FIRST AND LAST OCCURENCES ARE : ",
  checkFirstAndLastOccurenceOptimal(arr, target)
);

console.log(
  "FIRST AND LAST OCCURENCES ARE : ",
  checkFirstAndLastOccurenceOptimal(arr2, target2)
);

